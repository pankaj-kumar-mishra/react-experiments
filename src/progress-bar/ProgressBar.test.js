import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <ProgressBar percent={40} text="Fetching..." />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should renders progress bar with correct width", () => {
    render(<ProgressBar percent={60} text="60% Complete" />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar.style.width).toBe("60%");
  });

  it("should render progress bar message if width exists", () => {
    render(<ProgressBar percent={40} text="40% Complete" />);
    const progressBarMsg = screen.getByTestId("progressBarMsg");
    expect(progressBarMsg.textContent).toBe("40% Complete");
  });

  it("should not render progress bar message if width is falsy", () => {
    render(<ProgressBar percent={0} text="40% Complete" />);
    const progressBarMsg = screen.queryByTestId("progressBarMsg");
    expect(progressBarMsg).toBeNull();
  });
  it("should not render progress bar message if text is empty", () => {
    render(<ProgressBar percent={40} text="" />);
    const progressBarMsg = screen.queryByTestId("progressBarMsg");
    expect(progressBarMsg).toBeNull();
  });
});
