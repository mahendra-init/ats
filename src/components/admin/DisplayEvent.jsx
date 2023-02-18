import React, {useState, useEffect} from 'react';
import { db } from '../../firebase';
import { collection, doc, orderBy, onSnapshot } from '@firebase/firestore';



const Event = ({title, desc}) => (

  <div className="flex flex-col w-[50vw] shadow-xl border-solid border-1 border-indigo-600 bg-gradient-to-r from-indigo-400 my-2">
    <div className="flex items-center py-10 border-b-indigo-600">
      <h2 className="text-xl flex-1 font-bold text-black text-start ml-3 font-sans">
        {title}
      </h2>
    </div>
    <div className="flex-1 flex flex-col ">
      <p className="text-md text-dimWhite text-justify mx-3 mt-3 font-sans tracking-loose leading-tight">
        {desc}
      </p>
    </div>
    <div className="flex justify-end mr-3 py-2">
      <p className="mr-2 text-md">Created on:</p>
    </div>
  </div>
);

function DisplayEvent({displayEvent, uid}) {
  const [ events, setEvents] = useState([]);

  useEffect(() => {
        if(uid){
            const adminCollectionRef = collection(db, `admins`);
            const adminDocRef = doc(adminCollectionRef, uid)
            const eventCollectionRef = collection(adminDocRef, `events`);

            onSnapshot(eventCollectionRef, orderBy('created', 'desc'), (snapshot) => {
                setEvents(snapshot.docs.map(doc => ({
                  id: doc.id, 
                  data: doc.data()
                })));
                console.log(events)
              });
        } else {
            setEvents([])
        }
    }, [uid])
    if(displayEvent){
      return (
        events.map(({id, data}) => (
          <Event className key={id} title={data.name} desc={data.description}/>
          ))
          )
        }
}

export default DisplayEvent;
