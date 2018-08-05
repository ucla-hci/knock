//
//  main program for knock - a mobile app that can recognize touch by finger pad vs. knuckle
//
//  by xac@ucla.edu, 08/2018
//

var KNOCK = KNOCK || {};

KNOCK.TRAIN = 0;
KNOCK.TEST = 1;
KNOCK.DEMO = 2;

//
//  page ready function
//
$(document).ready(function() {
  //
  // init ui elements
  //
  var canvas = $("#tdCanvas");
  var positionInfo = canvas[0].getBoundingClientRect();

  $("input").checkboxradio({
    icon: false
  });

  $("[name='rbsMode']").on("change", KNOCK.switchMode);

  KNOCK.lbRecognition = $("<label/>");
  KNOCK.lbRecognition.attr("id", "lbRecognition");
  KNOCK.lbRecognition.attr("class", "ui-widget");
  KNOCK.lbRecognition.html(" ... ");
  KNOCK.lbRecognition.css("left", 0);
  KNOCK.lbRecognition.css("top", 0);

  $("input[id='rbTest']")[0].click(); // programmatically trigger 'test' as default mode

  // controls for collecting training data
  $("#selFingerPart").selectmenu({
    width: "85%",
    change: function(event, data) {
      KNOCK.idxLabel = data.item.value;
    }
  });
  $("#btnPrintAll").button();
  $("#btnPrintAll").click(function(e) {
    KNOCK.printAll();
  });

  // init machine learning and data logging
  KNOCK.initInstances();

  //
  // sensors
  //
  KNOCK.acceleration = undefined;
  KNOCK.rotationRate = undefined;
  $(window).on("devicemotion", KNOCK.updateMotionData);

  $("#tdCanvas").on("touchstart", KNOCK.touchstart);

  $("#tdCanvas").on("touchend", KNOCK.touchend);

  // prevent panning the web page
  $("#tdCanvas").on("touchmove", function(e) {
    e.preventDefault();
  });
});

//
//  update motion (imu) data
//
KNOCK.updateMotionData = function(e) {
  if (KNOCK.bufferIMU == undefined) return;
  KNOCK.bufferIMU[0].push(e.originalEvent.acceleration.x);
  KNOCK.bufferIMU[1].push(e.originalEvent.acceleration.y);
  KNOCK.bufferIMU[2].push(e.originalEvent.acceleration.z);
  KNOCK.bufferIMU[3].push(e.originalEvent.rotationRate.alpha);
  KNOCK.bufferIMU[4].push(e.originalEvent.rotationRate.beta);
  KNOCK.bufferIMU[5].push(e.originalEvent.rotationRate.gamma);
};

//
//  switch between different modes: traning, testing and demo
//
KNOCK.switchMode = function(e) {
  var rbChecked = $(this).filter(":checked");
  KNOCK.mode = parseInt(rbChecked.attr("value"));

  $("#ctrlTrain").hide();
  $("#tdCanvas").empty();

  switch (KNOCK.mode) {
    case KNOCK.TRAIN:
      $("#ctrlTrain").show();
      KNOCK.initInstances();
      break;
    case KNOCK.TEST:
      $("#tdCanvas").prepend(KNOCK.lbRecognition);
      break;
    case KNOCK.DEMO:
      KNOCK.fileExplorer = new DEMO.FileExplorer($("#tdCanvas"));
      break;
    default:
      break;
  }
};

//
//  handle start of touch
//
KNOCK.touchstart = function(e) {
  KNOCK.bufferIMU = [[], [], [], [], [], []];
  KNOCK.touch = e.targetTouches[0];
};

//
//  handle end of touch
//
KNOCK.touchend = function(e) {
  // assemble features
  var instance = [];
  instance.push(KNOCK.touch.radiusX);
  for (imuData of KNOCK.bufferIMU) {
    instance = instance.concat(KNOCK.computeFeatures(imuData));
  }

  // limit precision to 2
  var trimmedInstance = [];
  for (feature of instance) {
    trimmedInstance.push(Number.parseFloat(feature.toFixed(2)));
  }

  // process data to be trained, tested or demoed
  switch (KNOCK.mode) {
    case KNOCK.TRAIN:
      KNOCK.addInstance(instance);
      break;
    case KNOCK.TEST:
      KNOCK.lbRecognition.stop();
      KNOCK.lbRecognition.fadeIn();
      idxLabel = KnockClassifier.classify(trimmedInstance);
      KNOCK.lbRecognition.html(KNOCK.labels[idxLabel]);
      setTimeout(function() {
        KNOCK.lbRecognition.fadeOut();
      }, 250);
      break;
    case KNOCK.DEMO:
      idxLabel = KnockClassifier.classify(trimmedInstance);
      if (KNOCK.labels[idxLabel] == "pad") {
        KNOCK.fileExplorer.hideContextMenu();
      } else if (KNOCK.labels[idxLabel] == "knuckle") {
        KNOCK.fileExplorer.showContextMenu();
      } else {
      }
      break;
    default:
      break;
  }

  KNOCK.bufferIMU = undefined;
};

//
//  compute features from arrays fo sensor data
//
KNOCK.computeFeatures = function(arrData) {
  if (arrData.length == 0) return [];
  var first = arrData[0];
  var last = arrData[arrData.length - 1];
  var min = first,
    max = first;
  var avg = 0;
  for (data of arrData) {
    min = Math.min(min, data);
    max = Math.max(data, max);
    avg += data;
  }
  avg /= arrData.length;
  return [first, last, min, max, avg];
};