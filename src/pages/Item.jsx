import { Favorite, FavoriteTwoTone } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Stats from "../components/Stats";

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

  const capitalizeName = (itemName) => {
    const name = itemName;
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
          <div
            className="align-center flex flex-col justify-center items-center p-5 
          md:max-w-2xl md:mx-auto"
          >
            <h1 className="text-xl mb-2 font-semibold md:text-2xl lg:text-3xl">
              {capitalizeName(item.name)}
            </h1>
            <img className="mb-3" src={item.image} alt="" />
            <h2 className="mb-2 text-center font-semibold md:text-xl lg:text-2xl">
              {!!item.common_locations && item.common_locations.join(", ")}
            </h2>
            <h1
              className="absolute top-5 right-5 font-bold text-[#5c7346]
            md:text-2xl"
            >
              {item.category[0].toUpperCase() + item.category.substring(1)}
            </h1>
            <p className="text-center md:text-xl lg:text-2xl">
              {item.description}
            </p>
            {!!item.hearts_recovered && (
              <h3 className="text-sm text-center mt-2 md:text-base lg:text-lg">
                Hearts Recovered:{" "}
                {item.hearts_recovered > 10 && (
                  <div className="flex flex-col"></div>
                )}
                {new Array(Math.floor(item.hearts_recovered))
                  .fill(0)
                  .map((_, index) => (
                    <Favorite className="text-red-500" key={index} />
                  ))}
                {!Number.isInteger(item.hearts_recovered) && (
                  <FavoriteTwoTone className="text-red-500" />
                )}
              </h3>
            )}
            {!!item.cooking_effect && (
              <h3 className="text-sm text-center mt-2 md:text-base lg:text-lg">
                Cooking Effect: {capitalizeName(item.cooking_effect)}
              </h3>
            )}
            {item.drops === [] ? null : item.drops?.length > 0 ? (
              <h3 className="text-sm text-center mt-2 md:text-base lg:text-lg">
                Drops: {item.drops.join(", ")}
              </h3>
            ) : null}
            <Stats item={item.attack} itemName="Attack" />
            <Stats item={item.defense} itemName="Defense" />
          </div>
        </>
      )}
      <Footer />
    </>
  );
}

export default Item;
