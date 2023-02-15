import React from 'react'

function DisplayEvent() {
    let today = new Date()
    let date = today.getDate() + '/' + parseInt(today.getMonth() + 1) + '/' + today.getFullYear()
  return (
    <div className="flex flex-col w-[50vw] shadow-xl border-solid border-1 border-indigo-600">
        <div className='flex'>
            <img className=' w-full object-contain' src='https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' alt="banner" />
            </div>
        <div className="flex-1 flex flex-col bg-gradient-to-b from-indigo-500">
            <div className='flex items-center'>

          <h2 className="text-2xl flex-1 font-bold text-white text-start ml-3 font-sans">
            CSS Battle
          </h2>
          <p className='mr-2 text-md font-medium'>{date}</p>
            </div>
          <p className='text-md text-dimWhite text-justify mx-3 mt-3 font-sans tracking-loose leading-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem molestias ipsam nam esse numquam? Laudantium, quae hic cupiditate officia, ducimus delectus, in dolor deserunt consectetur vel enim explicabo! Officiis?</p>
        </div>
        <div className='flex justify-end text-md mr-3 py-2'>
          <p className='font-bold'>Organized by ACE</p>
        </div>
    </div>
  )
}

export default DisplayEvent
