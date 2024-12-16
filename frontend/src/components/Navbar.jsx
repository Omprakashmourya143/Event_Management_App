import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="bg-gray-800 p-4 font-semibold">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">EventApp</Link>
        <div className="space-x-4">
          <Link to="/register" className="text-white">Register</Link>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/dashboard" className="text-white">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
