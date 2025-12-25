import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

export default function Login() {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen px-3">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h1 className="m-5 font-semibold text-2xl text-center">
          Login your account
        </h1>
        <hr />

        <div className="card-body ">
          <form onSubmit={handleLogin} className="space-y-3 text-start">

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Email"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Password"
              required
            />

            <div className="text-start">
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button className="btn btn-neutral w-full mt-4">
              Login
            </button>

            <div className="text-center">
              <p className="font-semibold">
                Don't Have An Account?{" "}
                <NavLink to="/auth/register" className="text-secondary">
                  Register
                </NavLink>
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
