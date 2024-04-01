import React from 'react';
import {data} from '../../../data';
import { useNavigate } from 'react-router-dom';

const Consult = () => {
  const navigate=useNavigate();
  const handleConsultNowClick=()=>{
    navigate('/appointment')
  }
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
            <div key={id} className="text-center bg-blue-900 p-6 rounded-lg shadow-md">
              <img src={item.img} alt={item.description} className="mx-auto w-24 h-24 rounded-full mb-4" />
              <p className="text-lg font-semibold mb-2 text-white">{item.description}</p>
              <button className=" border boder-indigo-500 bg-white hover:bg-blue-900 hover:text-white  text-black font-semibold py-2 px-4 rounded-full" onClick={handleConsultNowClick}>
              Ask Gen Doctor
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className='border border-indigo-400  hover:bg-blue-900   hover:text-white rounded-lg px-2 py-2 font-semibold transition duration-300 w-[200px] mx-auto'>
            View more specialties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consult;
