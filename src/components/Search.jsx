import React, { useState } from "react";
import "../styles/Search.css";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";
import { getImages } from "../requests/getImages";

export default function Search({ setSearchResults }) {
  const [value, setValue] = useState("");

  const changeValue = (event) => setValue(event.target.value);

  const handleSearch = async (event) => {
    event.preventDefault();
    const imageResult = await getImages(value);
    return setSearchResults(imageResult);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        className="search-form__input-text"
        type="text"
        onChange={changeValue}
        value={value}
        placeholder="Search..."
        aria-label="Search"
      />
      <button type="submit" className="search-form__btn" onClick={handleSearch}>
        <SearchIcon />
      </button>
    </form>
  );
}
