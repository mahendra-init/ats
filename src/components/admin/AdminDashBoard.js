import React, { useState, useEffect } from "react";
import CreateEvent from "./CreateEvent";
import Search from "./Search";
import UpdateAlumni from "./UpdateAlumni";
import CollegeProfile from "./CollegeProfile";
import DisplayEvent from "./DisplayEvent";
import VerifyAlumni from "./VerifyAlumni";
import { BiSearch } from "react-icons/bi";
import { MdAppRegistration } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { GoVerified } from "react-icons/go";
import { BsCalendar2Event } from "react-icons/bs";
import { collection, doc, getDoc } from "@firebase/firestore";
import { db, auth } from "../../firebase";

function AdminDashBoard() {
  const [display, setShowDisplay] = useState(true);
  const [search, setShowSearch] = useState(false);
  const [update, setShowUpdate] = useState(false);
  const [verify, setShowVerify] = useState(false);
  const [create, setShowCreate] = useState(false);
  const [displayEvent, setDisplayEvent] = useState(false);
  let [uid, setUid] = useState("");
  let [adminDetails, setAdminDetails] = useState([]);

 const getDetails = async () => {
    if (uid) {
      const adminCollectionRef = collection(db, `admins`);
      const adminDocRef = doc(adminCollectionRef, uid);
      const docSnap = await getDoc(adminDocRef);
      if (docSnap.exists()) {
        setAdminDetails(docSnap.data());
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

  const handleClick = (value) => {
    switch (value) {
      case "display":
        setShowDisplay(true);
        setShowSearch(false);
        setShowUpdate(false);
        setShowVerify(false);
        setShowCreate(false);
        setDisplayEvent(false);
        
        break;
        case "search":
          setShowDisplay(false);
          setShowSearch(true);
          setShowUpdate(false);
          setShowVerify(false);
          setShowCreate(false);
          setDisplayEvent(false);
          
          break;
          case "update":
            setShowDisplay(false);
            setShowSearch(false);
            setShowUpdate(true);
            setShowVerify(false);
            setShowCreate(false);
            setDisplayEvent(false);
            
            break;
            case "verify":
              setShowDisplay(false);
              setShowSearch(false);
              setShowUpdate(false);
              setShowVerify(true);
              setShowCreate(false);
              setDisplayEvent(false);
              
              break;
              case "create":
                setShowDisplay(false);
                setShowSearch(false);
                setShowUpdate(false);
                setShowVerify(false);
                setDisplayEvent(false);
                setShowCreate(true);
                
                break;
                case "displayEvent":
                  setShowDisplay(false);
                  setShowSearch(false);
                  setDisplayEvent(true);
                  setShowUpdate(false);
                  setShowVerify(false);
                  setShowCreate(false);
                  
                  break;
                  
                  default:
                    break;
    }
  };
  console.log(uid)
  return (
    <>
      <div className="flex w-full h-full">
        <div className="border-r-4 w-56 p-2 h-screen text-xl sticky">
          <ul className="space-y-3 mt-3">
            <div
              onClick={() => handleClick("display")}
              className={`flex items-center space-x-3 p-3 hover:cursor-pointer ${
                display ? "shadow-lg rounded-lg" : " shadow-none"
              }`}
            >
              <MdAppRegistration />
              <p>Display College</p>
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
            <div
              onClick={() => handleClick("displayEvent")}
              className={`flex items-center space-x-3 p-3 hover:cursor-pointer ${
                displayEvent ? "shadow-lg rounded-lg" : " shadow-none"
              }`}
            >
              <BsCalendar2Event />
              <p>View Event</p>
            </div>
          </ul>
        </div>
        <div className="m-4 flex-1">
          <CollegeProfile display={display} adminDetails={adminDetails}/>
          <Search search={search} />
          <UpdateAlumni update={update} />
          <VerifyAlumni verify={verify} adminDetails={adminDetails}/>
          <CreateEvent create={create} uid={uid} />
          <DisplayEvent displayEvent={displayEvent} uid={uid}/>
        </div>
      </div>
    </>
  );
}

export default AdminDashBoard;
