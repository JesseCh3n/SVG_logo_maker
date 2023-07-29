class Shape {
  constructor(text, text_colour, shape, shape_colour) {
    this.text = text;
    this.text_colour = text_colour;
    this.shape = shape;
    this.shape_colour = shape_colour;
  }
}

  /*render() {
   const svgText = `<text x="50" y="75" font-size="25" text-anchor="middle" fill="${this.text_colour}">${this.text}</text>`;
    let svgShape = '';
    switch(this.shape) {
    case "Circle":
      svgShape = `<circle cx="50" cy="70" r="40" fill="${this.shape_colour}"></circle>`;
      break;
    case "Triangle":
      svgShape = `<polygon points="50,15, 100,100 0,100" fill="${this.shape_colour}"></polygon>`;
      break;
    case "Square":
      svgShape = `<rect x="10" y="28" width="80" height="80" fill="${this.shape_colour}"></rect>`;
    }
    return `${svgShape}
    ${svgText}`;
  }
}*/

class Circle extends Shape {
  constructor(text, text_colour, shape, shape_colour) {
    super(text, text_colour, shape, shape_colour);
  }

  render() {
    return `<circle cx="50" cy="70" r="40" fill="${this.shape_colour}"></circle>
    <text x="50" y="75" font-size="25" text-anchor="middle" fill="${this.text_colour}">${this.text}</text>`;
  }
}

class Triangle extends Shape {
  constructor(text, text_colour, shape, shape_colour) {
    super(text, text_colour, shape, shape_colour);
  }

  render() {
    return `<polygon points="50,15, 100,100 0,100" fill="${this.shape_colour}"></polygon>
    <text x="50" y="75" font-size="25" text-anchor="middle" fill="${this.text_colour}">${this.text}</text>`;
  }
}

class Square extends Shape {
  constructor(text, text_colour, shape, shape_colour) {
    super(text, text_colour, shape, shape_colour);
  }

  render() {
    return `<rect x="10" y="28" width="80" height="80" fill="${this.shape_colour}"></rect>
    <text x="50" y="75" font-size="25" text-anchor="middle" fill="${this.text_colour}">${this.text}</text>`;
  }
}

module.exports = {Cirlce : Circle, Triangle : Triangle, Square : Square};
