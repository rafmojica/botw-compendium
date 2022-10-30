import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

function FilterButton({ items, setSearchResults }) {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("");

  const clickHandler = (index) => {
    setSelected(index);
  };

  const data = [
    {
      id: "1",
      name: "Creatures",
    },
    {
      id: "2",
      name: "Equipment",
    },
    {
      id: "3",
      name: "Materials",
    },
    {
      id: "4",
      name: "Monsters",
    },
    {
      id: "5",
      name: "Treasure",
    },
  ];

  function filterSearch() {
    const filteredArr = items.filter((item) => item.category.includes(filter));
    setSearchResults(filteredArr.slice(0, 16));
  }

  useEffect(() => {
    filterSearch();
  }, [selected]);

  return (
    <>
      {data.map((item, index) => (
        <Button
          key={item.id}
          variant="outlined"
          className={`
        ${
          selected === index
            ? "!bg-[#5c7346] !text-[#fffff0] !border-[#bfa454] !normal-case !font-['Poppins'] !font-bold !py-2 !text-base !rounded-full"
            : "!text-[#5c7346] !border-[#5c7346] !normal-case !font-['Poppins'] !font-bold !py-2 !text-base !rounded-full"
        }`}
          onClick={() => {
            clickHandler(index);
            setFilter(item.name.toLowerCase());
          }}
        >
          {item.name}
        </Button>
      ))}
    </>
  );
}

export default FilterButton;
