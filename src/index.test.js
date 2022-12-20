import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const render = jest.fn().mockName("render");

jest.mock("react");
jest.mock("react-dom/client", () => ({
  createRoot: jest.fn().mockName("createRoot"),
}));

describe("index test", () => {
  const doc = document.createElement("div");
  doc.setAttribute("id", "root");

  it("should call ReactDOM.createRoot once", async () => {
    ReactDOM.createRoot.mockReturnValue({ render });
    require("./index.js");
    await expect(ReactDOM.createRoot).toHaveBeenCalledTimes(1);
    await expect(render).toHaveBeenCalledTimes(1);
    await expect(render).toHaveBeenCalledWith(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
});
