const Shape = require('../lib/shape.js');

describe('Circle', () => {
  test('render message', () => {
    const shape = new Shape.Cirlce();
    shape.text = 'abc';
    shape.text_colour = 'white';
    shape.shape_colour = 'red';
    expect(shape.render()).toEqual(`<circle cx="50" cy="70" r="40" fill="red"></circle>
    <text x="50" y="75" font-size="25" text-anchor="middle" fill="white">abc</text>`);
  });
});

describe('Triangle', () => {
  test('render message', () => {
    const shape = new Shape.Triangle();
    shape.text = 'HIJ';
    shape.text_colour = 'yellow';
    shape.shape_colour = 'dark blue';
    expect(shape.render()).toEqual(`<polygon points="50,15, 100,100 0,100" fill="dark blue"></polygon>
    <text x="50" y="75" font-size="25" text-anchor="middle" fill="yellow">HIJ</text>`);
  });
});

describe('Square', () => {
  test('render message', () => {
    const shape = new Shape.Square();
    shape.text = 'HA';
    shape.text_colour = 'red';
    shape.shape_colour = 'black';
    expect(shape.render()).toEqual(`<rect x="10" y="28" width="80" height="80" fill="black"></rect>
    <text x="50" y="75" font-size="25" text-anchor="middle" fill="red">HA</text>`);
  });
});