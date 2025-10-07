import React, { useEffect, useState } from "react";
import FilterButton from "../components/FilterButton";
import Nav from "../components/Nav";
import sheikahSlate from "../assets/sheikah slate.png";
import TabIcon from "../components/TabIcon";
import Search from "../components/Search";
import SearchResults from "../components/SearchResults";
import axios from "axios";
import Footer from "../components/Footer";

function Compendium() {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(
      "https://botw-compendium.herokuapp.com/api/v3/compendium/all"
    );
    console.log(data.data.map(thing => thing.name));
    setItems(data.data)
    setSearchResults(data.data.slice(0, 16));
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
      <Footer />
    </>
  );
}

export default Compendium;
