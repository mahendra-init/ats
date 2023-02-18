import { useState } from "react";

function Profile({ profile, userDetails }) {
  const [enabled, setEnabled] = useState(false);
  if (profile) {
    return (
      <>
        <div className="flex flex-col p-3 mt-4 bg-white shadow-xl">
          <div className="flex">
            <h1 className="text-2xl flex-1 font-extrabold">Profile</h1>
            <button
              className={`rounded-xl font-md shadow-md mr-3 px-4 py-1  text-white ${
                enabled ? "bg-blue-400" : "bg-slate-600"
              }`}
              onClick={() => {}}
            >
              Update
            </button>
          </div>
          <div className="flex space-x-10 mt-10 ml-10">
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
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
