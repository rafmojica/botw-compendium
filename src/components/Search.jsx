import { Search } from "@mui/icons-material";
import React from "react";

function SearchResults({ items, setSearchResults }) {
  function handleSearchChange(event) {
    const resultsArr = items.filter(
      (item) => item.name.includes(event) || item.category.includes(event)
    );
    setSearchResults(resultsArr);
  }

  return (
    <>
      <div
        className="searchBar
        mx-auto max-w-xs my-4 sm:max-w-md md:max-w-lg lg:max-w-xl"
      >
        <input
          className="relative w-full bg-inherit border-2 rounded-full p-2
          transition hover:border-[#5c7346] focus-visible:outline-[#594545]"
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearchChange(e.target.value)}
        />
        <Search className="absolute -ml-9 mt-[10px] text-[#a6a8ac]" />
      </div>
    </>
  );
}

export default SearchResults;
