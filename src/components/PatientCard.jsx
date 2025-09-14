const PatientCard=()=>{


    return(
        <div className="shadow-md flex rounded-md overflow-hidden">
            <div className="w-[2%] bg-blue-500 h-[100%]"></div>
            <div className="p-4 w-[98%]" >
                <h2 className="font-semibold text-lg ">
                    Hpyertension
                </h2>
                <p className=" font-semibold text-gray-400 text-xs" >20th Feb,2025</p>
                <div className="flex">
                    <p className="text-md">John Smith</p><p className="text-gray-500">,37</p>
                </div>
            </div>
        </div>
    )
}

export default PatientCard