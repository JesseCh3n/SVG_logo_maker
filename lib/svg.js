const Shape = require('./shape.js');

function createShape(text, text_colour, shape, shape_colour) {
  const newCircle = new Shape.Cirlce(text, text_colour, shape, shape_colour);
  const newTriangle = new Shape.Triangle(text, text_colour, shape, shape_colour);
  const newSquare = new Shape.Square(text, text_colour, shape, shape_colour);
  let svgShape = '';
  switch(shape) {
  case "Circle":
    svgShape = newCircle.render();
    break;
  case "Triangle":
    svgShape = newTriangle.render();
    break;
  case "Square":
    svgShape = newSquare.render();
  }

  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
  <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
    ${svgShape}
  </svg>
  `;
}

module.exports = { createShape };
