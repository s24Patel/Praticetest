"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = calculateCanvasSize;
function calculateCanvasSize(length, width) {
    // Parse the input strings to numbers
    const parsedLength = parseInt(length);
    const parsedWidth = parseInt(width);
    // Validate if the parsed length is a valid number
    if (isNaN(parsedLength)) {
        throw new Error("Length must be a valid number");
    }
    // Validate if the parsed width is a valid number
    if (isNaN(parsedWidth)) {
        throw new Error("Width must be a valid number");
    }
    // Validate if the parsed length and width are positive numbers
    if (parsedLength <= 0) {
        throw new Error("Length should be positive");
    }
    if (parsedWidth <= 0) {
        throw new Error("Width should be positive");
    }
    // Return the calculated area (canvas size)
    return parsedLength * parsedWidth;
}
