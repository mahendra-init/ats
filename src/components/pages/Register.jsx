import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import  { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, auth } from "../../firebase";
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {FaUserCheck} from 'react-icons/fa'
import {MdVerifiedUser} from 'react-icons/md'

export default function SignUp() {
  const navigate = useNavigate()
  const [formdata,setformdata] = useState({
    name:'',
    email:'',
    password:'123456',
    college:'',
    graduationyear:'',
    contactno:'',
    stream:'',
    university_id:'',
    gender:'',
    nationality:'',
    category:'',
    empstatus:'',
    verified: false,
    _id: '',
  });
  const {name, email, password, college, graduationyear, stream, university_id, contactno, gender, nationality, category, empstatus, verified, _id} = formdata;
  function change(e){
    setformdata((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value
    })
  )}

  async function onSubmit(e) {
    e.preventDefault()
    console.log(auth)
    try {
      if(!formdata.category || !formdata.college || !formdata.contactno || !formdata.email || !formdata.empstatus || !formdata.gender || !formdata.graduationyear || !formdata.name || !formdata.nationality || !formdata.password || !formdata.stream || !formdata.university_id){
        toast.error("Please Fill all the fields")
      }else{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password, college, graduationyear, stream, university_id, contactno, gender, nationality, category, empstatus, verified, _id)
        updateProfile(auth.currentUser, {
          displayName: name
        })
        const user = userCredentials.user;
        formdata._id = user.uid
        formdata.timestamp = serverTimestamp();
        await setDoc(doc(db, 'users', user.uid), formdata)
        toast.success(
          "Once you being verified by your college authorities. You will recieve your login credentials in your given email."
        );
        navigate('/login')
      }
      } catch (error) {
        console.log(error)
        toast.error("Error Occured while Registration. Pleasr try again letter!!")
      }
    }
  return (
    <section>
      <div className='bg-indigo-400 text-white p-2 m-2 font-bold text-xl'>
      <Link to='/'><AiOutlineArrowLeft className='w-6 h-6 '/></Link>
      </div>
      <div></div>
      <h1 className="text-3xl text-center mt-6 font-bold text-indigo-400">Sign Up</h1>
      <FaUserCheck className='w-10 h-10 text-indigo-400 animate-bounce' id="user-icon"/>
      <div className="flex justify-between flex-wrap items-center px-3 py-12 mt-8 max-w-3xl mx-auto login">
        {/* <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAindiDaLEaTL1GmO_uRBKeWbm
            oJWO__oOcEzhV11FdPOj9zWOI2vUhWAvfOXUaUAz96Q&usqp=CAU"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div> */}
         {/* <div className="body-img"><img src='bodyimg.png' alt="" /></div> */}
        <div className="w-full md:w-[67%] lg:w-[80%] lg:ml-20">
          <form onSubmit={onSubmit}>
          <input type='text'
            className="mb-6 px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out w-full"
            value={name}
            id='name'
            placeholder='Full Name'
            onChange={change}></input>

            <input
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            type="email"
            value={email}
            id='email'
            placeholder='email'
            onChange={change}
            />

            <input
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            type="text"
            value={contactno}
            id='contactno'
            placeholder='Contact No'
            onChange={change}
            />

            <input type='text'
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={college}
            id='college'
            placeholder='College Name'
            onChange={change}></input>

            <input type='text'
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={graduationyear}
            id='graduationyear'
            placeholder='Graduation Year'
            onChange={change}></input>

            <input type='text'
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={stream}
            id='stream'
            placeholder='stream/branch'
            onChange={change}></input>

            <input type='text'
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={university_id}
            id='university_id'
            placeholder='University ID'
            onChange={change}></input>

            <input type='text' className='w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out' 
            placeholder='Gender' id='gender' value={gender} onChange={change} />

            <input type='text'
            className="mt-6 mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={nationality}
            id='nationality'
            placeholder='Nationality'
            onChange={change}></input>

            <input
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            type="empstatus"
            value={empstatus}
            id='empstatus'
            placeholder='Employee Status'
            onChange={change}
            />

            <input
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            type="category"
            value={category}
            id='category'
            placeholder='Category'
            onChange={change}
            />
            <div className='flex justify-between mt-3 mb-5 whitespace-nowrap text-sm sm:text-lg' >
              <p>Have a Account?<Link className='ml-1 text-red-600 hover:text-red-700 
              transition duration-200 ease-in-out' to='/login'>Sign-In</Link></p>
              <Link className='text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out' 
              to='/forgot-password'>Forgot Password?</Link>
            </div>
            <button className='text-center w-full bg-indigo-400 text-white px-7 py-3 text-sm font-medium 
            uppercase rounded shadow-md hover:bg-blue-700 transition duration-100 ease-in-out 
            hover:shadow-lg active:bg-blue-800' type='submit'>Sign-Up</button>
              </form> 
              </div>
      </div>
      <MdVerifiedUser className='w-10 h-10 text-indigo-400 animate-bounce' id='verified'/>
      <div className="circle1 bg-indigo-400 w-30"></div>
    </section>
  )
}
