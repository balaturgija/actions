import { render, screen } from "@testing-library/react";
import RootLayout from "../app/layout";

jest.mock("next/font/google", () => ({
  Geist: () => ({
    variable: "--font-geist-sans",
  }),
  Geist_Mono: () => ({
    variable: "--font-geist-mono",
  }),
}));

describe("RootLayout", () => {
  it("renders children content", () => {
    const { container } = render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
    expect(container.firstChild).toBeInTheDocument();
  });

  it("renders with correct HTML structure", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    const htmlElement = document.documentElement;
    expect(htmlElement).toHaveAttribute("lang", "en");

    const bodyElement = document.body;
    expect(bodyElement).toHaveClass("antialiased");
  });

  it("applies font variables to body", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    const bodyElement = document.body;
    expect(bodyElement).toHaveClass("--font-geist-sans");
    expect(bodyElement).toHaveClass("--font-geist-mono");
  });
});
