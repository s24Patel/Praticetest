"use strict";
//goal: test coverage for the paint required calculator.
// PaintRequired = area/coverage per liter
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//sample date:  50 = 500/ 10
const paintRequiredCalculator_1 = __importDefault(require("./paintRequiredCalculator"));
describe("paint required calculator", () => {
    test("should calculate the paint required correctly", () => {
        const area = 500;
        const CoveragePerLiter = 10;
        const result = (0, paintRequiredCalculator_1.default)(area, CoveragePerLiter);
        expect(result).toBe(area / CoveragePerLiter);
    });
    test("should throw an error when area is negative", () => {
        const area = -500;
        const CoveragePerLiter = 10;
        expect(() => (0, paintRequiredCalculator_1.default)(area, CoveragePerLiter)).toThrow("Area should be positive");
    });
    test("should throw an error when area is zero", () => {
        const area = 0;
        const CoveragePerLiter = 10;
        expect(() => (0, paintRequiredCalculator_1.default)(area, CoveragePerLiter)).toThrow("Area should not be zero");
    });
    test("should throw an error when coveragePerLiter is negative", () => {
        const area = 500;
        const CoveragePerLiter = -10;
        expect(() => (0, paintRequiredCalculator_1.default)(area, CoveragePerLiter)).toThrow("Coverage per liter should be positive");
    });
    test("should throw an error when coveragePerLiter is zero", () => {
        const area = 500;
        const CoveragePerLiter = 0;
        expect(() => (0, paintRequiredCalculator_1.default)(area, CoveragePerLiter)).toThrow("Coverage per liter should not be zero");
    });
    test("should throw an error when area is not an integer", () => {
        const area = 500.5; // Decimal value
        const coveragePerLiter = 10;
    });
    test("should throw an error when area is not a number", () => {
        const area = "500"; // String instead of number
        const coveragePerLiter = 10;
        expect(() => (0, paintRequiredCalculator_1.default)(area, coveragePerLiter)).toThrow("Area should be a valid number");
    });
    test("should throw an error when coveragePerLiter is not a number", () => {
        const area = 500;
        const coveragePerLiter = "10"; // String instead of number
        expect(() => (0, paintRequiredCalculator_1.default)(area, coveragePerLiter)).toThrow("Coverage per liter should be a valid number");
    });
    test("should throw an error when area is null", () => {
        const area = null;
        const coveragePerLiter = 10;
        expect(() => (0, paintRequiredCalculator_1.default)(area, coveragePerLiter)).toThrow("Area should be a valid number");
    });
    test("should throw an error when coveragePerLiter is null", () => {
        const area = 500;
        const coveragePerLiter = null;
        expect(() => (0, paintRequiredCalculator_1.default)(area, coveragePerLiter)).toThrow("Coverage per liter should be a valid number");
    });
    test("should throw an error when area is undefined", () => {
        const area = undefined;
        const coveragePerLiter = 10;
        expect(() => (0, paintRequiredCalculator_1.default)(area, coveragePerLiter)).toThrow("Area should be a valid number");
    });
    test("should throw an error when coveragePerLiter is undefined", () => {
        const area = 500;
        const coveragePerLiter = undefined;
        expect(() => (0, paintRequiredCalculator_1.default)(area, coveragePerLiter)).toThrow("Coverage per liter should be a valid number");
    });
    test("should throw an error when area is NaN", () => {
        const area = NaN;
        const coveragePerLiter = 10;
        expect(() => (0, paintRequiredCalculator_1.default)(area, coveragePerLiter)).toThrow("Area should be a valid number");
    });
    test("should throw an error when coveragePerLiter is NaN", () => {
        const area = 500;
        const coveragePerLiter = NaN;
        expect(() => (0, paintRequiredCalculator_1.default)(area, coveragePerLiter)).toThrow("Coverage per liter should be a valid number");
    });
});
