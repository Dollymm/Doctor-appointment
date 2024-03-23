import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

const Register = () => {
    const [doctorInfo, setDoctorInfo] = useState({
        name: '',
        email: '',
        specialty: '',
        hospital: '',
        address: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctorInfo((prevDoctorInfo) => ({ ...prevDoctorInfo, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform any actions with the doctor information, such as sending it to a server
        console.log('Doctor information submitted:', doctorInfo);
        // Reset the form after submission if needed
        setDoctorInfo({
            name: '',
            email: '',
            specialty: '',
            hospital: '',
            address: '',
            phoneNumber: '',
        });
    };

    return (
        <div className='flex justify-center items-center mt-10 '>
            <Card className='w-[700px] p-6 bg-white rounded-lg shadow-md'>
                <h1 className='text-2xl font-bold mb-2 text-center'>Doctor Registration</h1>
                <p className='text-gray-600 mb-4 text-center'>Enter your information to register as a doctor</p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                            <input type="text" id="name" name="name" className="border border-gray-300 rounded-md py-2 px-3 w-full" value={doctorInfo.name} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" className="border border-gray-300 rounded-md py-2 px-3 w-full" value={doctorInfo.email} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="specialty" className="block text-gray-700 font-bold mb-2">Specialty</label>
                            <input type="text" id="specialty" name="specialty" className="border border-gray-300 rounded-md py-2 px-3 w-full" value={doctorInfo.specialty} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="hospital" className="block text-gray-700 font-bold mb-2">Hospital</label>
                            <input type="text" id="hospital" name="hospital" className="border border-gray-300 rounded-md py-2 px-3 w-full" value={doctorInfo.hospital} onChange={handleChange} required />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address</label>
                            <input type="text" id="address" name="address" className="border border-gray-300 rounded-md py-2 px-3 w-full" value={doctorInfo.address} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                            <input type="text" id="phoneNumber" name="phoneNumber" className="border border-gray-300 rounded-md py-2 px-3 w-full" value={doctorInfo.phoneNumber} onChange={handleChange} required />
                        </div>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600 flex justify-center items-center w-1/2 mx-auto mt-4">Register</button>
                </form>
            </Card>
        </div>
    );
};

export default Register;
