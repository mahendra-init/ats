import {FaUniversity} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'

function Footer() {
  return (
    <>
    <h1 className='text-2xl text-indigo-400 font-medium mt-10 text-center'>Our Alumni</h1>
    <div className='support grid grid-cols-3 mb-16 mt-10 mx-auto'>
        <div className="flex flex-col space-y-2 items-center justify-items-center">
            <img src='vicky-kaushal.jpg' className='h-50 w-60 rounded-md' alt="" />
            <h1 className='text-xl text-indigo-400 font-medium'>Vicky Kaushal - Indian Actor</h1>
            <p className='text-sm w-2/3 text-center text-indigo-400'>Rajiv Gandhi Institute of Technology</p>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-items-center border-x-2 border-x-slate-400">
            <img src='parag-agrawal.jpg' className='h-40 w-50 rounded-md' alt="" />
            <h1 className='text-xl font-medium text-indigo-400'>Parag Agrawal - Twitter C.E.O.</h1>
            <p className='text-sm w-2/3 text-center text-indigo-400'>IIT-Bombay</p>
        </div>
        <div className="flex flex-col space-y-2 items-center justify-items-center">
            <img src='cb.jpg' className='h-40 w-50 rounded-md' alt="" />
            <h1 className='text-xl font-medium text-indigo-400'>Chhagan Bhujbal - Indian Politician</h1>
            <p className='text-sm w-2/3 text-center text-indigo-400'>Veermata Jijabai Technological Institute</p>
        </div>
    </div>
    <div className='w-[80%] mx-auto' id='about'>
        <h1 className='text-3xl font-medium  pt-2 text-indigo-400 border-b-4'>About</h1>
        <p className='text-indigo-400 m-5'>The Communication between graduates and the institution
        can be very beneficial in many situations. For instance, the
        institution may be interested in extending an invitation for a
        guest lecture to one of its alumni who is a very successful
        entrepreneur now. But without having proper contact, the
        institution will have to spend time tracing the contact. Thus,
        maintaining consistent data goes hand-in-hand with
        establishing proper communication.</p>
    </div>
    <div className="references flex flex-col bg-indigo-400 text-white ">
        <div className='flex-1 my-12 mx-14'>
            <div className='flex space-x-8'>
                <div className='grow ml-18 space-y-4'>
                  <div className='flex flex-row mx-auto space-x-2'>
                    <FaUniversity className='text-xl w-10 h-10'/>
                    <h1 className='text-3xl font-medium  pt-2'>University</h1>
                  </div>
                  <div>
                  <p className='text-sm w-11/12'>A University should be a place of light, of liberty, and of learning.</p>
                  </div>
                </div>
                <div className='grow space-y-3'>
                    <h1 className='text-xl font-medium mb-6'>Contact Info</h1>
                    <div className='flex flex-row space-x-4'>
                        <AiFillHome />
                        <p className='text-sm'>123 Street, Thane West, Maharashtra, India</p>
                    </div>
                    <div className='flex flex-row space-x-4'>
                        <MdEmail />
                        <p className='text-sm'>info@techease.com</p>
                    </div>
                    <div className='flex flex-row space-x-4'>
                        <AiFillPhone />
                        <p className='text-sm'>+91 123 456 7890</p>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className='flex justify-center'>
            <div className='py-4 pl-12'>
                @2020 All Rights Reserved by TechEase
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer