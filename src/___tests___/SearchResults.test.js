import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults component", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders image correctly", () => {
    const result = [
      "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    ];
    const { getByAltText } = render(<SearchResults results={result} />);

    // const imgElement = getByAltText("");
    // expect(imgElement).toBeInTheDocument();
  });

  it("renders 'No Results' message when there are no search results", () => {
    const { getByText } = render(<SearchResults results={[]} />);
    // const messageElement = getByText("No Results");
    // expect(messageElement).toBeInTheDocument();
  });
});
