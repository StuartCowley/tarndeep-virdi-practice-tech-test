import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search Component", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Search />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders search input field", () => {
    render(<Search />);
    const searchInput = screen.getByRole("textbox");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveClass("search--input-text");
  });
});
