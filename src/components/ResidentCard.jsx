import { useEffect, useState } from "react";
import axios from "axios";

const ResidentCard = ({residentUrl}) => {

    const [residentInfo, setResidentInfo] = useState(null)

    const residentStatus = {
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-slate-500"
    }

    useEffect(() => {
    axios
    .get(residentUrl)
    .then(({data}) => setResidentInfo(data))
    .catch((err) => console.log(err))

}, [])


  

  return (
    <article className=" my-5 border-solid border-[#8EFF8B] border-2">
        <header className="">
            <img className="border-solid border-[#8EFF8B] border-b-2" src={residentInfo?.image} alt="" />
            <div className="flex items-center justify-center gap-2 p-1 relative top-[-75px] bg-[#020A02CC] w-[8rem] left-[30%] right-[30%] border-solid border-[#8EFF8B] border-2">
                <div className={`h-[10px] aspect-square rounded-full ${residentStatus[residentInfo?.status]} `}></div>
                <div>{residentInfo?.status}</div>
            </div>
        </header>
        <section className="" >
            <h3 className=" ml-6 text-[32px] relative bottom-6"  >{residentInfo?.name}</h3>
            <hr className=" relative bottom-6 mx-1 border-[#084851] "/>
            <ul className="flex flex-row relative ml-6 bottom-5 gap-3">
                <div className="flex flex-col gap-1">
                <li className="text-[#938686]">Species </li>
                <li className="text-[#938686]">Origin</li>
                <li className="text-[#938686]">Times appear</li>
                </div>
                <div className="flex flex-col gap-1" >
                <span className="text-[#FBFBFB]" >{residentInfo?.species}</span>
                <span className="text-[#FBFBFB]">{residentInfo?.origin.name}</span>
                <span className="text-[#FBFBFB]">{residentInfo?.episode.length} time</span>

                </div >
                
            </ul>
        </section>
    </article>
  )
}
export default ResidentCard