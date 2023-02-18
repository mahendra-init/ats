import React, { useState } from "react";
import { db } from '../../firebase';
import { collection, doc, setDoc } from '@firebase/firestore';

function CreateEvent({ create, uid }) {
  const [eventName, setEventName] = useState("");
  const [eventDesc, setEventDesc] = useState("");

  async function handleClick(e) {
     try{
      const adminCollectionRef = collection(db, `admins`);
      const adminDocRef = doc(adminCollectionRef, uid)
      const eventCollectionRef = collection(adminDocRef, `events`);
      const eventDocRef = doc(eventCollectionRef);
  
      setDoc(eventDocRef, {
          name: eventName,
          description: eventDesc,
      });
  
      setEventDesc('');
      setEventName('');
      console.log('Data successfully added to Firestore');
    }catch(error) {
      console.log(error.message);
    }
  }

  if (create) {
    return (
      <>
        <div>Create Event</div>
        <div className="flex flex-col p-3 m-2 space-y-3 border rounded-md">
          <input
            placeholder="Event Name"
            type="text"
            value={eventName}
            className="p-2"
            onChange={(e) => setEventName(e.target.value)}
          />
          <textarea
            rows={10}
            placeholder="Event Description"
            type="textarea"
            value={eventDesc}
            className="p-2"
            onChange={(e) => setEventDesc(e.target.value)}
          />
          <button
            className="p-2 bg-blue-400 rounded-full font-bold text-white"
            onClick={handleClick}
          >
            Create Event
          </button>
        </div>
      </>
    );
  }
}

export default CreateEvent;
