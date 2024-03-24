import React from 'react';
import { doctor } from '../../../data';

const Doctors = () => {
  return (
    <div className="w-full md:w-3/5 mx-auto px-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Popular Doctors Available</h2>
      {doctor.map((dr) => (
        <div key={dr.id} className="bg-indigo-300 rounded-lg shadow-md p-4 mb-4">
          <div className="flex flex-wrap md:flex-nowrap items-center">
            <div className="md:w-1/4 md:mr-4 md:text-center mb-4 md:mb-0">
            
                <img src={dr.img} className="w-24 h-24 rounded-full mx-auto mb-4 md:mb-0" alt="Doctor Image" />
              
              <div className="text-center text-red-800 font-bold">View Profile</div>
            </div>
            <div className="md:w-3/4 ml-4">
             
                <h3 className="text-xl font-semibold mb-2">{dr.name}</h3>
              
              <div className="text-sm text-gray-600 mb-2">{dr.experience}</div>
              <div className="text-sm text-gray-600 mb-2">{dr.specilazation}</div>
              <div className="text-sm text-gray-600 mb-2">{dr.hospital}</div>
           
              
            </div>
          </div>
          <hr className="my-4 border-t border-gray-400 " />
          <div className="flex justify-between items-center">
            <div className="text-sm md:ml-9">
              <h3 className="font-semibold mb-1">Consultation Fee</h3>
              <div className="font-bold">₹ 299/-</div>
            </div>
         
              <button className="button-2 font-semibold bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">Consult Now</button>
            
          </div>
        </div>
      ))}
      <div className="flex justify-center">
  <button className="border border-red-800 hover:bg-red-900 hover:text-white text-black rounded-lg px-2 py-2 font-semibold transition duration-300 w-48">View more</button>
</div>

    </div>
  );
};

export default Doctors;
