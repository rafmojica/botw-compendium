import React, { useEffect, useState } from "react";
import FilterButton from "../components/FilterButton";
import Nav from "../components/Nav";
import sheikahSlate from "../assets/sheikah slate.png";
import TabIcon from "../components/TabIcon";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import axios from "axios";

function Compendium() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(
      "https://botw-compendium.herokuapp.com/api/v2/all"
    );
    const arr = [
      ...data.data.creatures.food,
      ...data.data.creatures.non_food,
      ...data.data.equipment,
      ...data.data.materials,
      ...data.data.monsters,
      ...data.data.treasure,
    ];
    setItems(arr);
    setSearchResults(arr.slice(0, 16));
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TabIcon icon={sheikahSlate} title="Compendium" />
      
      <Nav />

      <Search items={items} setSearchResults={setSearchResults} />

      <div className="flex flex-wrap justify-center gap-x-2 gap-y-4 w-full mt-4 px-8">
        <FilterButton items={items} setSearchResults={setSearchResults} />
      </div>

      <SearchResults loading={loading} searchResults={searchResults} />
    </>
  );
}

export default Compendium;
