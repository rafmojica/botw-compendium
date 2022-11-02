import React from "react";

function Stats({ item, itemName }) {
  return (
    <>
      {!!item && (
        <h3 className="text-sm text-center mt-2 md:text-base lg:text-lg">
          {itemName}: {item}
        </h3>
      )}
    </>
  );
}

export default Stats;
