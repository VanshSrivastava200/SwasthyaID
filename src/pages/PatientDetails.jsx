import {
  AiFillDashboard,
  AiFillProfile,
  AiOutlineSearch,
  AiOutlineQrcode,
  AiFillSetting,
} from "react-icons/ai";
// import react from 'react'
import DiagnosisFrom from "../components/DiagnosisForm";
import { useState } from "react";
import PatientPreviousDiagnosis from "../components/PatientPreviousDiagnosis";
import { IoIosCloseCircle } from "react-icons/io";
const PatientDetails = () => {
  const [age, setAge] = useState(46);
  const [blood, setBlood] = useState("O+");
  const [gender, setGender] = useState("Others");
  const [patientName, setPatientName] = useState("Kallu Singh");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addForm = () => {
    if (isFormOpen) setIsFormOpen(false);
    else setIsFormOpen(true);
    // setIsFormOpen(prev => !prev)
  };

  return (
    <div className="m-auto flex shadow-2xl flex-row h-[100vh] w-[90vw] no-scrollbar overflow-y-scroll">
      <div className="h-[100%] w-[25%] border-r border-gray-200 bg-white p-7 pt-10 flex flex-col items-center">
        <img
          className="rounded-full w-30 aspect-square object-cover m-3"
          src="https://media.istockphoto.com/id/185117418/photo/medical-patient-side-profile-facing-right.jpg?s=612x612&w=0&k=20&c=yR1t-G_VVY-wy3kSwmvfn4orsEQtQe2S0XiFue8kpw0="
          alt="profile-picture"
        />

        <p className="text-lg font-semibold mb-6 text-gray-800 ">
          {patientName}
        </p>

        <div className=" font-semibold text-gray-500 items-center w-full border-gray-300 flex flex-col border-b-2 py-4">
          <p>Age : {age}</p>
          <p>Gender : {gender}</p>
          <p>Blood Group : {blood}</p>
        </div>
        <div className="flex w-full font-semibold text-lg flex-col text-start my-3 ">
          Current Diseases:
          <ul className=" my-1 ml-6 list-disc font-medium text-sm text-gray-500">
            <li>Diabetes</li>
            <li>HIV AIDS</li>
            <li>High Blood Pressure</li>
          </ul>
        </div>
        <div className="flex w-full font-semibold text-lg flex-col text-start my-3 ">
          Regular Medicines:
          <ul className="my-1 ml-6 list-disc font-medium text-sm text-gray-500">
            <li>Paracetamol</li>
            <li>Crocin </li>
          </ul>
        </div>
        <div className="flex w-full font-semibold text-lg flex-col text-start my-3 ">
          Allergies:
          <ul className="my-1 ml-6 list-disc font-medium text-sm text-gray-500">
            <li>Mosquito Bites</li>
            <li>Peanuts</li>
            <li>Dost Mites</li>
            <li>Penicillin</li>
          </ul>
        </div>
      </div>

      <div className="h-[100%] w-[75%] bg-white">
          <div className="p-6 border-b-1 border-gray-200 flex w-full  justify-between">
        {isFormOpen ? (
            <><div className="w-[50%] overflow-hidden flex justify-start space-x-2 px-3 items-center bg-gray-200 h-9 rounded-full ">
              <AiOutlineSearch className="w-[20px] h-full " />

              <input
                className=" h-full w-[calc(100%-20px)] outline-none text-xs "
                type="text"
                placeholder="Search Diagnosis"
              />
            </div>
            <button
              onClick={addForm}
              className="w-auto cursor-pointer bg-blue-400 h-9 rounded-full border-[1px] border-blue-600 shadow-md text-center text-white text-sm font-semibold px-4"
            >
              Add Diagnosis
            </button></>
        ) : (
          <div className="w-full flex flex-col">
            <div className="flex-row-reverse"><IoIosCloseCircle onClick={addForm}
            className=" cursor-pointer h-9 w-9 text-blue-500 float-right mx-4 "
            /></div>
            <DiagnosisFrom/>
            </div>
        )}
            </div>

        <div className="h-[87%] w-full p-6">
          <h1 className="text-2xl font-semibold mb-2">Previous Diagnoses</h1>

          <div className=" flex items-center   flex-wrap gap-4 no-scrollbar overflow-y-scroll h-[95%] w-[100%]">
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
            <PatientPreviousDiagnosis />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
