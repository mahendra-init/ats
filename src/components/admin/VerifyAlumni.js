import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase";
import { collection, query, where, getDocs, doc, updateDoc } from "@firebase/firestore";


function DisplayUnVerifiedUser({ userDetails }) {
const [enabled, setEnabled] = useState(false);
  const handleClick = () => {
    const docRef = doc(db, "users", userDetails._id);
    const data = {
      verified: true
    };

updateDoc(docRef, data)
.then(docRef => {
    console.log("A New Document Field has been added to an existing document");
})
.catch(error => {
    console.log(error);
})
setEnabled(!enabled);
}

  return (
    <div className="flex shadow-xl border-solid m-8 border-2 p-5 border-indigo-600">
      <div className="flex space-x-10">
            <div class="grid grid-cols-[200px] gap-3 font-bold text-xl">
              <div>
                <label>Name: </label>
              </div>
              <div>
                <label>Mobile Number: </label>
              </div>
              <div>
                <label>Email Id: </label>
              </div>
              <div>
                <label>University Id: </label>
              </div>
              <div>
                <label>College Name: </label>
              </div>
              <div>
                <label>Graduation Year: </label>
              </div>
              <div>
                <label>Stream: </label>
              </div>
              <div>
                <label>Gender: </label>
              </div>
              <div>
                <label>Nationality: </label>
              </div>
              <div>
                <label>Category: </label>
              </div>
              <div>
                <label>Employment: </label>
              </div>
              <div>
                <label>Verified: </label>
              </div>
            </div>
            <div class="grid grid-cols-[250px] gap-3">
              <div>
                <input
                  className="outline-none w-full"
                  value={userDetails.name}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={userDetails.contactno}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={userDetails.email}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={userDetails.university_id}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={userDetails.college}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={userDetails.graduationyear}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={userDetails.stream}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={userDetails.gender}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={userDetails.nationality}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={userDetails.category}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={userDetails.empstatus}
                />
              </div>
              <div>
                <input
                  className="outline-none w-full"
                  value={userDetails.verified}
                />
              </div>
            </div>
          </div>
          <div className="flex items-end ml-12 mb-8">
      <form onSubmit={handleClick}>
      <button
        className={`flex rounded-xl font-md shadow-md mr-3 px-4 py-1 w-fit flex-start  text-white ${
          enabled ? "bg-blue-400" : "bg-slate-600"
        }`}
        type='submit'
        >
        Verify User
      </button>
      </form>
        </div>
    </div>
  );
}

function VerifyAlumni({ verify, adminDetails }) {
  const [unverifiedUsers, setUnverifiedUsers] = useState([]);
  const collegeName = adminDetails.collegeName;

  useEffect(() =>{},[])
  const fetchData = async () => {
    let array = []
    const q = query(
      collection(db, "users"),
      where("verified", "==", false),
      where("college", "==", collegeName)
      );
      
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      array.push(doc.data());
    });
    setUnverifiedUsers(array);
  };

  fetchData();

  if (verify) {
    return (
      <>
        {unverifiedUsers.map((unverfiedUser) => (
          <DisplayUnVerifiedUser userDetails={unverfiedUser} />
        ))}
      </>
    );
  }
}

export default VerifyAlumni;
