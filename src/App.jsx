import DoctorDashboard from "./pages/DoctorDashboard"
import PatientDetails from "./pages/PatientDetails"
function App() {
  return (
    <div className=" h-[100vh] w-[100vw] flex flex-col items-center content-center">
      {/* <DoctorDashboard/> */}
      <PatientDetails/>
    </div>
  )
}
export default App
