import React from 'react'

export default function Register() {
    return (
        <div className="min-h-screen bg-base-200 flex justify-center items-start px-4 pt-10 sm:pt-14 md:pt-20">

            <div className="card bg-base-100 w-full max-w-sm sm:max-w-md md:max-w-lg shadow-2xl">

                <h1 className="m-5 font-semibold text-2xl text-center">
                    Register your account
                </h1>

                <hr />

                <div className="card-body text-start">
                    <fieldset className="space-y-3">
                        <div>
                            <label className="label font-medium">Your Name</label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Enter your name"
                            />
                        </div>


                        <div>
                            <label className="label font-medium">Photo</label>
                            <input
                                type="file"
                                className="file-input file-input-bordered w-full"
                            />
                        </div>


                        <div>
                            <label className="label font-medium">Email</label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Email"
                            />
                        </div>


                        <div>
                            <label className="label font-medium">Password</label>
                            <input
                                type="password"
                                className="input input-bordered w-full"
                                placeholder="Password"
                            />
                        </div>


                        <label className="flex items-center gap-2 text-sm mt-2">
                            <input type="checkbox" className="checkbox checkbox-sm" />
                            Accept Terms & Conditions
                        </label>


                        <button className="btn btn-neutral w-full mt-4">
                            Register
                        </button>

                    </fieldset>
                </div>
            </div>
        </div>
    )
}
