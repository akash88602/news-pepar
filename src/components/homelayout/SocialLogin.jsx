import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export default function SocialLogin() {
  return (
    <div>
        <div className='grid grid-cols-1 gap-2 mt-5'>
       
        <button className="btn text-black border-black">
         <FaGithub size={25} />
          Login with GitHub
        </button>

      
        <button className="btn bg-white text-black border-[#2219d2]">
          <FcGoogle size={25} />
          Login with Google
        </button>
      </div>
    </div>
  )
}
