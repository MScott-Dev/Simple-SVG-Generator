const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", () => {
    test("test for a triangle with red background", () => {
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual(
            `<polygon points="150, 18 244, 182 56, 182" fill="red" />`
        );
    });
});

describe("Square test", () => {
    test("test for a square with green background", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual(
            `<rect x="73" y="40" width="160" height="160" fill="green" />`
        );
    });
});

describe("Circle test", () => {
    test("test for a circle with pink background", () => {
        const shape = new Circle();
        shape.setColor("pink");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="115" r="80" fill="pink" />`
        );
    });
});
