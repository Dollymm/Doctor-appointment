import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";
const ConfirmAppoitment = ({ isOpen, onClose, doc }) => {
  const [alertVisiable, setAlertVisible] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    issue: "",
    timing: "",
    email: "",
    doctorName: "",
    specialist: "",
  });
  const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); 

    emailjs
      .sendForm(
        "service_b1rcntm",
        "template_wa6flv9",
        form.current,
        "SSnqSAARwCoJ8PNbX"
      )
      .then(
        () => {
          setAlertVisible(true);
          console.log("Success");
          setFormData({
            name: "",
            issue: "",
            email: "",
            doctorName: "",
            specialist: "",
            timing: "",
          });
        },
        (error) => {
          console.log("Fail", error);
        }
      );
  };
  if (!isOpen) return null;

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
                <label className="block mb-1">Name of Doctor:</label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  id="name"
                  name="name"
                  value={doc.name}
                  readOnly
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
                <label className="block mb-1">Specialist:</label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  value={doc.spec}
                  readOnly
                />
              </div>
              <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
                <label className="block mb-1">Timing:</label>
                <input
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  type="text"
                  value={`${doc.timing[0].start} - ${doc.timing[0].end}`}
                  readOnly
                />
              </div>
            </div>

            <div className="border rounded-lg p-4  mt-4">
              {/* <h1 className="text-lg rounded-lg font-bold">Patients Details</h1> */}
              <form ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="doctorName" value={doc.name} />
                <input type="hidden" name="specialist" value={doc.spec} />
                <input
                  type="hidden"
                  name="timing"
                  value={`${doc.timing[0].start} - ${doc.timing[0].end}`}
                />

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
                <div className="flex justify-end mt-4">
                  <button
                    type="submit"
                    className="bg-blue-900 px-4 py-2 rounded-lg text-white w-40"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {alertVisiable && (
                <Snackbar
    autoHideDuration={6000} open={alertVisiable}>
    <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
      Your appointment is booked
    </Alert>
  </Snackbar>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAppoitment;
