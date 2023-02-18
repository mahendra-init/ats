import React, { useState, useEffect } from "react";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { FaBloggerB } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import Chat from "./Chat";
import Blog from "./Blog";
import Profile from "../Profile";
import CreateBlog from "./CreateBlog";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { db, auth } from "../../firebase";
import { collection, doc, getDoc } from "@firebase/firestore";
import { toast } from "react-toastify";

function Dashboard() {
  const [profile, setShowProfile] = useState(true);
  const [blog, setShowBlog] = useState(false);
  const [createBlog, setShowCreateBlog] = useState(false);
  const [groupChat, setShowGroupChat] = useState(false);
  const navigate = useNavigate();
  let [uid, setUid] = useState("");
  let [userDetails, setUserDetails] = useState([]);

  const getDetails = async () => {
    if (uid) {
      const userCollectionRef = collection(db, `users`);
      const userDocRef = doc(userCollectionRef, uid);
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log("No such document!");
      }
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUid(user.uid);
    });
    getDetails();
  }, [uid]);

  let handleClick = (value) => {
    switch (value) {
      case "profile":
        setShowProfile(true);
        setShowBlog(false);
        setShowGroupChat(false);
        setShowCreateBlog(false);
        break;
      case "blog":
        setShowProfile(false);
        setShowBlog(true);
        setShowGroupChat(false);
        setShowCreateBlog(false);
        break;
      case "createblog":
        setShowProfile(false);
        setShowBlog(false);
        setShowGroupChat(false);
        setShowCreateBlog(true);
        break;
      case "groupchat":
        setShowProfile(false);
        setShowBlog(false);
        setShowGroupChat(true);
        setShowCreateBlog(false);
        break;
      case "logout":
        signOut(auth);
        toast.success("Logout Successfull");
        navigate("/login", { replace: true });

        break;
      default:
        break;
    }
  };

  return (
    <div className="flex w-full h-full ">
      <aside className=" border-r-4 w-56 p-2 h-screen text-xl sticky">
        <ul className="space-y-3 mt-3">
          <div
            onClick={() => handleClick("profile")}
            className={`flex items-center space-x-3 p-3 hover:cursor-pointer ${
              profile ? "shadow-lg rounded-lg" : " shadow-none"
            }`}
          >
            <CgProfile />
            <p>Profile</p>
          </div>
          <div
            onClick={() => handleClick("blog")}
            className={`flex items-center space-x-3 p-3 hover:cursor-pointer ${
              blog ? "shadow-lg rounded-lg" : " shadow-none"
            }`}
          >
            <FaBloggerB />
            <p>View Blog</p>
          </div>
          <div
            onClick={() => handleClick("createblog")}
            className={`flex items-center space-x-3 p-3 hover:cursor-pointer ${
              createBlog ? "shadow-lg rounded-lg" : " shadow-none"
            }`}
          >
            <strong className="text-xl font-bold space-x-3">+</strong>
            <p>Create Blog</p>
          </div>
          <div
            onClick={() => handleClick("groupchat")}
            className={`flex items-center space-x-3 p-3 hover:cursor-pointer ${
              groupChat ? "shadow-lg rounded-lg" : " shadow-none"
            }`}
          >
            <MdGroups />
            <p>Group Chat</p>
          </div>
          <div
            onClick={() => handleClick("logout")}
            className={`flex items-center space-x-3 p-3 hover:cursor-pointer`}
          >
            <CgLogOut />
            <p>Logout</p>
          </div>
        </ul>
      </aside>
      <main className="m-4 flex-1 overflow-y-auto ">
        <Profile profile={profile} userDetails={userDetails} />
        <Blog blog={blog} uid={uid} />
        <CreateBlog createBlog={createBlog} uid={uid} />
        <Chat room="ace" groupchat={groupChat} />
      </main>
    </div>
  );
}

export default Dashboard;
