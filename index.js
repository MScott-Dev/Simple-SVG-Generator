const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes.js");

function writeToFile(fileName, answers) {
    // File starts as an empty string
    let svgContent = "";
    svgContent =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgContent += "<g>";
    svgContent += `${answers.shape}`;
  
    let shapeChoice;
    if (answers.shape === "Triangle") {
      shapeChoice = new Triangle();
      svgContent += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Square") {
      shapeChoice = new Square();
      svgContent += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
      shapeChoice = new Circle();
      svgContent += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }
  
    svgContent += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgContent += "</g>";
    svgContent += "</svg>";
  
    fs.writeFile(fileName, svgContent, (err) => {
      err ? console.log(err) : console.log("Generated logo.svg");
    });
  }

function promptUser() {
    inquirer
        .prompt([
            {
                type: "input",
                message:"What text would you like you logo to display? (Enter up to three characters)",
                name: "text",
              },
              {
                type: "input",
                message:"What color would you like the text? (Color name or hexadecimal number)",
                name: "textColor",
              },
              {
                type: "list",
                message:"What shape would you like the logo to render?",
                choices: ["Triangle", "Square", "Circle"],
                name: "shape",
              },
              {
                type: "input",
                message:"What color would you like the shape? (Color name or hexadecimal number)",
                name: "shapeColor",
              },
        ])
        .then((answers) => {
            if (answers.text.length > 3) {
                console.log("Text cannot be more than 3 characters, please try again!");
                promptUser();
            } else {
                writeToFile("logo.svg", answers);
            }
        });
}



promptUser();