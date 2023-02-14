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
      console.log(messages);
      setMessages(messages);
    });
    return () => unsuscribe();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  };
  if (groupchat) {
    return (
      <div className="flex flex-col items-center font-serif w-[90%] mx-0 my-auto rounded-md overflow-hidden border-[2px] border-blue-400">
        <div className="header bg-blue-400 text-white w-[100%] text-center">
          <h1>{room.toUpperCase()}</h1>
        </div>
        <div className="flex flex-col items-start w-[100%] h-[80%] overflow-y-auto p-4 mb-3">
          {messages.map((message) => (
            <div key={message.id} className="flex items-start mb-3">
              <span className="user font-bold w-[100%] text-[#333]">
                {message.user}:
              </span>{" "}
              {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex w-[100%] p-3">
          <input
            type="text"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
            className="flex-1 border-none outline-none bg-transparent text-ms text-[#333] p-3"
            placeholder="Type your message here..."
          />
          <div className="bg-blue-400 text-white text-md font-bold rounded-lg flex justify-center items-center px-3">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    );
  }
};

export default Chat;
