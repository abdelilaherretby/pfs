import { FaGasPump ,FaCar , FaUser } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { GrCheckmark } from "react-icons/gr";
import {useState,useEffect} from 'react'
export default function Card(props: any) {
    const [car, setCar] = useState<any>()
    useEffect(() => {
        if(props.car){
            setCar(props.car)
        }
    }, [props.car])
    return car && (
        <div  onClick={() => props.onSelect && props.onSelect(car)}
             className='border-4 border-white hover:border-gray-500 rounded-xl p-1'>
            <div className='relative bg-gradient-to-b from-[#1a1a1a] via-gray-500 to-[#1a1a1a] border shadow-md gap-2 flex flex-col justify-between 
            rounded-xl cursor-pointer text-[#fff] p-5'>
                <h2 className="font-bold text-[20px]">{car?.name}</h2>
                <p className="absolute top-0 right-2 flex items-center gap-1 my-3 p-2 rounded-md font-bold text-[10px] bg-[#ff5f00] "><GiSteeringWheel className="text-[20px]"/>
                 <span>{car?.typeBoite}</span>
                </p>
                
                <div className="flex items-center gap-2">
                    <p className="bg-gray-300 text-gray-700 p-2 rounded-md flex
                     items-center gap-1 text-[12px]">
                        <FaUser className="text-[20px]"/>
                        <span>{car?.places}</span>
                     </p>
                     <p className="bg-gray-300 text-gray-700 p-2 rounded-md flex
                     items-center gap-1 text-[12px]">
                        <FaGasPump className="text-[20px]"/>
                        <span>{car?.type}</span>
                     </p>
                     <p className="bg-gray-300 text-gray-700 p-2 rounded-md flex
                     items-center gap-1 text-[12px]">
                        <FaCar className="text-[20px]"/>
                        <span>{car?.marque}</span>
                     </p>
                </div>
                <img src={car?.image?.url} alt={car?.name} height={150} width={260} className="w-full h-full object-cover self-center" />
                <p className="text-[12px] flex items-center gap-1">
                           <GrCheckmark className="text-[12px] text-green-500" /> incl. 500 km</p>

                <p><span className="font-bold text-[26px]">{car?.price} €</span>
                <span className="text-[12px]">/ par jour</span>
                 </p>
                
            </div>
         </div>
         
       
    )
}