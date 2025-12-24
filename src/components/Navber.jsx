
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


import use from '../assets/user.png'
export default function Navbar() {
  const [categories, setCategories] = useState([]);

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
          <a className="btn btn-ghost text-xl w-full justify-start">
            daisyUI  asfpk,gfk
          </a>

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
          <img
            src={use}
            alt="user"
            className="hidden md:block w-10 h-10 rounded-full"
          />
          {/* {user && (
            <img
              src={use}
              className="hidden md:block w-10 h-10 rounded-full"
            />
          )} */}

          <NavLink to='/auth/login' className="btn btn-primary px-10">
            Login
          </NavLink>
        </div>

      </div>
    </div>
  );
}
