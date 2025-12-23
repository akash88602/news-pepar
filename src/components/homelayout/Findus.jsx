import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
export default function Findus() {
  return (
    <div>
        <div className='test-start mt-5'>
            <h2 className='font-bold mb-5 w-full'>Find Us on</h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn bg-white join-item justify-start text-gray-500">
                        <FaFacebook className='text-blue-500' />
                        Facebook
                    </button>
                    <button className="btn bg-white join-item justify-start text-gray-500">
                        <FaXTwitter className='text-blue-900' />
                        Twitter
                        </button>
                    <button className="btn bg-white join-item justify-start text-gray-500">
                        <FaInstagram className='text-red-500' />
                        Instagram
                        </button>
                </div>
            </div>
        </div>
    </div>
  )
}
