import {AiFillDashboard,AiFillProfile,AiOutlineSearch} from 'react-icons/ai'
const DriverDashboard=()=>{
    return(
        <div className="m-auto flex shadow-2xl flex-row h-[90vh] w-[80vw] overflow-hidden rounded-xl">
            <div className="h-[100%] w-[25%] bg-gray-200 p-7 pt-10 flex flex-col items-center">

                <img className="rounded-full w-30 aspect-square object-cover m-3" src="https://image.lexica.art/full_jpg/ae706b4b-2621-4dd0-8239-19c37c37a1f5" alt="profile-picture" />

                <p className="text-lg font-semibold mb-6 text-gray-800 ">Dr. Vansh S</p>

                <div className='flex flex-col items-start' >
                    <div className="my-3 w-full text-gray-500 font-semibold flex justify-start items-center space-x-2 text-xl">

                        <AiFillDashboard/>

                        <p className='text-sm' >Dashboard</p>

                    </div>
                    <div className="my-3 w-full text-gray-500 font-semibold flex justify-start items-center space-x-2 text-xl">

                        <AiFillProfile/>

                        <p className='text-sm' >Patients</p>
                        
                    </div>
                </div>

            </div>

            <div className="h-[100%] w-[75%] bg-white">
                <div className='p-6 border-b-1 border-gray-200 flex w-full h-[13%]'>
                    <div className='w-[50%] flex justify-start space-x-2 px-3 items-center bg-gray-200 h-9 rounded-full px-2'>

                        <AiOutlineSearch/>

                        <input className=' outline-none text-sm ' type="text" placeholder='Search Patients' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DriverDashboard