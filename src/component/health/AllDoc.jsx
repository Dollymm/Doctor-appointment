import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import NavBar from "../mainPage/NavBar";
import ChildNav from "../mainPage/ChildNav";
import TextField from "@mui/material/TextField";
import ForumIcon from "@mui/icons-material/Forum";
import { useNavigate } from "react-router-dom";
import ConfirmAppoitment from "../../models/ConfirmAppoitment";
import { id } from "../../redux/features/doctorSlice";
import { useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";

const AllDoc = () => {
  const [doc, setDoc] = useState();
  const [data, setData] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
  });
  const [filterDoc, setFilterDoc] = useState([]);
  const [searchDoctor, setSearchDoctor] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    emailjs
      .sendForm(
        "service_b1rcntm",
        "template_hc0vjpr",
        form.current,
        "SSnqSAARwCoJ8PNbX"
      )
      .then(
        () => {
          console.log("Success");
          setFormData({
            name: "",
            phone: "",
            city: "",
          });
        },
        (error) => {
          console.log("Fail", error);
        }
      );
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = (dr) => {
    setDoc(dr);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleViewProfileClick = (doctor) => {
    dispatch(id(doctor));
    navigate("/doctor");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctorRes = await axios.get(
          "https://doctor-backend-6.onrender.com/doctors"
        );
        setData(doctorRes.data.data);
        setFilterDoc(doctorRes.data.data)
        console.log(doctorRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSearchInput = (e) => {
    setSearchDoctor(e.target.value); 
    if (e.target.value.trim() === '') {
        setFilterDoc(data); 
    } else {
        const filtered = data.filter((dr) =>
            dr.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            dr.spec.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilterDoc(filtered.length>0?filtered:data);
    }
}
;

  return (
    <div>
      <NavBar />
      <ChildNav />

      <div className="flex justify-center  mt-10">
        <input
          className="w-64 h-10 rounded-lg px-4 border border-black "
          placeholder="Search for any health Keyword"
          value={searchDoctor}
          onChange={handleSearchInput}
        />
        <button className="border border-blue-900 bg-blue-900 hover:bg-white hover:text-black text-white rounded-lg px-4 h-10 ml-3">
          Search
        </button>
      </div>

      <div className="flex justify-center flex-col md:flex-row mt-6">
        <div className="w-full md:w-3/6  px-4 mb-4">
          {filterDoc.map((dr, id) => (
            <div
              key={id}
              className="bg-blue-900 rounded-lg shadow-md p-4 mb-4 text-white "
            >
              <div className="flex flex-wrap md:flex-nowrap items-center">
                <div className="md:w-1/4 md:mr-4 md:text-center mb-4 md:mb-0">
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/02/60/04/09/1000_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
                    className="w-24 h-24 rounded-full mx-auto mb-4 md:mb-0"
                    alt="Doctor Image"
                  />
                  <div
                    className="text-center text-white font-bold"
                    onClick={() => handleViewProfileClick(dr)}
                  >
                    <button>View Profile</button>
                  </div>
                </div>
                <div className="md:w-3/4 ml-4">
                  <h3 className="text-xl font-semibold mb-2">Dr. {dr.name}</h3>
                  <div className="text-sm mb-2">
                    {dr.experience} year of Experience
                  </div>
                  <div className="text-sm mb-2">{dr.spec}</div>
                  <div className="text-sm mb-2">{dr.hospital}</div>
                </div>
              </div>
              <hr className="my-4 border-t border-gray-900" />
              <div className="flex justify-between items-center">
                <div className="text-sm md:ml-9">
                  <h3 className="font-semibold mb-1">Consultation Fee</h3>
                  <div className="font-bold">₹ 299/-</div>
                </div>
                <button
                  className="button-2 font-semibold border border-indigo-500 bg-white hover:bg-blue-900 hover:text-white text-black px-4 py-2 rounded-lg transition duration-300"
                  onClick={() => handleOpen(dr)}
                >
                  Online Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
        <ConfirmAppoitment isOpen={modalOpen} onClose={handleClose} doc={doc} />

        <div className="w-full md:w-96  px-2">
          <div className="bg-gray-200 rounded-lg shadow-md p-4 mb-10">
            <h3 className="text-xl font-semibold mb-2 flex justify-center">
              Book Appointment For Consultation
            </h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your city"
                />
              </div>
              <div className="flex justify-center ">
                <button
                  type="submit"
                  className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
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
    </div>
  );
};

export default AllDoc;
