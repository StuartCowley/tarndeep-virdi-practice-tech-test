import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults component", () => {
  const validProps = [
    ["test-url-1", "alt-1"],
    ["test-url-2", "alt-2"],
    ["test-url-3", "alt-3"],
    ["test-url-4", "alt-4"],
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults results={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders image correctly", () => {
    const result = [
      [
        "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
        "Image of the Moon",
      ],
    ];
    render(<SearchResults results={result} />);

    expect(screen.getByAltText("Image of the Moon")).toBeInTheDocument();
  });

  it("renders 'No Results' message when there are no search results", () => {
    render(<SearchResults results={[]} />);

    expect(screen.getByText("No Results")).toBeInTheDocument();
  });
});
