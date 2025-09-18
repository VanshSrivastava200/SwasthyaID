import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { useEffect } from "react";
const DiagnosisFrom = () => {
  const [Disease, setDisease] = useState([]);
  const handleChange = (event) => {
    if (!event.includes("Select") && !Disease.includes(event)) {
      setDisease([...Disease, event]);
    }
  };

  const removeDisease = (current) => {
    setDisease(Disease.filter((val) => val != current));
  };

  const [Test, setTest] = useState([]);
  const handleTestChange = (event) => {
    if (!event.includes("Select") && !Test.includes(event)) {
      setTest([...Test, event]);
    }
  };

  const removeTest = (current) => {
    setTest(Test.filter((val) => val != current));
  };

  return (
    <form action="submit">
      <h2 className="text-2xl font-semibold m-3">Diagnosis:</h2>
      <div className="flex overflow-x-scroll">
        {Disease.map((current) => {
          return (
            <div
              className="flex justify-center w-auto gap-2 items-center text-center p-1 bg-blue-200 px-4 m-1 border border-blue-600 rounded-lg"
              key={current}
            >
              <p className="h-full  flex items-center justify-center capitalize">
                {current}
              </p>
              <MdCancel
                onClick={(e) => {
                  removeDisease(current);
                }}
                className=" cursor-pointer text-xl  h-full text-black-200"
              />
            </div>
          );
        })}
      </div>

      <select
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        required
        className="outline-none   m-1 p-1.5 w-full focus:border-blue-200 border-0 border-b-2  text-md block border-gray-200"
        name="Disease"
        id="dis"
      >
        <option
          value="
                Select"
        >
          Select Condition
        </option>
        <option value="Diarrhoea">Diarrhoea</option>
        <option value="Jaundice">Jaundice</option>
        <option value="Fracture">Fracture</option>
        <option value="Malaria">Malaria</option>
      </select>

      <h2 className="text-2xl font-semibold m-3">Comments:</h2>
      <textarea
        className="border-2 p-2 w-full focus:border-blue-200 outline-none min-h-11 h-11 max-h-30 border-gray-200 rounded-md m-1"
        type="text"
      />
      <h2 className="text-2xl font-semibold m-3">Tests:</h2>
      <div className="flex overflow-x-scroll">
        {Test.map((current) => {
          return (
            <div
              className="flex justify-center gap-2 w-auto items-center text-center p-1 bg-blue-200 px-4 m-1 border border-blue-600 rounded-lg"
              key={current}
            >
              <p className="h-full  flex items-center justify-center capitalize">
                {current}
              </p>
              <MdCancel
                onClick={(e) => {
                  removeTest(current);
                }}
                className=" cursor-pointer text-xl  h-full text-black-200"
              />
            </div>
          );
        })}
      </div>
      <select
        onChange={(e) => {
          handleTestChange(e.target.value);
        }}
        required
        className="outline-none   m-1 p-1.5 w-full focus:border-blue-200 border-0 border-b-2  text-md block border-gray-200"
        name="Test"
        id="test"
      >
        <option
          value="
                Select"
        >
          Select Test
        </option>
        <option value="Complete Blood Count (CBC)">
          Complete Blood Count (CBC)
        </option>
        <option value="Blood Sugar (Fasting / Postprandial)">
          Blood Sugar (Fasting / Postprandial)
        </option>
        <option value="Liver Function Test (LFT)">
          Liver Function Test (LFT)
        </option>
        <option value="Kidney Function Test (KFT)">
          Kidney Function Test (KFT)
        </option>
        <option value="Lipid Profile">Lipid Profile</option>
        <option value="Thyroid Function Test (T3, T4, TSH)">
          Thyroid Function Test (T3, T4, TSH)
        </option>
        <option value="Urine Analysis">Urine Analysis</option>
        <option value="Stool Test">Stool Test</option>
        <option value="Biopsy">Biopsy</option>
        <option value="X-Ray">X-Ray</option>
        <option value="Ultrasound">Ultrasound</option>
        <option value="CT Scan">CT Scan</option>
        <option value="MRI Scan">MRI Scan</option>
        <option value="Mammography">Mammography</option>
        <option value="PET Scan">PET Scan</option>
        <option value="ECG">ECG / EKG (Electrocardiogram)</option>
        <option value="Echocardiogram">Echocardiogram</option>
        <option value="TMT">TMT (Stress Test)</option>
        <option value="Holter Monitor">Holter Monitor</option>
        <option value="Endoscopy">Endoscopy</option>
        <option value="Colonoscopy">Colonoscopy</option>
        <option value="EEG">EEG (Electroencephalogram)</option>
        <option value="EMG">EMG (Electromyography)</option>
        <option value="Eye Test">Eye Test (Vision, Retina Scan)</option>
        <option value="Hearing Test">Hearing Test (Audiometry)</option>
        <option value="DNA Test">DNA Test</option>
        <option value="Chromosomal Analysis">Chromosomal Analysis</option>
        <option value="Cancer Marker Tests">Cancer Marker Tests</option>
      </select>
      <h2 className="text-2xl font-semibold m-3">Medication:</h2>
    </form>
  );
};

export default DiagnosisFrom;
