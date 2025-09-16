import DoctorDashboard from "./pages/DoctorDashboard"
import PatientDetails from "./pages/PatientDetails"
function App() {
  return (
    <div className="bg-gray-100 h-[100vh] w-[100vw] flex items-center content-center">
      {/* <DoctorDashboard/> */}
      <PatientDetails/>
    </div>
  )
}
export default App
