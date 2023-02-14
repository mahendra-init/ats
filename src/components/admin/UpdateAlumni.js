import React from "react";
import Search from "./Search";

function UpdateAlumni({ update }) {
  if (update) {
    return (
      <>
        <Search />
      </>
    );
  }
}

export default UpdateAlumni;
