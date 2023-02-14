import React, { useState } from "react";

function RegisterCollege({ register }) {
  const [collegeName, setCollegeName] = useState("");
  const [collegeId, setCollegeId] = useState("");
  const [collegeAuthority, setCollegeAuthority] = useState("");

  if (register) {
    return (
      <>
        <div className="flex flex-col flex-1">
          <div className="text-xl font-bold flex items-center justify-center">
            Register A College
          </div>
          <form className="flex flex-col space-y-4 pl-4 mt-5 text-xl">
            <input
              className="outline-none"
              placeholder="College Name"
              value={collegeName}
              id="collegeName"
              onChange={(e) => setCollegeName(collegeName)}
            />
            <input
              className="outline-none"
              placeholder="College Id"
              value={collegeId}
              id="collegeId"
              onChange={(e) => setCollegeId(collegeId)}
            />
            <input
              className="outline-none"
              placeholder="College Authority"
              value={collegeAuthority}
              id="collegeAuthority"
              onChange={(e) => setCollegeAuthority(collegeAuthority)}
            />
            <button className=" bg-blue-400 px-2 py-1 rounded-md shadow-sm text-white">
              Register College
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default RegisterCollege;
