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
    setDisease(Disease.filter((val) => val != current))
  };

  return (
    <form action="submit">
      <h2 className="text-2xl font-semibold m-3">Diagnosis:</h2>
      <div className="flex">
        {Disease.map((current) => {
          return (
            <div
              className="flex justify-center gap-2 items-center text-center p-1 bg-blue-200 px-4 m-1 border border-blue-600 rounded-lg"
              key={current}
            >
              <p className="h-full  flex items-center justify-center capitalize">{current}</p>
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
          Select
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
    </form>
  );
};

export default DiagnosisFrom;
