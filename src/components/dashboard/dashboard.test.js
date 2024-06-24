import { render, screen } from "@testing-library/react";
import Dashboard from ".";

jest.mock("axios");

test("renders without error", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/This is dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
