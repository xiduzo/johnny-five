var five = require("../lib/johnny-five");
var board = new five.Board();

board.on("ready", function () {
  // var matrix = new five.Led.Matrix({
  var matrix = new five.LEDMatrix({
    // addresses: [0x65],
    // controller: "MY9221",
    orientation: 3,
  });

  // matrix.clear();
  // matrix.draw(heart);

  // matrix.fullColor({
  //   r: 0,
  //   g: 0,
  //   b: 255,
  // });

  // matrix.clear();

  // matrix.colorBar(100);

  // matrix.colorWave();

  // matrix.displayColorAnimation(0, 3000);

  matrix.displayString("blokdots", 5000, "yellow");

  // matrix.displayNumber(555, 150, "yellow");

  // matrix.displayEmoji(32);

  let something = [
    0x25, 0x35, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x25, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x25, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0x25, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x95, 0xff,
    0x25, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0x25, 0xff, 0xff,
    0xff, 0xff, 0x75, 0xff, 0xff, 0xff, 0x25, 0xff, 0xff, 0xff, 0xff, 0xff,
    0x35, 0xff, 0xff, 0xff,
  ];

  // matrix.draw(something);
});