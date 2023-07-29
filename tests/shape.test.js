const Shape = require('../lib/shape.js');

describe('Circle', () => {
  test('render message', () => {
    const shape = new Shape.Cirlce();
    shape.shape_colour = 'red';
    expect(shape.render()).toEqual(expect.arrayContaining(`<circle cx="50" cy="70" r="40" fill="red"></circle>`));
  });
});

describe('Triangle', () => {
  test('render message', () => {
    const shape = new Shape.Triangle();
    shape.shape_colour = 'blue';
    expect(shape.render()).toEqual(expect.arrayContaining(`<polygon points="50,15, 100,100 0,100" fill="blue"></polygon>)`));
  });
});

describe('Square', () => {
  test('render message', () => {
    const shape = new Shape.Square();
    shape.shape_colour = 'black';
    expect(shape.render()).toEqual(expect.arrayContaining(`<circle cx="50" cy="70" r="40" fill="black"></circle>`));
  });
});