import React, { useState } from "react";
import "../styles/Search.css";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";
import { getImages } from "../requests/getImages";

export default function Search({ setSearchResults }) {
  const [value, setValue] = useState("");

  const changeValue = (event) => setValue(event.target.value);

  const handleSearch = async () => {
    const imageResult = await getImages(value);
    return setSearchResults(imageResult);
  };

  return (
    <>
      <form action="" className="search--form">
        <input
          className="search--input-text"
          type="text"
          onChange={changeValue}
          value={value}
        />
        <button type="button" className="search--btn" onClick={handleSearch}>
          <SearchIcon />
        </button>
      </form>
    </>
  );
}
