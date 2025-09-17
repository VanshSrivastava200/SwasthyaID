import {AiFillDashboard,AiFillProfile,AiOutlineSearch,AiOutlineQrcode, AiFillSetting} from 'react-icons/ai'
import {TbLayoutDashboardFilled} from 'react-icons/tb'
import PatientCard from '../components/PatientCard'
const DoctorDashboard=()=>{
    return(
        <div className="m-auto flex shadow-2xl flex-row h-[100vh] w-[100vw] overflow-hidden">
            <div className="h-[100%] w-[25%] bg-gray-100 p-7 pt-10 flex flex-col items-center">

                <img className="rounded-full w-30 aspect-square object-cover m-3" src="https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png" alt="profile-picture" />

                <p className="text-lg font-semibold mb-6 text-gray-800 ">Dr. Condom</p>

                <div className='flex flex-col cursor-pointer items-start' >
                    <div className="my-3 w-full text-gray-500 font-semibold flex justify-start items-center space-x-2 text-xl">

                        <TbLayoutDashboardFilled/>

                        <p className='text-sm' >Dashboard</p>

                    </div>
                    <div className="my-3 w-full cursor-pointer text-gray-500 font-semibold flex justify-start items-center space-x-2 text-xl">

                        <AiFillProfile/>

                        <p className='text-sm' >Patients</p>
                        
                    </div>
                    <div className="my-3 w-full cursor-pointer text-gray-500 font-semibold flex justify-start items-center space-x-2 text-xl">

                        <AiFillSetting/>

                        <p className='text-sm' >Settings</p>
                        
                    </div>
                </div>

            </div>

            <div className="h-[100%] w-[75%] bg-white">
                <div className='p-6 border-b-1 border-gray-200 flex w-full h-[13%] justify-between'>
                    <div className='w-[50%] overflow-hidden flex justify-start space-x-2 px-3 items-center bg-gray-200 h-9 rounded-full '>

                        <AiOutlineSearch className='w-[20px] h-full '/>

                        <input className=' h-full w-[calc(100%-20px)] outline-none text-xs ' type="text" placeholder='Search Patient' />
                    </div>
                    <div className=' flex cursor-pointer h-9 w-9 bg-gray-200 rounded-full items-center justify-center'>
                        <AiOutlineQrcode/>
                    </div>
                </div>
                <div className='h-[87%] w-full p-6'>
                    <h1 className='text-2xl font-semibold mb-2'>Dashboard</h1>
                    <h3 className='text-gray-500 mb-0.5'>Recent Diagnoses</h3>
                    <div className=' flex items-center   flex-wrap gap-4 overflow-y-scroll h-[90%] w-[100%]'>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                        <PatientCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorDashboard