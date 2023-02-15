import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase";
import { collection, doc, orderBy, onSnapshot } from "@firebase/firestore";
import "core-js";

function VerifyAlumni({ verify }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userCollectionRef = collection(db, `users`);

    onSnapshot(userCollectionRef, orderBy("created", "aesc"), (snapshot) => {
      console.log(snapshot);
    });
  }, []);

  if (verify) {
    return (
      <>
        <div>
          <div>Student Details</div>
          <div></div>
        </div>
      </>
    );
  }
}

export default VerifyAlumni;
