import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function Item() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  async function fetchItem() {
    const { data } = await axios.get(
      `https://botw-compendium.herokuapp.com/api/v2/entry/${id}`
    );
    const response = data.data;
    setItem(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchItem();
  }, []);

  const capitalizeName = () => {
    const name = item.name;
    const splitName = name.split(" ");

    let capitalizedName = splitName
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");

    return capitalizedName;
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex p-5 font-bold">
            <p
              className="hover:cursor-pointer md:text-2xl"
              onClick={() => navigate(`/compendium`)}
            >
              ← Back
            </p>
          </div>
          <div className="align-center flex flex-col justify-center items-center p-5 
          md:max-w-2xl md:mx-auto">
            <h1 className="text-xl mb-2 font-semibold md:text-2xl lg:text-3xl">{capitalizeName()}</h1>
            <img className="mb-3" src={item.image} alt="" />
            <h1 className="mb-2 font-semibold md:text-xl lg:text-2xl">{item.common_locations.join(", ")}</h1>
            <h1 className="absolute top-5 right-5 font-bold text-[#5c7346]
            md:text-2xl lg:text-3xl">
              {item.category[0].toUpperCase() + item.category.substring(1)}
            </h1>
            <p className="text-center md:text-xl lg:text-2xl">{item.description}</p>
          </div>
        </>
      )}
    </>
  );
}

export default Item;
