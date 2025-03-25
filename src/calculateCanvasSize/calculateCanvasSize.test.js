"use strict";
// goal - test coverage for calculateCanvasSize
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculateCanvasSize_1 = __importDefault(require("./calculateCanvasSize"));
describe("calculateCanvasSize", () => {
    test("should calculate the correct canvas size", () => {
        const length = "10";
        const width = "20";
        const result = (0, calculateCanvasSize_1.default)(length, width);
        expect(result).toBe(parseInt(length) * parseInt(width)); // Checking if the result matches the expected area
    });
    test("should throw an error when width is negative", () => {
        const width = "-10";
        const length = "20"; // Only length and width are involved, so height isn't needed
        expect(() => (0, calculateCanvasSize_1.default)(length, width)).toThrow("Width should be positive");
    });
    test("should throw an error when length is negative", () => {
        const width = "10";
        const length = "-20"; // Testing negative length
        expect(() => (0, calculateCanvasSize_1.default)(length, width)).toThrow("Length should be positive");
    });
    test("should throw an error when width is not a number", () => {
        const width = "xyz";
        const length = "20";
        expect(() => (0, calculateCanvasSize_1.default)(length, width)).toThrow("Width must be a valid number");
    });
    test("should throw an error when length is not a number", () => {
        const width = "10";
        const length = "xyz";
        expect(() => (0, calculateCanvasSize_1.default)(length, width)).toThrow("Length must be a valid number");
    });
});
