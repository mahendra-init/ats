import React, { useState } from "react";
import { db } from '../../firebase';
import { collection, doc, setDoc } from '@firebase/firestore';

function CreateBlog({ createBlog, uid }) {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  let handleClick = () => {
    try{
      const userCollectionRef = collection(db, `users`);
      const userDocRef = doc(userCollectionRef, uid)
      const blogCollectionRef = collection(userDocRef, `blogs`);
      const blogDocRef = doc(blogCollectionRef);
  
      setDoc(blogDocRef, {
          title: blogTitle,
          content: blogContent,
      });
  
      setBlogContent('');
      setBlogTitle('');
      console.log('Data successfully added to Firestore');
    }catch(error) {
      console.log(error.message);
    }
  };

  if (createBlog) {
    return (
      <>
        <div>Blog</div>
        <div className="flex flex-col p-3 m-2 space-y-3 border rounded-md">
          <input
            placeholder="Blog Title"
            type="text"
            value={blogTitle}
            className="p-2"
            onChange={(e) => setBlogTitle(e.target.value)}
          />
          <textarea
            rows={10}
            placeholder="Blog Content"
            type="textarea"
            value={blogContent}
            className="p-2"
            onChange={(e) => setBlogContent(e.target.value)}
          />
          <button
            className="p-2 bg-blue-400 rounded-full font-bold text-white"
            onClick={handleClick}
          >
            Post Blog
          </button>
        </div>
      </>
    );
  }
}

export default CreateBlog;
