import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const ConfirmAppoitment = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [formData, setFormData] = useState({
    name: "",
    issue: "",
    timing: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('form is submit:',formData)
    onclose
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-[700px]">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold ">Appointment Details</h2>
          <button
  onClick={onClose} 
  className="text-gray-500 hover:text-gray-700 focus:outline-none"
>
  <CloseIcon />
</button>
        </div>
        <div>
          <div className="mb-3 ">
            {/* <h1 className="text-lg font-bold">Doctor details</h1> */}
            <div className=" border rounded-lg p-4 flex flex-wrap">
    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
      <label className="block mb-1" >Name of Doctor:</label>
      <input
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        type="text"
        id="name"
        name="name"
      />
    </div>
    <div className="w-full md:w-1/2 md:pl-2">
      <label className="block mb-1">Specialist:</label>
      <input
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        type="text"
      />
    </div>
    <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
      <label className="block mb-1">Timing:</label>
      <input
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        type="text"
      />
    </div>
  </div>

            <div className="border rounded-lg p-4  mt-4">
              {/* <h1 className="text-lg rounded-lg font-bold">Patients Details</h1> */}
              <form className="max-w-md" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block mb-1" htmlFor="name">
                    Name of Patient:
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-1">Issue:</label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    type="text"
                    id="issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1">Email:</label>
                  <input
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </form>
              
            <div className="flex justify-end mt-4">
                <button type="submit" className="bg-blue-900 px-4 py-2 rounded-lg text-white w-40">
                  Submit
                </button>
            </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAppoitment;
