const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createShape } = require('./svg.js');

class CLI {
  constructor() {
    this.fileName = '';
    this.text = '';
    this.text_colour = '';
    this.shape = '';
    this.shape_colour = '';
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'logo',
          message: 'Enter text for the logo. (Must not be more than 3 characters)',
        },
      ])
      .then(({logo}) => {
        if (logo.length >= 3) {
          throw new Error('Logo name must not be more than 3 characters!');
        } else {
          this.text = logo;
          this.fileName = `${logo}.svg`;
          return this.addTask();
        }
      })
      .then(() => {
        return writeFile(
          join(__dirname, '..', this.fileName),
          createShape(this.text, this.text_colour, this.shape, this.shape_colour)
        );
      })
      .then(() => console.log(`Created ${this.fileName}.`))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }

  addParameters() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text_colour',
          message: 'Enter a text colour (or hexadecimal number)',
        },
        {
          type: 'checkbox',
          name: 'shape',
          message: 'Select a shape',
          choices: ["Circle", "Triangle", "Square"],
        },
        {
          type: 'input',
          name: 'shape_colour',
          message: 'Enter a shape colour (or hexadecimal number)',
        },
      ])
      .then(({ text_colour, shape, shape_colour }) => {
        this.text_colour = text_colour;
        this.shape = shape[0];
        this.shape_colour = shape_colour;
      });
  }
}

module.exports = CLI;
