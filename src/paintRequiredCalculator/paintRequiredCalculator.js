"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = paintRequiredCalculator;
function paintRequiredCalculator(area, coveragePerLiter) {
    if (typeof area !== "number" || isNaN(area)) {
        throw new Error("Area should be a valid number");
    }
    if (typeof coveragePerLiter !== "number" || isNaN(coveragePerLiter)) {
        throw new Error("Coverage per liter should be a valid number");
    }
    if (area <= 0) {
        throw new Error(area === 0 ? "Area should not be zero" : "Area should be positive");
    }
    if (coveragePerLiter <= 0) {
        throw new Error(coveragePerLiter === 0 ? "Coverage per liter should not be zero" : "Coverage per liter should be positive");
    }
    return area / coveragePerLiter;
}
