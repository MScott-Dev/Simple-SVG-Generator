const { exportNamedDeclaration } = require("@babel/types");
const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
    test("test for a triangle with red background", () => {
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="red" />`);
    });
});