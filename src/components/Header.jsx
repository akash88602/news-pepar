import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">

      <img className="w-[400px]" src={logo} alt="Logo" />

      <p className="text-gray-500">
        Journalism Without Fear or Favour
      </p>

      <p className="text-accent font-semibold">
        {format(new Date(), 'EEEE, MMMM dd, yyyy')}
      </p>

    </div>
  );
};

export default Header;
