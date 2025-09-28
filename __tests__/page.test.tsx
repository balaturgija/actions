import { render, screen } from "@testing-library/react";
import Home from "../app/page";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, width, height, priority, ...props }: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} width={width} height={height} {...props} />;
  },
}));

describe("Home Page", () => {
  it("renders the Next.js logo", () => {
    render(<Home />);

    const logo = screen.getByAltText("Next.js logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/next.svg");
  });

  it("renders the main heading and instructions", () => {
    render(<Home />);

    // Check for the instruction text
    expect(screen.getByText(/Get started by editing/)).toBeInTheDocument();
    expect(
      screen.getByText(/Save and see your changes instantly/)
    ).toBeInTheDocument();
  });

  it("renders the deploy button with correct link", () => {
    render(<Home />);

    const deployButton = screen.getByText("Deploy now");
    expect(deployButton).toBeInTheDocument();
    expect(deployButton.closest("a")).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/new")
    );
  });

  it("renders the read docs button", () => {
    render(<Home />);

    const docsButton = screen.getByText("Read our docs");
    expect(docsButton).toBeInTheDocument();
    expect(docsButton.closest("a")).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/docs")
    );
  });

  it("renders footer links", () => {
    render(<Home />);

    expect(screen.getByText("Learn")).toBeInTheDocument();
    expect(screen.getByText("Examples")).toBeInTheDocument();
    expect(screen.getByText("Go to nextjs.org →")).toBeInTheDocument();
  });
});
