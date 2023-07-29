const {createShape} = require('../lib/svg.js');

describe('svg_test', () => {
  test('render message', () => {
    expect(createShape()).toEqual(expect.arrayContaining(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">`));
  });
});
