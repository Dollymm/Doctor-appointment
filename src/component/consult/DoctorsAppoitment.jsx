import { useState } from "react";
import NavBar from "../mainPage/NavBar";
import ChildNav from "../mainPage/ChildNav";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ConfirmAppoitment from "../../models/ConfirmAppoitment";
import { useSelector } from "react-redux";


export const DoctorsAppoitment = () => {
  const doctor=useSelector((state)=>state.currentId)
  console.log( 'doctors id:',doctor)

  const [isExpanded, setIsExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); 
  const [doc,setDoc]=useState()


  
   const openModal = (doctor) => {
    setDoc(doctor)
        setModalOpen(true);
    };

   
    const closeModal = () => {
        setModalOpen(false);
    };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  
// localStorage.clear()


  return (
    <>
      <NavBar />
      <ChildNav />
      <div className="flex justify-center mt-10">
        <input
          className="w-64 h-10 rounded-lg px-4 border border-black "
          placeholder="Search for any health Keyword"
        />
        <button className="border border-blue-900 bg-blue-900 hover:bg-white hover:text-black text-white rounded-lg px-4 h-10 ml-3">
          Search
        </button>
      </div>
      <div className="flex justify-center flex-col md:flex-row mt-6 ">
        <div className="w-full md:w-[80vw] px-4 mb-4">
          <div className="bg-white border border-black rounded-lg shadow-md p-4 mb-4  ">
            <div className="flex   items-center">
              <div className="md:w-1/4 md:text-center mb-4 md:mb-0">
                <img
                  src="https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                  className="w-34 h-[15vh] rounded-xl mt-4 mx-auto mb-4 md:mb-0"
                  alt="Doctor Image"
                />
                
              </div>
              <div className="md:w-3/4 ml-4">
                <h3 className="text-xl font-semibold mb-2">Dr. {doctor.name}</h3>
                <div className="text-sm mb-2">{doctor.experience} of experience</div>
                <div className="text-sm mb-2"></div>
                <div className="text-sm mb-2">{doctor.hospital}</div>
                <div className="flex gap-3">
                  <p>💵₹500 at clinic</p>
                  <p>💳₹300 online</p>
                </div>
              </div>
            </div>
            <hr className="my-4 border-t border-gray-900" />
          </div>

          <div className=" md:flex">
            <div className=" w-full md:w-1/2">
            <h1 className="text-2xl font-bold mb-3">Personal Statement</h1>
              <div className="bg-white border rounded-lg shadow-md p-4 mb-4">
               
                <p className="text-justify">
                  {isExpanded ? (
                    <>
                      To provide my patients with the highest quality healthcare, I'm dedicated to the newest advancements and keep up-to-date with the latest health care technologies.
                      <h2 className="font-bold text-gray-600 mb-3">More about Dr. N A h2</h2>
                      Khan Dr. N A Khan is a popular Unani Sexologist in Delhi. He has been a practicing Sexologist for 17 years. He has done D.U.M.B.I.M. You can consult Dr. N A Khan at The Unani Clinic (An ISO certified Clinic) in Delhi. Don't wait in a queue, book an instant appointment online with Dr. N A Khan on Lybrate.com. 
                      <br/>
                      <br/>
                      Lybrate.com has a nexus of the most experienced Sexologists in India. You will find Sexologists with more than 30 years of experience on Lybrate.com. You can view profiles of all Sexologists online in Delhi. View the profile of medical specialists and their reviews from other patients to make an informed decision.
                      <span className="text-blue-500 cursor-pointer" onClick={toggleExpanded}> View Less</span>
                    </>
                  ) : (
                    <>
                      To provide my patients with the highest quality healthcare, I'm dedicated to the newest advancements and keep up-to-date with the latest health care technologies. <span className="text-blue-500 cursor-pointer" onClick={toggleExpanded}>View More</span>
                    </>
                  )}
                </p>
              </div>
              <div>
  <h1 className="text-2xl font-bold">Doctor Information</h1>
  <div className="bg-white border rounded-lg shadow-md p-4 mb-4 flex justify-center flex-col">
      <div className="mb-4">
        <h2 className="text-lg font-bold flex items-center"><span className="bg-pink-400 rounded-full mr-2 "><AccountCircleIcon /></span>Speciality</h2>
        <p className="ml-10">{doctor.spec}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold flex items-center"><span className="bg-yellow-400 rounded-full mr-2 "><LocalHospitalIcon /></span>Other Treatment areas</h2>
        <ul className="ml-10 list-disc">
          <li>Allergist/Immunologist</li>
          <li>Family Medicine Specialist</li>
          <li>Dermatologist</li>
          <li>Sports Nutritionist</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold flex items-center"><span className="bg-green-400 rounded-full mr-2 "><SchoolIcon /></span>Education</h2>
        <ul className="ml-10 list-disc">
          <li>MBBS , Kasturba Medical College , 2014</li>
          <li>Basic Life Support (B.L.S) , American Heart Association , 2015</li>
          <li>Advanced Cardiac Life Support , American Heart Association , 2015</li>
          <li>Fellow Of Academy Of General Education (FAGE) , Kasturba Medical College , 2015</li>
          <li>DNB , Max Healthcare , 2021</li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold flex items-center"><span className="bg-purple-400 rounded-full mr-2 "><BusinessCenterIcon /></span>Past Experience</h2>
        <ul className="ml-10 list-disc">
          <li>Visiting fellow student at MD Anderson Cancer Centre</li>
          <li>Clinical associate at New York Methodist Hospital</li>
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold flex items-center"><span className="bg-blue-400 rounded-full mr-2 "><RecordVoiceOverIcon /></span>Languages Spoken</h2>
        <ul className="ml-10 list-disc">
          <li>English</li>
          <li>Hindi</li>
        </ul>
      </div>
    </div>
</div>
<div>
    <p className="text-2xl font-bold">Clinic Location</p>
    <div className="bg-white border rounded-lg shadow-md p-4 mb-4">
        <p>{doctor.address}</p>
    </div>
</div>

            </div>
            <div className="w-full md:w-1/2 ">
            <div>
            <div>
                <h1>Book Clinic Appointment with Dr. {doctor.name}</h1>
  
                <div className="bg-white border border-blue-900 rounded-lg shadow-md p-4 mb-4 ml-3 mt-5">
  <div className="flex items-center">
  <div className=" flex justify-start">

    <img
      src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=996&t=st=1711871596~exp=1711872196~hmac=41ea1c52df45769b2cc7895dd86b0b383c20ede6a8a6d2ceece194f33ffdeb88"
      className="w-30 h-[15vh] border border-black rounded-xl mt-4 mx-auto mb-4 md:mb-0"
      alt="Hospital Image"
    />
  </div>
    <div className="ml-4">
      <p className="font-semibold">{doctor.hospital}</p>
      <p className="text-gray-500">{doctor.address}</p>
      <p className="text-gray-500">💵 ₹500 at clinic</p>
    </div>
  </div>
  <div className="flex justify-between mt-4">
    <button className="font-semibold border border-indigo-500 bg-white   text-black px-4 py-2 rounded-lg transition duration-300 mr-2 md:w-1/2">
      See all Timings
    </button>
    <button onClick={()=>openModal(doctor)} className="font-semibold border border-indigo-500 bg-blue-900 hover:bg-white text-white hover:text-black px-4 py-2 rounded-lg transition duration-300 ml-2 md:w-1/2">
      Book Appointment
    </button>
  </div>
</div>
<ConfirmAppoitment isOpen={modalOpen} onClose={closeModal}  doc={doc}/>


            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
