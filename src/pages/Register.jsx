import { useState } from "react";
import Card from "@mui/material/Card";
import { TimePicker } from "antd";
import axios from "axios";

const Register = () => {
  const [doctorInfo, setDoctorInfo] = useState({
    name: "",
    email: "",
    specialty: "",
    hospital: "",
    experience: "",
    address: "",
    phoneNumber: "",
    timing: {
      start: "",
      end: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorInfo((prevDoctorInfo) => ({ ...prevDoctorInfo, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Doctor information submitted:', doctorInfo);

    try {
      const response = await axios.post(
        "https://doctor-backend-6.onrender.com/register",
        {
          name: doctorInfo.name,
          email:doctorInfo.email,
          experience:doctorInfo.experience,
          hospital:doctorInfo.hospital,
          number:doctorInfo.phoneNumber,
          address:doctorInfo.address,
          timing:{
            start:doctorInfo.timing.start,
            end:doctorInfo.timing.end
          }

          ,
          spec:doctorInfo.specialty,
        }
      );
      console.log("resposne:", response);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleTime = (time, timeString) => {
    console.log("time", time);
    console.log("time String", timeString[1]);

    setDoctorInfo((pre) => ({
      ...pre,
      timing: {
        start: timeString[0],
        end: timeString[1],
      },
    }));
  };

  return (
    <div className="flex justify-center items-center mt-10 ">
      <Card  style={{ backgroundColor: '#E5E7EB' }} className="w-[700px] p-6  rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-2 text-center">
          Doctor Registration
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Enter your information to register as a doctor
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
                value={doctorInfo.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
                value={doctorInfo.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Specialty
              </label>
              <input
                type="text"
                name="specialty"
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
                value={doctorInfo.specialty}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Experience
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
                value={doctorInfo.experience}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 font-bold mb-2">
                Hospital
              </label>
              <input
                type="text"
                name="hospital"
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
                value={doctorInfo.hospital}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
                value={doctorInfo.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                className="border border-gray-300 rounded-md py-2 px-3 w-full"
                value={doctorInfo.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Timing
              </label>
              <TimePicker.RangePicker
                className="border border-gray-300 rounded-md py-2 px-3 w-full "
                onChange={handleTime}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600 flex justify-center items-center w-1/2 mx-auto mt-4"
          >
            Register
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
