import React from 'react';

const NavBar = () => {
  return (
    <div className="bg-indigo-300 py-4" >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-black font-bold text-2xl md:text-2xl md:ml-6 mb-4">
            Health <span className="text-yellow-400">➕</span>
          </p>
          <div className=''>
          <ul className="flex gap-4 md:gap-7 font-bold md:flex-row md:mt-0">
            <li className="text-black mr-2 hover:text-blue-700 transition duration-300 mt-2 md:mt-1">
              For Doctors
            </li>
            <li class="text-red-700 mr-2 hover:text-blue-700 transition duration-300 border border-black rounded-full px-2 py-1 bg-white shadow-md hover:shadow-lg md:mr-0 md:mt-0
    md:w-auto md:px-4 md:py-2 md:text-base text-sm">
    Book Appointment
</li>



            <li className="text-black hover:text-blue-700 transition duration-300 mt-2 md:mt-1">
              Login/sign-up
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
