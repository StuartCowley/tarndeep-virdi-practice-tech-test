import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults component", () => {
  const validProps = [
    { url: "test-url-1", alttext: "alt-1" },
    { url: "test-url-2", alttext: "alt-2" },
    { url: "test-url-3", alttext: "alt-3" },
    { url: "test-url-4", alttext: "alt-4" },
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults results={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders image correctly", () => {
    const result = [{ url: "test-url-1", alttext: "alt-1" }];
    render(<SearchResults results={result} />);

    expect(screen.getByAltText("alt-1")).toBeInTheDocument();
  });

  it("renders 'No Results' message when there are no search results", () => {
    render(<SearchResults results={[]} />);

    expect(screen.getByText("No Results")).toBeInTheDocument();
  });
});
