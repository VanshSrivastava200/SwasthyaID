import {AiFillDashboard,AiFillProfile,AiOutlineSearch,AiOutlineQrcode, AiFillSetting} from 'react-icons/ai'
import PatientPreviousDiagnosis from '../components/PatientPreviousDiagnosis'
const PatientDetails=()=>{
    return(
        <div className="m-auto flex shadow-2xl flex-row h-[100vh] w-[100vw] overflow-hidden">
            <div className="h-[100%] w-[30%] bg-gray-200 p-7 pt-10 flex flex-col items-center">

                <img className="rounded-full w-30 aspect-square object-cover m-3" src="https://media.istockphoto.com/id/185117418/photo/medical-patient-side-profile-facing-right.jpg?s=612x612&w=0&k=20&c=yR1t-G_VVY-wy3kSwmvfn4orsEQtQe2S0XiFue8kpw0=" alt="profile-picture" />

                <p className="text-lg font-semibold mb-6 text-gray-800 ">Kallu Singh</p>

                <div className='flex flex-col items-start' >
                    <div className="my-3 w-full text-gray-500 font-semibold flex justify-start items-center space-x-2 text-xl">

                        <AiFillDashboard/>

                        <p className='text-sm' >Dashboard</p>

                    </div>
                    <div className="my-3 w-full text-gray-500 font-semibold flex justify-start items-center space-x-2 text-xl">

                        <AiFillProfile/>

                        <p className='text-sm' >Patients</p>
                        
                    </div>
                    <div className="my-3 w-full text-gray-500 font-semibold flex justify-start items-center space-x-2 text-xl">

                        <AiFillSetting/>

                        <p className='text-sm' >Settings</p>
                        
                    </div>
                </div>

            </div>

            <div className="h-[100%] w-[70%] bg-white">
                <div className='p-6 border-b-1 border-gray-200 flex w-full h-[13%] justify-between'>
                    <div className='w-[50%] flex justify-start space-x-2 px-3 items-center bg-gray-200 h-9 rounded-full px-2'>

                        <AiOutlineSearch/>

                        <input className=' width-[100%] outline-none text-xs ' type="text" placeholder='Search Diagnosis' />
                    </div>
                    <button className='w-auto cursor-pointer bg-blue-400 h-9 rounded-full border-[1px] border-blue-600 shadow-md text-center text-white text-sm font-semibold px-4'>
                    Add Diagnosis
                    </button>
                </div>
                <div className='h-[87%] w-full p-6'>
                    <h1 className='text-2xl font-semibold mb-2'>Previous Diagnoses</h1>
                    
                    <div className=' flex items-center   flex-wrap gap-4 overflow-y-scroll h-[90%] w-[100%]'>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                        <PatientPreviousDiagnosis/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientDetails