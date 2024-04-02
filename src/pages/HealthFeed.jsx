import React from "react";
import { health } from "../../data";
import NavBar from "../component/mainPage/NavBar";
import TextField from "@mui/material/TextField";
import ForumIcon from "@mui/icons-material/Forum";
import Person2Icon from '@mui/icons-material/Person2';

const HealthFeed = () => {
  return (
    <>
    <NavBar/>
    <div className="p-5 flex flex-col md:flex-row justify-center   gap-5">
    <div className="w-70%">
      <h1 className="text-3xl font-bold mb-5">Health Feed - Articles, Q&As, Quizzes and More</h1>
      <div>
        {health.map((item, id) => (
          <div key={id} className="border border-gray-300 rounded-lg p-4 mb-4">
            <p className="text-lg font-bold mb-2">{item.ques}</p>
            <p className="mb-2 text-gray-400"><span><Person2Icon/></span> {item.dr}</p>
            <p className="mb-2 text-gray-400">{item.education}</p>
            <p className="mb-2 text-gray-400">{item.spec}</p>
            <img src={item.img} alt="Doctor" className="w-full h-[400px]  mb-2" />
            <p>{item.ans}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="md:w-1/2  ">
    <h2 className="text-lg font-bold mb-6">You can Ask Anything</h2>
    <div className="border border-blue-900 rounded-lg shadow-md p-4 mb-4 flex justify-center flex-col">
            <div className="flex gap-2 mb-2">
              <ForumIcon />
              <h2 className="text-lg font-medium">Ask Free question</h2>
            </div>
            <p className="text-gray-500 mb-3 ">
              Get FREE multiple opinions from Doctors
            </p>
            <TextField
              label="Enter question for you or someone else.eg My left eye is red and swollen.."
              className="w-full"
            />
            <div className="flex justify-evenly mt-5">
              <p className="text-gray-600">Posted anonymously</p>
              <button className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                Submit
              </button>
            </div>
          </div>
    </div>
  </div>
  
</>
  

  );
};

export default HealthFeed;
