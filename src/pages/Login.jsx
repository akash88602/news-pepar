import React from 'react'
import { NavLink } from 'react-router'

export default function Login() {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className='m-5 font-semibold text-2xl text-center'>Login your account</h1>
                    <hr />
                    <div className="card-body ">
                        <fieldset className="fieldset space-y-2">
                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div className='text-start'>
                                <a className="link link-hover">
                                    Forgot password?</a>
                                    </div>
                            <button className="btn btn-neutral mt-4">Login</button>

                            <div className='text-center'>
                                <p className='font-semibold '>Don't Hove An Account ? {''}
                                    <NavLink to='/auth/register' className='text-secondary'>Register</NavLink> </p>
                            </div>
                        </fieldset>
                    </div>
                </div>

            </div>


        </div>
    )
}
