import { HourglassTopRounded } from "@mui/icons-material";
import React from "react";

function Loading() {
  return (
    <>
      <div
        className="flex justify-center mt-32
        text-[#5c7346]"
      >
        <HourglassTopRounded
          className="!w-16 !h-16
          animate-spin"
        />
      </div>
    </>
  );
}

export default Loading;
