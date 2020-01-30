let blessed = require("blessed");

const width = 100;
const height = 50;

let screen = blessed.screen({
  smartCSR: true,
  title: "JavaScript Invaders!"
});

let box = blessed.box({
  top: "center",
  left: "center",
  width: width,
  height: height,
  content: "ALIEN",
  tags: true,
  border: { type: "line" },
  style: {
    fg: 'white',
    bg: 'blue',
    border: {
      fg: '#f0f0f0'
    }
  }
});

let ship = blessed.box({
  bottom: 1,
  left: width / 2,
  width: 3,
  height: 1,
  border: { type: "line" },
  style: {
    bg: "gray",
    border: { fg: "black" }
  }
});

box.append(ship);
screen.append(box);

box.key('left', function(ch, key) {
  ship.left -= 2;
  console.log(ship.left);
  screen.render();
});

box.key('right', function(ch, key) {
  
  console.log(ship.left);
  screen.render();
});

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
box.focus();

// Render the screen.
screen.render();

