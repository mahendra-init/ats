import React, { useState } from "react";
import CreateEvent from "./CreateEvent";
import RegisterCollege from "./RegisterCollege";
import Search from "./Search";
import UpdateAlumni from "./UpdateAlumni";
import VerifyAlumni from "./VerifyAlumni";

function AdminDashBoard() {
  const [register, setShowRegister] = useState(true);
  const [search, setShowSearch] = useState(false);
  const [update, setShowUpdate] = useState(false);
  const [verify, setShowVerify] = useState(false);
  const [create, setShowCreate] = useState(false);
  const [channel, setShowChannel] = useState(false);

  const handleClick = (value) => {
    switch (value) {
      case "register":
        setShowRegister(true);
        setShowSearch(false);
        setShowUpdate(false);
        setShowVerify(false);
        setShowCreate(false);
        setShowChannel(false);
        break;
      case "search":
        setShowRegister(false);
        setShowSearch(true);
        setShowUpdate(false);
        setShowVerify(false);
        setShowCreate(false);
        setShowChannel(false);
        break;
      case "update":
        setShowRegister(false);
        setShowSearch(false);
        setShowUpdate(true);
        setShowVerify(false);
        setShowCreate(false);
        setShowChannel(false);
        break;
      case "verify":
        setShowRegister(false);
        setShowSearch(false);
        setShowUpdate(false);
        setShowVerify(true);
        setShowCreate(false);
        setShowChannel(false);
        break;
      case "create":
        setShowRegister(false);
        setShowSearch(false);
        setShowUpdate(false);
        setShowVerify(false);
        setShowCreate(true);
        setShowChannel(false);
        break;
      case "channel":
        setShowRegister(false);
        setShowSearch(false);
        setShowUpdate(false);
        setShowVerify(false);
        setShowCreate(false);
        setShowChannel(true);
        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="flex w-full h-full">
        <div className=" border-r-4 w-56 flex justify-center items-center text-xl">
          <ul className="space-y-4 space-x-4 mt-3">
            <div
              onClick={() => handleClick("register")}
              className={`flex justify-between items-center space-x-1 p-3 hover:cursor-pointer ${
                register ? "shadow-lg rounded-lg" : " shadow-none"
              }`}
            >
              Register College
            </div>
            <div
              onClick={() => handleClick("search")}
              className={`flex justify-between items-center space-x-1 p-3 hover:cursor-pointer ${
                search ? "shadow-lg rounded-lg" : " shadow-none"
              }`}
            >
              Search Alumni
            </div>
            <div
              onClick={() => handleClick("update")}
              className={`flex justify-between items-center space-x-1 p-3 hover:cursor-pointer ${
                update ? "shadow-lg rounded-lg" : " shadow-none"
              }`}
            >
              Update Alumni Details
            </div>
            <div
              onClick={() => handleClick("verify")}
              className={`flex justify-between items-center space-x-1 p-3 hover:cursor-pointer ${
                verify ? "shadow-lg rounded-lg" : " shadow-none"
              }`}
            >
              Verification
            </div>
            <div
              onClick={() => handleClick("create")}
              className={`flex justify-between items-center space-x-1 p-3 hover:cursor-pointer ${
                create ? "shadow-lg rounded-lg" : " shadow-none"
              }`}
            >
              Create Event
            </div>
          </ul>
        </div>
        <div className="m-4 flex-1">
          <RegisterCollege register={register} />
          <Search search={search} />
          <UpdateAlumni update={update} />
          <VerifyAlumni verify={verify} />
          <CreateEvent create={create} />
        </div>
      </div>
    </>
  );
}

export default AdminDashBoard;
