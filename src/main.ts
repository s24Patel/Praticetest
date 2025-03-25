import calculateCanvasSize from "./calculateCanvasSize";
import paintRequiredCalculator from "./paintRequiredCalculator";

describe("main function tests", () => {
  test("should calculate the correct area and paint required", () => {
    const area = calculateCanvasSize("10", "20");
    const coveragePerLiter = 11.4;
    const paintRequired = paintRequiredCalculator(area, coveragePerLiter);

    expect(area).toBe(200); // Assuming calculateCanvasSize returns a number
    expect(paintRequired).toBeCloseTo(17.54); // Assuming paintRequiredCalculator returns a number
  });
});
