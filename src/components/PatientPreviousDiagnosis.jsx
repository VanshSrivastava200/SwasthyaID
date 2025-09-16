const PatientPreviousDiagnosis=()=>{
    
    const color={"0":"bg-red-300","1":"bg-blue-300","2":"bg-green-300","3":"bg-purple-300"}
    return(
        <div className="cursor-pointer relative shadow-md w-[45%] h-auto  flex rounded-md overflow-hidden">
            <div className={`absolute top-0 left-0 w-[4px] h-full ${color[Math.floor((Math.random()*4))]} `}></div>
            {/* <p>{Math.floor((Math.random()*4))}</p> */}
            <div className="p-4 w-[98%]" >
                <h2 className="font-semibold text-lg ">
                    Hpyertension
                </h2>
                
                <div className="flex justify-between">
                    <p className="text-md">Dr Condom</p>
                    <p className=" text-end font-semibold text-gray-400 text-xs" >20th Feb,2025</p>
                </div>
            </div>
        </div>
    )
}

export default PatientPreviousDiagnosis