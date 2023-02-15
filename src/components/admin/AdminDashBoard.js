import React, { useState } from "react";
import CreateEvent from "./CreateEvent";
import RegisterCollege from "./RegisterCollege";
import Search from "./Search";
import UpdateAlumni from "./UpdateAlumni";
import VerifyAlumni from "./VerifyAlumni";
import { BiSearch } from "react-icons/bi";
import { MdAppRegistration } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { GoVerified } from "react-icons/go";
import { BsCalendar2Event } from "react-icons/bs";

function AdminDashBoard() {
  const [register, setShowRegister] = useState(true);
  const [search, setShowSearch] = useState(false);
  const [update, setShowUpdate] = useState(false);
  const [verify, setShowVerify] = useState(false);
  const [create, setShowCreate] = useState(false);

  const handleClick = (value) => {
    switch (value) {
      case "register":
        setShowRegister(true);
        setShowSearch(false);
        setShowUpdate(false);
        setShowVerify(false);
        setShowCreate(false);

        break;
      case "search":
        setShowRegister(false);
        setShowSearch(true);
        setShowUpdate(false);
        setShowVerify(false);
        setShowCreate(false);

        break;
      case "update":
        setShowRegister(false);
        setShowSearch(false);
        setShowUpdate(true);
        setShowVerify(false);
        setShowCreate(false);

        break;
      case "verify":
        setShowRegister(false);
        setShowSearch(false);
        setShowUpdate(false);
        setShowVerify(true);
        setShowCreate(false);

        break;
      case "create":
        setShowRegister(false);
        setShowSearch(false);
        setShowUpdate(false);
        setShowVerify(false);
        setShowCreate(true);

        break;
      case "channel":
        setShowRegister(false);
        setShowSearch(false);
        setShowUpdate(false);
        setShowVerify(false);
        setShowCreate(false);

        break;

      default:
        break;
    }
  };
  return (
    <>
      <div className="flex w-full h-full">
        <div className="border-r-4 w-56 p-2 h-screen text-xl sticky">
          <ul className="space-y-3 mt-3">
            <div
              onClick={() => handleClick("register")}
              className={`flex items-center space-x-3 p-3 hover:cursor-pointer ${
                register ? "shadow-lg rounded-lg" : " shadow-none"
              }`}
            >
              <MdAppRegistration />
              <p>Register College</p>
            </div>
            <div
              onClick={() => handleClick("search")}
              className={`flex items-center space-x-3 p-3 hover:cursor-pointer ${
                search ? "shadow-lg rounded-lg" : " shadow-none"
              }`}
            >
              <BiSearch />
              <p>Search Alumni</p>
            </div>
            <div
              onClick={() => handleClick("update")}
              className={`flex items-center space-x-3 p-3 hover:cursor-pointer ${
                update ? "shadow-lg rounded-lg" : " shadow-none"
              }`}
            >
              <RxUpdate />
              <p>Update Alumni Details</p>
            </div>
            <div
              onClick={() => handleClick("verify")}
              className={`flex items-center space-x-3 p-3 hover:cursor-pointer ${
                verify ? "shadow-lg rounded-lg" : " shadow-none"
              }`}
            >
              <GoVerified />
              <p>Verification</p>
            </div>
            <div
              onClick={() => handleClick("create")}
              className={`flex items-center space-x-3 p-3 hover:cursor-pointer ${
                create ? "shadow-lg rounded-lg" : " shadow-none"
              }`}
            >
              <BsCalendar2Event />
              <p>Create Event</p>
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
