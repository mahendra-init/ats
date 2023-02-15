import React, { useState } from "react";

function CreateBlog({ createBlog }) {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogAttachment, setBlogAttachment] = useState("");
  let handleClick = () => {
    console.log("button");
  };
  if (createBlog) {
    return (
      <>
        <div>Blog</div>
        <div className="flex flex-col p-3 m-2 space-y-3 border rounded-md">
          <input
            placeholder="Blog Title"
            type="text"
            className="p-2"
            onChange={(e) => setBlogTitle(e.target.value)}
          />
          <textarea
            rows={10}
            placeholder="Blog Content"
            type="textarea"
            className="p-2"
            onChange={(e) => setBlogContent(e.target.value)}
          />
          <div className="space-x-2">
            <label>Blog attachment</label>
            <input
              placeholder="Blog Attachment"
              type="file"
              onChange={(e) => setBlogAttachment(e.target.value)}
            />
          </div>
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
