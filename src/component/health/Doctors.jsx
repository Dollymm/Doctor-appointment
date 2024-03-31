import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Doctors = () => {
  const navigate=useNavigate();
  const handleDoctorNowClick=()=>{
    navigate('/allDoc')
  }
  
  const [data, setData] = useState([]);
  const[currentPage,setCurrentPage]=useState(1)
  const[doctorPerPage,SetdoctorPerPage]=useState(5)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctorRes = await axios.get(`https://doctor-backend-6.onrender.com/doctors?page=${currentPage}&limit=${doctorPerPage}`);
        setData(doctorRes.data.data); 
        console.log(doctorRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage,doctorPerPage]);
  const totalPage=Math.ceil(data.length/doctorPerPage);
  const startIndex=(currentPage-1)*doctorPerPage;
  const endIndex=startIndex+doctorPerPage;
  const currentDoctor=data.slice(startIndex,endIndex)


  return (
    <div className="w-full md:w-3/5 mx-auto px-4 mb-4">
      <h2 className="text-2xl font-bold mb-4">Popular Doctors Available</h2>
      {currentDoctor.map((dr,id) => (
        <div key={id} className="bg-blue-900 rounded-lg shadow-md p-4 mb-4 text-white ">
          <div className="flex flex-wrap md:flex-nowrap items-center">
            <div className="md:w-1/4 md:mr-4 md:text-center mb-4 md:mb-0">
              <img src='https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg' className="w-24 h-24 rounded-full mx-auto mb-4 md:mb-0" alt="Doctor Image" />
              <div className="text-center text-white font-bold">View Profile</div>
            </div>
            <div className="md:w-3/4 ml-4">
              <h3 className="text-xl font-semibold mb-2">Dr. {dr.name}</h3>
              <div className="text-sm mb-2">{dr.experience} year of Experience</div>
              <div className="text-sm mb-2">{dr.spec}</div>
              <div className="text-sm mb-2">{dr.hospital}</div>
            </div>
          </div>
          <hr className="my-4 border-t border-gray-900 " />
          <div className="flex justify-between items-center">
            <div className="text-sm md:ml-9">
              <h3 className="font-semibold mb-1">Consultation Fee</h3>
              <div className="font-bold">₹ 299/-</div>
            </div>
            <button className="button-2 font-semibold border boder-indigo-500 bg-white hover:bg-blue-900 hover:text-white text-black px-4 py-2 rounded-lg transition duration-300">Consult Now</button>
          </div>
        </div>
      ))}
      <div className="flex justify-center">
        <button  className="border border-indigo-800 hover:bg-blue-900 hover:text-white text-black rounded-lg px-2 py-2 font-semibold transition duration-300 w-48" onClick={handleDoctorNowClick}>View more</button>
      </div>
    </div>
  );
};


export default Doctors;
