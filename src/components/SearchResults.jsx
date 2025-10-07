import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function SearchResults({ loading, searchResults }) {
  let navigate = useNavigate();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="max-w-7xl w-full p-6 mx-auto">
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {searchResults.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center w-[47%]
          border border-[#5c7346] p-4 rounded-xl shadow-md
          hover:cursor-pointer hover:shadow-2xl hover:bg-[#5c74367a]
          transition-all
          sm:w-[30%] xl:w-[24%]"
                onClick={() => navigate(`/item/${item.id}`)}
              >
                <img
                  className="h-full w-full"
                  alt="" // Leave as empty string.
                  src={item.image}
                />
                <h1 className="mt-3 text-center font-bold">
                  {item.name
                    .split(" ")
                    .map((word) => word[0].toUpperCase() + word.substring(1))
                    .join(" ")}
                </h1>
                <h1 className="mt-2 text-center font-semibold text-[#5c7346]">
                  {item.category[0].toUpperCase() + item.category.substring(1)}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SearchResults;
