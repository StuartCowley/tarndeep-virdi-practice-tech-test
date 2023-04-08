import React, { useState } from "react";
import "../styles/Search.css";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";
import { getImages } from "../requests/getImages";

export default function Search() {
  const [value, setValue] = useState("");

  const changeValue = (event) => setValue(event.target.value);

  const handleSearch = () => {
    const imageResult = getImages(value);
    console.log(imageResult);
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
