import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import  {getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { db, auth } from "../../firebase";
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


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
    uid:'',
    gender:'',
    nationality:'',
    category:'',
    empstatus:'',
  });
  const {name, email, password, college, graduationyear, stream, uid, contactno, gender, nationality, category, empstatus} = formdata;
  function change(e){
    setformdata((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value
    })
  )}

  async function onSubmit(e) {
    e.preventDefault()
    try {
      if(!formdata.category || !formdata.college || !formdata.contactno || !formdata.email || !formdata.empstatus || !formdata.gender || !formdata.graduationyear || !formdata.name || !formdata.nationality || !formdata.password || !formdata.stream || !formdata.uid){
        toast.error("Please Fill all the fields")
      }else{
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password, college, graduationyear, stream, uid, contactno, gender, nationality, category, empstatus)
        updateProfile(auth.currentUser, {
          displayName: name
        })
        const user = userCredentials.user;
        formdata.timestamp = serverTimestamp();
        await setDoc(doc(db, 'users', user.uid), formdata)
        toast.success(
          "Once you being verified by your college authorities. You will recieve your login credentials in your given email."
        );
        navigate('/login')
      }
      } catch (error) {
        toast.error("Error Occured while Registration. Pleasr try again letter!!")
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
            placeholder='contactno'
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
            value={uid}
            id='uid'
            placeholder='University ID'
            onChange={change}></input>

            <input type='text' className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
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
            <button className='text-center w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium 
            uppercase rounded shadow-md hover:bg-blue-700 transition duration-100 ease-in-out 
            hover:shadow-lg active:bg-blue-800' type='submit'>Sign-Up</button>
              </form> 
              </div>
      </div>
    </section>
  )
}
