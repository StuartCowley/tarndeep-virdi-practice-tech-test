import React from "react";
import "../styles/SearchResults.css";

export default function SearchResults({ results }) {
  let display = results.map((result, i) => {
    return (
      <img
        className="search-results__image"
        src={result[0]}
        alt={result[1]}
        key={`${i}-${result[1]}`}
      />
    );
  });

  return (
    <>
      {results && results.length === 0 ? (
        <p className="search-results__image-none">No Results</p>
      ) : (
        <div className="search-results__image-table">{display}</div>
      )}
    </>
  );
}
