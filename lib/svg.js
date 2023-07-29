const Shape = require('./shape.js');
const Circle = require('./shape.js');
const Triangle = require('./shape.js');
const Square = require('./shape.js');

function createShape(text, text_colour, shape, shape_colour) {
  const newShape = new Shape(text, text_colour).render();
  let chosenShape = '';
  switch(shape) {
    case "Circle":
      chosenShape = new Circle(shape_colour).render();
      break;
    case "Triangle":
      chosenShape = new Triangle(shape_colour).render();
      break;
    case "Square":
      chosenShape = new Square(shape_colour).render();
  }

  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg xmlns:xlink="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${chosenShape}
    ${newShape}
  </svg>
  `;
}

module.exports = { createShape };
