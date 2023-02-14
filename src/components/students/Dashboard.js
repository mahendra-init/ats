import React, { useState } from "react";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { FaBloggerB } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import Chat from "./Chat";

function Dashboard() {
  const [profile, setShowProfile] = useState(true);
  const [blog, setShowBlog] = useState(false);
  const [groupChat, setShowGroupChat] = useState(false);

  let handleClick = (value) => {
    switch (value) {
      case "profile":
        setShowProfile(true);
        setShowBlog(false);
        setShowGroupChat(false);

        break;
      case "blog":
        setShowProfile(false);
        setShowBlog(true);
        setShowGroupChat(false);

        break;
      case "groupchat":
        setShowProfile(false);
        setShowBlog(false);
        setShowGroupChat(true);

        break;
      default:
        break;
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className=" border-r-4 w-56 flex justify-center items-center text-xl">
        <ul className="space-y-3 mt-3">
          <div
            onClick={() => handleClick("profile")}
            className={`flex justify-between items-center space-x-1 p-3 hover:cursor-pointer ${
              profile ? "shadow-lg rounded-lg" : " shadow-none"
            }`}
          >
            <p>Profile</p> <CgProfile />
          </div>
          <div
            onClick={() => handleClick("blog")}
            className={`flex justify-between items-center space-x-1 p-3 hover:cursor-pointer ${
              blog ? "shadow-lg rounded-lg" : " shadow-none"
            }`}
          >
            Blog <FaBloggerB />
          </div>
          <div
            onClick={() => handleClick("groupchat")}
            className={`flex justify-between items-center space-x-1 p-3 hover:cursor-pointer ${
              groupChat ? "shadow-lg rounded-lg" : " shadow-none"
            }`}
          >
            <p>
              Group
              <br />
              Chat
            </p>
            <MdGroups />
          </div>
          <div
            onClick={() => handleClick("logout")}
            className={`flex justify-between items-center space-x-1 p-3 hover:cursor-pointer`}
          >
            <p>Logout</p>
            <CgLogOut />
          </div>
        </ul>
      </div>
      <div className="m-4 flex-1">
        <Profile profile={profile} />
        <Blog blog={blog} />
        <Chat room="ace" groupchat={groupChat} />
      </div>
    </div>
  );
}

export default Dashboard;

function Profile({ profile }) {
  if (profile) {
    return (
      <>
        <div className="flex flex-col p-3 mt-4 bg-white shadow-xl w-full flex-1">
          <h1 className="text-xl font-bold">Profile</h1>
          <div className="mt-4">
            <div>
              <label>Name: </label>
              <span>Shivam Patel</span>
            </div>
            <div>
              <label>Mobile Number: </label>
              <span>9108221847</span>
            </div>
            <div>
              <label>Email Id: </label>
              <span>patelshivam.0212@gmail.com</span>
            </div>
            <div>
              <label>College Name: </label>
              <span>Atharva College Of Engineering</span>
            </div>
            <div>
              <label>Graduation Year: </label>
              <span>2024</span>
            </div>
            <div>
              <label>Stream: </label>
              <span>IT</span>
            </div>
            <div className="flex justify-end ">
              <button className=" rounded-xl shadow-md mr-3 px-3 py-2 bg-slate-600 text-white">
                Edit
              </button>
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

function Blog({ blog }) {
  if (blog) {
    return <div>blog</div>;
  }
}
