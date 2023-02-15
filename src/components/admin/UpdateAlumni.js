import React, { useState } from "react";
import Search from "./Search";
import Profile from "../students/Dashboard";

function UpdateAlumni({ update }) {
  const [user, setUser] = useState([]);
  if (update) {
    return (
      <>
        <Search search={true} />
        {user && <Profile profile={user} />}
      </>
    );
  }
}

export default UpdateAlumni;
