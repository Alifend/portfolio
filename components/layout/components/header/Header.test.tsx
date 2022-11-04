import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Header from "./Header";

describe("Header", () => {
  it("renders a header and his children", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    const navbar = screen.getByRole("navigation");
    const list = screen.getByRole("list");
    const link = screen.getByRole("link", { name: "Home" });

    expect(header).toBeInTheDocument();
    expect(navbar).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it("has links with expected href", () => {
    render(<Header />);

    const linkAbout: HTMLLinkElement = screen.getByRole("link", {
      name: "About me",
    });
    const linkHome: HTMLLinkElement = screen.getByRole("link", {
      name: "Home",
    });
    const linkPortfolio: HTMLLinkElement = screen.getByRole("link", {
      name: "Portfolio",
    });
    const linkContact: HTMLLinkElement = screen.getByRole("link", {
      name: "Contact me",
    });

    expect(linkAbout.href).toContain("/about-me");
    expect(linkHome.href).toContain("/");
    expect(linkPortfolio.href).toContain("/portfolio");
    expect(linkContact.href).toContain("/contact-me");
  });
});
