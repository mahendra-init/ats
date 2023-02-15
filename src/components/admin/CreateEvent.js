import React, { useState } from "react";

function CreateEvent({ create }) {
  const [eventName, setEventName] = useState("");
  const [eventDesc, setEventDesc] = useState("");
  const [eventPoster, setEventPoster] = useState("");

  async function handleClick(e) {
    e.preventDefault();
  }

  if (create) {
    return (
      <>
        <div>Create Event</div>
        <div className="flex flex-col p-3 m-2 space-y-3 border rounded-md">
          <input
            placeholder="Event Name"
            type="text"
            className="p-2"
            onChange={(e) => setEventName(e.target.value)}
          />
          <textarea
            rows={10}
            placeholder="Event Description"
            type="textarea"
            className="p-2"
            onChange={(e) => setEventDesc(e.target.value)}
          />
          <div className="space-x-2">
            <label>Event Banner/Poster</label>
            <input
              placeholder="Event Poster"
              type="file"
              onChange={(e) => setEventPoster(e.target.value)}
            />
          </div>
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
