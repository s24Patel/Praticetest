//goal: test coverage for the paint required calculator.
// PaintRequired = area/coverage per liter

//sample date:  50 = 500/ 10


import paintRequiredCalculator from "./paintRequiredCalculator";

describe("paint required calculator", () => {
    test("should calculate the paint required correctly", () => {
        const area = 500;
        const CoveragePerLiter = 10;
        const result = paintRequiredCalculator(area, CoveragePerLiter);

        expect(result).toBe(area / CoveragePerLiter);
    });

    test("should throw an error when area is negative", () => {
        const area = -500;
        const CoveragePerLiter = 10;

        expect(() => paintRequiredCalculator(area, CoveragePerLiter)).toThrow("Area should be positive");
    });

    test("should throw an error when area is zero", () => {
        const area = 0;
        const CoveragePerLiter = 10;

        expect(() => paintRequiredCalculator(area, CoveragePerLiter)).toThrow("Area should not be zero");
    });

    test("should throw an error when coveragePerLiter is negative", () => {
        const area = 500;
        const CoveragePerLiter = -10;

        expect(() => paintRequiredCalculator(area, CoveragePerLiter)).toThrow("Coverage per liter should be positive");
    });

    test("should throw an error when coveragePerLiter is zero", () => {
        const area = 500;
        const CoveragePerLiter = 0;

        expect(() => paintRequiredCalculator(area, CoveragePerLiter)).toThrow("Coverage per liter should not be zero");
    });
test("should throw an error when area is not an integer", () => {
        const area = 500.5; // Decimal value
        const coveragePerLiter = 10;

     });
     test("should throw an error when area is not a number", () => {
        const area: any = "500"; // String instead of number
        const coveragePerLiter = 10;

        expect(() => paintRequiredCalculator(area, coveragePerLiter)).toThrow("Area should be a valid number");
    });

    test("should throw an error when coveragePerLiter is not a number", () => {
        const area = 500;
        const coveragePerLiter: any = "10"; // String instead of number

        expect(() => paintRequiredCalculator(area, coveragePerLiter)).toThrow("Coverage per liter should be a valid number");
    });

    test("should throw an error when area is null", () => {
        const area: any = null;
        const coveragePerLiter = 10;

        expect(() => paintRequiredCalculator(area, coveragePerLiter)).toThrow("Area should be a valid number");
    });

    test("should throw an error when coveragePerLiter is null", () => {
        const area = 500;
        const coveragePerLiter: any = null;

        expect(() => paintRequiredCalculator(area, coveragePerLiter)).toThrow("Coverage per liter should be a valid number");
    });

    test("should throw an error when area is undefined", () => {
        const area: any = undefined;
        const coveragePerLiter = 10;

        expect(() => paintRequiredCalculator(area, coveragePerLiter)).toThrow("Area should be a valid number");
    });

    test("should throw an error when coveragePerLiter is undefined", () => {
        const area = 500;
        const coveragePerLiter: any = undefined;

        expect(() => paintRequiredCalculator(area, coveragePerLiter)).toThrow("Coverage per liter should be a valid number");
    });

    test("should throw an error when area is NaN", () => {
        const area: any = NaN;
        const coveragePerLiter = 10;

        expect(() => paintRequiredCalculator(area, coveragePerLiter)).toThrow("Area should be a valid number");
    });

    test("should throw an error when coveragePerLiter is NaN", () => {
        const area = 500;
        const coveragePerLiter: any = NaN;

        expect(() => paintRequiredCalculator(area, coveragePerLiter)).toThrow("Coverage per liter should be a valid number");
    });
});

