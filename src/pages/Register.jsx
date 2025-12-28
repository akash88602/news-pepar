import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "firebase/auth";

export default function Register() {
  
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [nameError,setNameError]=useState('');
  const handleRegister = (e) => {
    e.preventDefault();
     
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.files[0]; 
    const email = form.email.value;
    const password = form.password.value;
     if(name.length < 5){
         setNameError('neme should be more theb 5 character')
         return;
       }else{
        setNameError('')
       }
    createUser(email, password)
      .then((result) => {
        const user = result.user;

      
        const photoURL = photo ? URL.createObjectURL(photo) : null;

     
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL
        }).then(() => {
          
          setUser({ ...user, displayName: name, photoURL: photoURL });

          navigate('/auth/login');
        });
      })
     
  };
      
  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-start px-4 pt-10 sm:pt-14 md:pt-20">
      <div className="card bg-base-100 w-full max-w-sm sm:max-w-md md:max-w-lg shadow-2xl">
        <h1 className="m-5 font-semibold text-2xl text-center">Register your account</h1>
        <hr />
        <div className="card-body text-start">
          <form onSubmit={handleRegister} className="space-y-3">

            <div>
              <label className="label font-medium">Your Name</label>
              {nameError && <p className='text-xs text-error'>{nameError}</p>}
              <input name="name" required type="text" className="input input-bordered w-full" placeholder="Enter your name" />
            </div>

            <div>
              <label className="label font-medium">Photo</label>
              <input name="photo" type="file" className="file-input file-input-bordered w-full" />
            </div>

            <div>
              <label className="label font-medium">Email</label>
              <input name="email" required type="email" className="input input-bordered w-full" placeholder="Email" />
            </div>

            <div>
              <label className="label font-medium">Password</label>
              <input name="password" required type="password" className="input input-bordered w-full" placeholder="Password" />
            </div>

            <label className="flex items-center gap-2 text-sm mt-2">
              <input type="checkbox" className="checkbox checkbox-sm" required />
              Accept Terms & Conditions
            </label>

            <button type="submit" className="btn btn-neutral w-full mt-4">Register</button>

          </form>
        </div>
      </div>
    </div>
  );
}
