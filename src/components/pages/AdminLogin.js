import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Login() {
  const navigate = useNavigate()
  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredentials = await signInWithEmailAndPassword(auth,email,password)
      const docRef = doc(db, 'admins', userCredentials.user.uid)
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        console.log('Login successful', docSnap.data() )
        navigate('/admin-dashboard')
      }else{
        toast.error('Invalid Login Credentials');
      }
    } catch (error) {
      toast.error('Invalid Login Credentials');
    }
  }
  const [showpassword,setshowpassword]=useState(false)
  const [formdata,setformdata] = useState({
    email:'',
    password:'',
  });
  const {email,password} = formdata;
  function change(e){
    setformdata((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value
    })
  )}
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Login In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=
            MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1373&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form onSubmit={onSubmit}>
            <input
            className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 
            rounded transition ease-in-out"
            type="email"
            value={email}
            id='email'
            placeholder='email'
            onChange={change}
            />
            <div className='relative'>
            <input type={showpassword?'text':'password'} 
            className="w-full px-4 py-2 text-xl text-gray-700 
            bg-white border-gray-300 rounded transition ease-in-out" 
            placeholder='Password'
            value={password}
            id='password'
            onChange={change}
            />
            {
              showpassword? <AiFillEye className='absolute right-3 top-3 cursor-pointer text-xl' 
                onClick={()=>setshowpassword((prevState)=>
              !prevState
            )}
              />:<AiFillEyeInvisible className='absolute right-3 top-3 cursor-pointer text-xl'
              onClick={()=>setshowpassword((prevState)=>
              !prevState
            )}
              />
            }
            </div>
            <div className='flex justify-between mt-3 mb-5 whitespace-nowrap text-sm sm:text-lg' >
              <p>Don't Have Account?<Link className='ml-1 text-red-600 hover:text-red-700 
              transition duration-200 ease-in-out' to='/admin-register'>Register</Link></p>
            </div>
            <button className='text-center w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium 
            uppercase rounded shadow-md hover:bg-blue-700 transition duration-100 ease-in-out 
            hover:shadow-lg active:bg-blue-800' type='submit'>Sign-In</button>
              </form> 
            </div>
      </div>
    </section>
  )
}
