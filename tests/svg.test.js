const {createShape} = require('../lib/svg.js');
const Shape = require('../lib/shape.js');

describe('svg_test', () => {
  test('render message', () => {
    const newSVG = createShape('ABC', "white", "Circle", "red");
    const newCircle = new Shape.Cirlce('ABC', 'white', 'Circle', 'red').render();
    const expectedSVG = `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">${newCircle}</svg>`;
    expect(newSVG).toEqual(expectedSVG);
  });
});
