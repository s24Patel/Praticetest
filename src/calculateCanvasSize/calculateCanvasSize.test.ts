// goal - test coverage for calculateCanvasSize

import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("should calculate the correct canvas size", () => {
    const length = "10";
    const width = "20";
    
    const result = calculateCanvasSize(length, width);
    
    expect(result).toBe(parseInt(length) * parseInt(width));  // Checking if the result matches the expected area
  });

  test("should throw an error when width is negative", () => {
    const width = "-10";
    const length = "20";  // Only length and width are involved, so height isn't needed
    
    expect(() => calculateCanvasSize(length, width)).toThrow("Width should be positive");
  });

  test("should throw an error when length is negative", () => {
    const width = "10";
    const length = "-20";  // Testing negative length
    
    expect(() => calculateCanvasSize(length, width)).toThrow("Length should be positive");
  });

  test("should throw an error when width is not a number", () => {
    const width = "xyz";
    const length = "20";
    
    expect(() => calculateCanvasSize(length, width)).toThrow("Width must be a valid number");
  });

  test("should throw an error when length is not a number", () => {
    const width = "10";
    const length = "xyz";
    
    expect(() => calculateCanvasSize(length, width)).toThrow("Length must be a valid number");
  });
});

