//
//  routines to log data into ML ready form
//
//  by xac@ucla.edu, 08/2018
//

var KNOCK = KNOCK || {};

KNOCK.labels = ["pad", "knuckle"];

//
//  initialize instances, index of label etc.
//
KNOCK.initInstances = function() {
  KNOCK.megaStrInstances = "";
  KNOCK.idxLabel = 0;
};

//
//  add an instance to the training data set
//
KNOCK.addInstance = function(instance) {
  var strFeatures = "";
  var strInstance = "";
  for (var i = 0; i < instance.length; i++) {
    strFeatures += "f" + i + ",";
    strInstance += instance[i].toFixed(2) + ",";
  }

  if (KNOCK.megaStrInstances.length == 0) {
    strFeatures += "class";
    console.log(strFeatures);
    KNOCK.megaStrInstances += strFeatures + "\n";
  }
  strInstance += KNOCK.labels[KNOCK.idxLabel]
  console.log(strInstance);
  KNOCK.megaStrInstances += strInstance + "\n";
};

//
//  print all the collected instances
//
KNOCK.printAll = function() {
  console.log(KNOCK.megaStrInstances);
};
