
import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import userImg from '../assets/user.png';



import { AuthContext } from '../provider/AuthProvider';
export default function Navbar() {
  const { user, logOut } = useContext(AuthContext)
  const [categories, setCategories] = useState([]);

 const handleLogOut=()=>{
   logOut().then(()=>{
    alert('You Logged out succcs')
   })
   .catch ((error)=>{
     alert(error.message);
   })
 }
  useEffect(() => {
    fetch('/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);
  return (
    <div>
      <div className="navbar bg-base-100   ">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden  text-start  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10  "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              {categories.map((category) => (
                <li key={category.id}>
                  <NavLink
                    to={`/category/${category.id}`}
                    className={({ isActive }) =>
                      `btn bg-base-100 border-0 text-accent font-semibold hover:bg-base-200 w-full text-left ${isActive ? 'bg-base-200' : ''}`
                    }
                  >
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>

          </div>
          {/* <a className="btn btn-ghost text-xl  md:w-full justify-start  ">
            {user && user.email}
          </a> */}
          <div className="btn btn-ghost flex flex-col items-start leading-tight">
            <span className="text-xs sm:text-xs md:text-base font-semibold">
              {user?.displayName}
            </span>
          </div>



        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Career</NavLink>
            </li>
          </ul>
        </div>


        <div className="navbar-end flex gap-5 items-center">

          {user && (
            <img
              src={user.photoURL || userImg} 
              alt="user"
              className="hidden md:block w-10 h-10 rounded-full"
            />
          )}



          {user ? (<button onClick={handleLogOut} className='btn btn-primary px-10 '>LogOut</button>)
            :
            (<NavLink to='/auth/login' className="btn btn-primary px-10">
              Login
            </NavLink>)}

        </div>

      </div>
    </div>
  );
}
