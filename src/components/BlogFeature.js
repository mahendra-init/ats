import React, {useState, useEffect} from 'react';
import { db } from '../firebase';
import { collection, orderBy, onSnapshot, doc } from '@firebase/firestore';

const DisplayBlog = ({title, content}) => (

  <div className="flex flex-col w-[50vw] shadow-xl border-solid border-1 border-indigo-600 bg-gradient-to-t from-indigo-400">
    <div className="flex items-center py-10 border-b-indigo-600">
      <h2 className="text-xl flex-1 font-bold text-black text-start ml-3 font-sans">
        Aarav Patel
      </h2>
    </div>
    <div className="flex-1 flex flex-col ">
      <h2 className="text-2xl font-bold text-white text-start mx-3 font-sans truncate ">
       {title}
      </h2>
      <p className="text-md text-dimWhite text-justify mx-3 mt-3 font-sans tracking-loose leading-tight">
        {content}
      </p>
    </div>
    <div className="flex justify-end mr-3 py-2">
      <p className="mr-2 text-md">Posted on:</p>
    </div>
  </div>
);

const BlogFeature = () => {
const [ blogs, setBlogs ] = useState([]);

  useEffect(() => {
    try{
        const userCollectionRef = collection(db, `users`);
        const userDocRef = doc(userCollectionRef)
            const blogCollectionRef = collection(userDocRef, 'blogs');

        onSnapshot(blogCollectionRef, orderBy('created', 'desc'), (snapshot) => {

          /// setblogs is update is delay
            setBlogs(snapshot.docs.map(doc => ({
                id: doc.id, 
                data: doc.data()
            })));
          });

    }catch(error){
        console.log(error.message)
    }
    }, [])
    console.log(blogs)
  return (
   <div className='h-screen'>
    Hiiiii
       { blogs.map(({id, data}) => (
          <DisplayBlog key={id} title={data.title} content={data.content}/>
          ))}
        </div>
  )
}

export default BlogFeature