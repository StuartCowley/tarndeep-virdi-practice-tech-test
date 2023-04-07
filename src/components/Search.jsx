import React, { useState } from "react";
import "../styles/Search.css";
import { ReactComponent as SearchIcon } from "../assets/searchIcon.svg";

export default function Search() {
  const [value, setValue] = useState("");

  const changeValue = (event) => {
    setValue(event.target.value);
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
        <button type="submit" className="search--btn">
          <SearchIcon />
        </button>
      </form>
    </>
  );
}
