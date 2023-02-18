import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase";
import {
  collection,
  addDoc,
  where,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import { CgProfile } from "react-icons/cg";

const Chat = ({ room, groupchat }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsuscribe();
  }, [messages]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      photoURL: auth.currentUser.photoURL,
      uid: auth.currentUser.uid,
      room,
    });

    setNewMessage("");
  };
  if (groupchat) {
    return (
      <div className="flex flex-col  h-[75vh] items-center font-serif w-[100%] mx-0 my-auto rounded-md overflow-hidden border-[2px] border-blue-400">
        <h1 className="text-2xl header bg-blue-400 text-white w-[100%] text-center font-sans font-semibold py-2">
          {room.toUpperCase()}
        </h1>
        <div className="flex-1 flex flex-col w-full overflow-y-auto p-4 mb-3 space-y-3">
          {messages.map(({ id, uid, photoURL, user, text }) => (
            <div
              key={id}
              className={`flex w-[60%] p-3 ml-4 space-x-3 border rounded-2xl shadow-lg ${
                uid === auth.currentUser.uid
                  ? "bg-blue-400 text-white rounded-tr-none"
                  : "bg-white text-blue-400 rounded-tl-none"
              }`}
            >
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="user_photo"
                  className="w-[36px] h-[36px] object-cover rounded-full"
                />
              ) : (
                <CgProfile className="w-10 h-10" />
              )}
              <p className="text-sm font-semibold font-sans text-gray-800">
                {user} <br />{" "}
                <span className="text-sm font-normal text-gray-600 font-sans">
                  {text}
                </span>
              </p>
            </div>
          ))}
        </div>
        <form className="flex w-[100%] mx-4 p-3 border-t-2">
          <input
            type="text"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
            className="flex-1 border-none outline-none bg-transparent text-ms text-[#333] p-3"
            placeholder="Type your message here..."
          />
          <div className="bg-blue-400 text-white text-md font-bold rounded-lg flex justify-center items-center px-3">
            <button type="submit" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
};

export default Chat;
