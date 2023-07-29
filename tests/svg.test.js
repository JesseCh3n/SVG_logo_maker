const {createShape} = require('../lib/svg.js');

describe('svg_test', () => {
  test('render message', () => {
    createShape('ABC', "white", "Circle", "red");
    expect(createShape()).toEqual(`<?xml version="1.0" encoding="UTF-8" standalone="no"?> 
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"> 
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
     <circle cx="50" cy="70" r="40" fill="red"></circle>
     <text x="50" y="75" font-size="25" text-anchor="middle" fill="white">ABC</text>
    </svg>`);
  });
});
