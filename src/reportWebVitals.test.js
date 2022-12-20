import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";
import reportWebVitals from "./reportWebVitals";

jest.mock("web-vitals");

describe("reportWebVitals test", () => {
  it("Should get all the different functions to be called once", async () => {
    const calledWith = "foo";
    await reportWebVitals(() => calledWith);
    await new Promise(process.nextTick); // needed since the return value of reportWebVitals is not a promise
    await expect(getFID).toHaveBeenCalledTimes(1);
    await expect(getFCP).toHaveBeenCalledTimes(1);
    await expect(getLCP).toHaveBeenCalledTimes(1);
    await expect(getTTFB).toHaveBeenCalledTimes(1);
    await expect(getCLS).toHaveBeenCalledTimes(1);
  });
});
