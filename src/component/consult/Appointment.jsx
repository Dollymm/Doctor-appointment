import axios from "axios";
import { useState } from "react";
import NavBar from "../mainPage/NavBar";
import Center from "../mainPage/Center";
import ChildNav from "../mainPage/ChildNav";
import { problem } from "../../../data";

const Appointment = () => {
  const [message, setMessage] = useState("");
  const [genMessage, setGenMessage] = useState("");

  

  const [data, setData] = useState([]);
  const handlePrompt = (e) => {
    // console.log(e.target.value)
    setMessage(e.target.value);
  };
  // console.log("data",data)
  const getData = async () => {
    try {
      let response = await axios.post(
        "https://doctor-backend-6.onrender.com/chat",
        { message }
      );
      // console.log("res",response.data)
      setGenMessage(response.data);
      const newData = [...data, message];
      setData(newData);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <NavBar />
      <ChildNav />
      <div className="flex flex-col md:flex-row  justify-center   ">
      <div className=" md:w-1/2 h-[500px] max-w-md mx-auto bg-gray-200 shadow-md rounded-lg overflow-hidden mt-8 flex flex-col">
  
  <div className="bg-blue-500 text-white py-4 px-6">
    <p className="font-bold text-lg">👋Hello, I'm Doctor Gen. How can I help you?</p>
  </div>

  <div  className="flex-1 px-6 py-4 overflow-y-auto ">
    {data.map((item, index) => {
      return (
        <>

        <div key={index} class="mb-2 flex justify-end">
  <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-[70%]">
    <p className="font-semibold">You</p>
    <p className="text-gray-100">{item}</p>
  </div>
</div>

<div key={index} className="mb-2 flex justify-start">
  <div className="bg-gray-300 text-gray-800 rounded-lg px-4 py-2 max-w-[70%]">
    <p className="font-semibold">Gen</p>
    <p>{genMessage}</p>
  </div>
</div>
        </>

      );
    })}
  </div>

  <div className="border-t border-gray-300 px-4 py-2 flex ">
    <input
      type="text"
      className="w-full py-2 px-4 border border-gray-400 rounded-lg focus:outline-none"
      value={message}
      onChange={handlePrompt}
      placeholder="Type your message here..."
    />
    <button className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg float-right" onClick={getData}>Send</button>
  </div>
</div>



<div className="md:w-1/2 mt-4 ml-3">
          <h1 className="text-2xl">You can also consult these</h1>
          {problem.map((issue, id) => (
            <div key={id} className="bg-white border rounded-lg shadow-md p-4 mb-4 md:w-[600px]">
              <h2 className="text-lg font-bold mb-2">{issue.issues}</h2>
              <hr />
              <ul className="list-disc pl-4">
                {Object.entries(issue.symtoms).map(([symptomId, symptom]) => (
                  <li key={symptomId} className="text-sm">{symptom}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    
  </div>
</div>

    
  );
};
export default Appointment;
