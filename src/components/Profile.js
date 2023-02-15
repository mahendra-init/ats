import { useState, useEffect } from "react";

function Profile({ profile, userDetails }) {
  const [editable, setEditable] = useState(false);
  //   useEffect(() => {}, [editable]);

  if (profile) {
    return (
      <>
        <div className="flex flex-col p-3 mt-4 bg-white shadow-xl">
          <div className="flex">
            <h1 className="text-xl flex-1 font-bold">Profile</h1>
            <button
              className={`rounded-xl font-md shadow-md mr-3 px-4 py-1  text-white ${
                editable ? "bg-blue-400" : "bg-slate-600"
              }`}
              onClick={(e) => setEditable(!editable)}
            >
              Update
            </button>
          </div>
          <div className="flex space-x-5">
            <div class="grid grid-cols-1">
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
            </div>
            <div class="grid grid-cols-1">
              <div>
                <input
                  className="outline-none"
                  value={userDetails.name}
                  contentEditable={false}
                />
              </div>
              <div>
                <input
                  className="outline-none"
                  value={userDetails.contactno}
                  contentEditable={editable}
                />
              </div>
              <div>
                <input
                  className="outline-none"
                  value={userDetails.email}
                  contentEditable={editable}
                />
              </div>
              <div>
                <input
                  className="outline-none"
                  value={userDetails.uid}
                  contentEditable={false}
                />
              </div>
              <div>
                <input
                  className="outline-none"
                  value={userDetails.college}
                  contentEditable={false}
                />
              </div>
              <div>
                <input
                  className="outline-none"
                  value={userDetails.graduationyear}
                  contentEditable={false}
                />
              </div>
              <div>
                <input
                  className="outline-none"
                  value={userDetails.stream}
                  contentEditable={false}
                />
              </div>
              <div>
                <input
                  className="outline-none"
                  value={userDetails.gender}
                  contentEditable={false}
                />
              </div>
              <div>
                <input
                  className="outline-none"
                  value={userDetails.nationality}
                  contentEditable={false}
                />
              </div>
              <div>
                <input
                  className="outline-none"
                  value={userDetails.category}
                  contentEditable={false}
                />
              </div>
              <div>
                <input
                  className="outline-none"
                  value={userDetails.empstatus}
                  contentEditable={editable}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 mt-4 bg-white shadow-xl w-full  ">
          <h1 className="text-xl font-bold">Intrest</h1>
        </div>
      </>
    );
  }
}

export default Profile;
