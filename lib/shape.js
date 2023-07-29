class Shape {
  constructor(text, text_colour) {
    this.text = text;
    this.text_colour = text_colour;
  }

  render() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_colour}">${this.text}</text>`;
  }
}

class Circle extends Shape {
  constructor(shape_colour) {
    this.shape_colour = shape_colour;
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shape_colour}"><circle>`;
  }
}

class Triangle extends Shape {
  constructor(shape_colour) {
    this.shape_colour = shape_colour;
  }

  render() {
    return `<polygon points="50 15, 100 100, 0 100" fill="${this.shape_colour}"><polygon>`;
  }
}

class Square extends Shape {
  constructor(shape_colour) {
    this.shape_colour = shape_colour;
  }

  render() {
    return `<rect width="100" height="100" fill="${this.shape_colour}"><rect>`;
  }
}

module.exports = Shape;
module.exports = Circle;
module.exports = Triangle;
module.exports = Square;
