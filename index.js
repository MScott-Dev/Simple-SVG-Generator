const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes.js");

function writeFile(fileName, answers) {
    let svgContent = '';
    svgContent = `<svg verison"1.1" width="300" height="200" xmlnx="https://www.w3.ord/2000/svg">`;
    svgContent += "<g>";
    svgContent += `${answers.shape}`;
}