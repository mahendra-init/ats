import React from 'react'
const DisplayBlog = ({ date }) => (
  <div className="flex flex-col w-[50vw] shadow-xl border-solid border-1 border-indigo-600 bg-gradient-to-t from-indigo-400">
    <div className="flex items-center h-[20vh]">
      <h2 className="text-xl flex-1 font-bold text-black text-start ml-3 font-sans">
        Aarav Patel
      </h2>
      <div className="w-[100px] h-[100px] rounded-full mr-3 p-2">
        <img
          className=" w-[100%] h-[100%] rounded-full"
          src="https://media.istockphoto.com/id/1311634222/photo/portrait-of-successful-black-male-modern-day-student-holding-smartphone.jpg?b=1&s=170667a&w=0&k=20&c=qdZ9RCZsdzSqmeBrluO_S-sC8Y7lUBre80UvjwTCRxE="
          alt="banner"
        />
      </div>
    </div>
    <div className="flex-1 flex flex-col ">
      <h2 className="text-2xl font-bold text-white text-start mx-3 font-sans truncate ">
        AI's, life changing features sdfsafsdggsbsdbsfbsfbsbf Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Dicta odio eum aut iste aperiam
        exercitationem rerum autem corrupti, recusandae suscipit nobis vitae
        alias, optio eius? Eligendi officia mollitia dolores delectus!.
      </h2>
      <p className="text-md text-dimWhite text-justify mx-3 mt-3 font-sans tracking-loose leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
        voluptatem molestias ipsam nam esse numquam? Laudantium, quae hic
        cupiditate officia, ducimus delectus, in dolor deserunt consectetur vel
        enim explicabo! Officiis? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam nisi libero dolorem delectus non qui accusantium
        fugit, nemo impedit mollitia, accusamus a doloremque ducimus error et
        laborum dignissimos itaque facere?
      </p>
    </div>
    <div className="flex justify-end mr-3 py-2">
      <p className="mr-2 text-md">Posted on: {date}</p>
    </div>
  </div>
);

function Blog({blog}) {
    let today = new Date();
    let date =
      today.getDate() +
      "/" +
      parseInt(today.getMonth() + 1) +
      "/" +
      today.getFullYear();
      if(blog){
        return (
          <div>
            <DisplayBlog date={date} />
          </div>
        );
    }
}

export default Blog;
