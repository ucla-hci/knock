//
//  demo program - file icons that can be copied, cut, pasted or deleted via a context menu
//
//  by xac@ucla.edu, 08/2018
//

var DEMO = DEMO || {};

//
//
//
DEMO.FileExplorer = function(container) {
  this.explorer = container;

  // generate icons of files
  this.ICONFILE = "&#128196;";
  var numFiles = 1; // ((1 + Math.random()) / 2) * 16;
  var positionInfo = this.explorer[0].getBoundingClientRect();
  this.explorer.empty();
  for (var i = 0; i < numFiles; i++) {
    var lbFile = $("<label/>");
    lbFile.html(this.ICONFILE);
    lbFile.attr("id", Math.floor(Date.now() / 1000));
    lbFile.css("font-size", 64);
    lbFile.css("position", "absolute");
    lbFile.css(
      "left",
      (positionInfo.width / 2) *
        (0.75 + Math.sin(2 * Math.PI * Math.random() * (i + 1)))
    );
    lbFile.css(
      "top",
      (positionInfo.height / 2) *
        (0.75 + Math.sin(2 * Math.PI * Math.random() * (numFiles - i)))
    );

    this.setupFile(lbFile);

    this.explorer.append(lbFile);
  }

  // touch events for explorer
  this.explorer.on("touchstart", this.explorerTouchStart.bind(this));
  this.explorer.on("touchmove", this.explorerTouchMove.bind(this));
  this.explorer.on("touchend", this.explorerTouchEnd.bind(this));

  // context menu
  this.contextMenu = this.getContextMenu();
  this.explorer.append(this.contextMenu);
  this.contextMenu.css("position", "absolute");
  this.contextMenuDisabled = false;
  $(".context-menu-button").attr("disabled", true);
  this.contextMenu.hide();
};

DEMO.FileExplorer.prototype = {
  constructor: DEMO.FileExplorer
};

//
//  show context menu, fade in and activate it
//
DEMO.FileExplorer.prototype.showContextMenu = function() {
  if (this.contextMenuActive) return;
  this.contextMenu.fadeIn(
    250,
    function() {
      this.contextMenuActive = true;
    }.bind(this)
  );

  var positionInfo = this.contextMenu[0].getBoundingClientRect();
  this.contextMenu.css("left", this.coordTouch.x - positionInfo.width / 2);
  this.contextMenu.css("top", this.coordTouch.y - positionInfo.top / 2);

  // reset a file's position if it is dragged by the knuckle
  var lbFile = $("#" + this.idTouched);
  lbFile.css("left", this.coordOriginal.left);
  lbFile.css("top", this.coordOriginal.top);
};

//
//  hide context menu, fade out and deactivte it
//
DEMO.FileExplorer.prototype.hideContextMenu = function() {
  this.contextMenu.fadeOut(
    250,
    function() {
      this.contextMenuActive = false;
    }.bind(this)
  );
};

//
//  explorer touch start event handler
//
DEMO.FileExplorer.prototype.explorerTouchStart = function(e) {
  if (this.contextMenuActive) return;

  this.idTouched = undefined;
  var touch = e.targetTouches[0];
  this.coordTouch = { x: touch.clientX, y: touch.clientY };
  this.lastCoordTouch = this.coordTouch;
  this.isDragged = false;
};

//
//  explorer touch move event handler
//
DEMO.FileExplorer.prototype.explorerTouchMove = function(e) {
  if (this.contextMenuActive) return;

  var touch = e.targetTouches[0];
  if (this.idDragged == undefined || this.coordTouch == undefined) return;

  // move the file icon
  var lbFile = $("#" + this.idDragged);
  var left = Number.parseFloat(lbFile.css("left"));
  var top = Number.parseFloat(lbFile.css("top"));
  lbFile.css("left", left + touch.clientX - this.coordTouch.x);
  lbFile.css("top", top + touch.clientY - this.coordTouch.y);

  // update recorded touch coord
  this.coordTouch = { x: touch.clientX, y: touch.clientY };
  this.lastCoordTouch = this.coordTouch;
  this.isDragged = true;
};

//
//  explorer touch end event handler
//
DEMO.FileExplorer.prototype.explorerTouchEnd = function(e) {
  if (this.contextMenuActive) return;

  this.coordTouch = undefined;
};

//
//  set up touch event handlers for a file icon
//
DEMO.FileExplorer.prototype.setupFile = function(lbFile) {
  lbFile.on(
    "touchstart",
    function(e) {
      this.idTouched = undefined;
      this.idDragged = $(e.currentTarget).attr("id");
      this.coordOriginal = {
        left: $(e.currentTarget).css("left"),
        top: $(e.currentTarget).css("top")
      };
    }.bind(this)
  );

  lbFile.on(
    "touchend",
    function(e) {
      this.idTouched = this.idDragged;
      this.idDragged = undefined;
    }.bind(this)
  );
};

//
//  generate context menu
//
DEMO.FileExplorer.prototype.getContextMenu = function() {
  var contextMenu = $("<table cellpadding='5'></table>");
  var promise = new Promise(function(resolve, reject) {
    contextMenu.load("../assets/contextmenu.html", function() {
      $(this).addClass("xac-context-menu");
      $(this)
        .find("td")
        .addClass("xac-context-menu ui-widget");
      $(this)
        .find("td")
        .button();
      resolve("loaded");
    });
  });

  promise.then(
    function(value) {
      console.log(value);
      console.log($("#tdCopy"));
      $("#tdCopy").click(
        function(e) {
          if (!this.contextMenuActive) return;
          var lbFile = $("#" + this.idTouched);
          this.lbFileOnClipboard = lbFile.clone();
          this.lbFileOnClipboard.attr("id", Math.floor(Date.now() / 1000));
          this.setupFile(this.lbFileOnClipboard);
        }.bind(this)
      );
      $("#tdCut").click(
        function(e) {
          if (!this.contextMenuActive) return;
          var lbFile = $("#" + this.idTouched);
          this.lbFileOnClipboard = lbFile.clone();
          this.setupFile(this.lbFileOnClipboard);
          lbFile.fadeOut();
          lbFile.remove();
        }.bind(this)
      );
      $("#tdPaste").click(
        function(e) {
          if (!this.contextMenuActive) return;
          if (this.lbFileOnClipboard == undefined) return;
          this.lbFileOnClipboard.fadeIn();
          var positionInfo = this.contextMenu[0].getBoundingClientRect();
          this.lbFileOnClipboard.css(
            "left",
            this.lastCoordTouch.x - positionInfo.width / 2
          );
          this.lbFileOnClipboard.css(
            "top",
            this.lastCoordTouch.y - positionInfo.top / 2
          );
          this.explorer.append(this.lbFileOnClipboard);
        }.bind(this)
      );
      $("#tdDelete").click(
        function(e) {
          if (!this.contextMenuActive) return;
          var lbFile = $("#" + this.idTouched);
          lbFile.fadeOut();
        }.bind(this)
      );
    }.bind(this)
  );

  return contextMenu;
};
