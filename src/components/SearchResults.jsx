import React from "react";
import "../styles/SearchResults.css";

export default function SearchResults({ results }) {
  let display = results.map((result) => {
    return <img className="result--image" src={result} alt="" />;
  });

  return (
    <>
      {results && results.length === 0 ? (
        <p>No Results</p>
      ) : (
        <div className="result--table">{display}</div>
      )}
    </>
  );
}
