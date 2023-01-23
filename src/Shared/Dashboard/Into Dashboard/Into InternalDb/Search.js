import React from "react";
import InternalDB from "../InternalDB";

const Search = () => {
  return (
    <div>
      <InternalDB></InternalDB>
      <div className=" bg-base-600">
        <div class="form-control w-full max-w-xs p-10">
          <label class="label">
            <span class="label-text text-blue-600 ">KEYWORDS</span>
          </label>
          <input
            type="text"
            placeholder="Search here"
            class=" input input-bordered input-sm w-full max-w-xs"
          />
          <label class="label">
            <span class="label-text text-blue-600 ">SKILLS</span>
          </label>
          <input
            type="text"
            placeholder="Search here"
            class="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
