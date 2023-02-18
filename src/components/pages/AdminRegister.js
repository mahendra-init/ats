import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import  { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, auth } from "../../firebase";
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export default function SignUp() {
  const navigate = useNavigate()
  const [formdata,setformdata] = useState({
    collegeName:'',
    email:'',
    password:'123456',
    contactno:'',
    collgeUniqueID:'',
  });
  const {collegeName, email, password, collgeUniqueID, contactno} = formdata;
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
      if(!formdata.collegeName || !formdata.email || !formdata.contactno || !formdata.collgeUniqueID){
        toast.error("Please Fill all the fields")
      }else{
        const adminCredentials = await createUserWithEmailAndPassword(auth, email, password, collegeName, collgeUniqueID, contactno)
        updateProfile(auth.currentUser, {
          displayName: collegeName
        })
        const admin = adminCredentials.user;
        formdata.timestamp = serverTimestamp();
        await setDoc(doc(db, 'admins', admin.uid), formdata)
        toast.success(
          "Once you being verified by your college authorities. You will recieve your login credentials in your given email."
        );
        navigate('/admin-login')
      }
      } catch (error) {
        toast.error("Error Occured while Registration. Pleasr try again letter!!")
        console.log(error, '>>>>>', error.message)
      }
    }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAindiDaLEaTL1GmO_uRBKeWbm
            oJWO__oOcEzhV11FdPOj9zWOI2vUhWAvfOXUaUAz96Q&usqp=CAU"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>

          <input type='text'
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={collegeName}
            id='collegeName'
            placeholder='College Name'
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
            placeholder='contactno'
            onChange={change}
            />

            <input type='text'
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            value={collgeUniqueID}
            id='collgeUniqueID'
            placeholder='College Regd. ID'
            onChange={change}></input>

            <div className='flex justify-between mt-3 mb-5 whitespace-nowrap text-sm sm:text-lg' >
              <p>Have a Account?<Link className='ml-1 text-red-600 hover:text-red-700 
              transition duration-200 ease-in-out' to='/admin-login'>Sign-In</Link></p>
            </div>
            <button className='text-center w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium 
            uppercase rounded shadow-md hover:bg-blue-700 transition duration-100 ease-in-out 
            hover:shadow-lg active:bg-blue-800' type='submit'>Sign-Up</button>
              </form> 
              </div>
      </div>
    </section>
  )
}
