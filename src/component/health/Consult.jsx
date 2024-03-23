import React from 'react';
import {data} from '../../../data';

const Consult = () => {
  return (
    <div className=" py-10">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <p className="text-3xl font-bold text-gray-800 mb-3">
            Consult Top Doctors Online For Any Health Concern
          </p>
          <p className="text-lg text-gray-700">
            Private online consultations with verified doctors in all specialties
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, id) => (
            <div key={id} className="text-center bg-indigo-300 p-6 rounded-lg shadow-md">
              <img src={item.img} alt={item.description} className="mx-auto w-24 h-24 rounded-full mb-4" />
              <p className="text-lg font-semibold mb-2">{item.description}</p>
              <button className="bg-red-900 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full">
                Consult Now
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className='border border-red-800  hover:bg-gray-400   text-black rounded-lg px-2 py-2 font-semibold transition duration-300 w-[200px] mx-auto'>
            View more specialties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consult;
