import React, { useState } from "react";

function Search({ search }) {
  const [searchElement, setSearchElement] = useState("");

  if (search) {
    return (
      <>
        <div>
          <input placeholder="search..." value={search} id="search" />
          <button>Search</button>
        </div>
      </>
    );
  }
}

export default Search;
