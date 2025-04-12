import { FaCar , FaTruck , FaSearch , FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Form({carFilter, carList, setCarList}:any) {

    const [dateList , setdateList] = useState<any>([])


    const  dateSet = new Set();

    useEffect(() => {
        if(carFilter){
            handlerFilter()
        }
    }, [carFilter])

    const handlerFilter = () => {
        carFilter.forEach((element :any) =>{
            dateSet.add(element.lieuDeDepart)
        } )
        setdateList(Array.from(dateSet))
    }

   
    const filterDate = (date: string) => {
       
        applyFilters( date);
      };
  
  
      const applyFilters = ( date: string | null) => {
        let filtered = [...carFilter];
        if (date) {
          filtered = filtered.filter((item: any) => item.lieuDeDepart === date);
        }
      
        setCarList(filtered);
      };


    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/about', { state: { carList , carFilter, selectedDate } }); 
      };

   const [selectedDate, setSelectedDate] = useState<string>(""); 
    return (
        <div className="bg-white rounded-lg p-4 rounded-lg mt-4">

          <div className="flex items-center gap-4 mb-4">
             <button className="text-white rounded-full flex items-cneter gap-2 p-2 px-3 bg-[#1a1a1a]">
                <FaCar />
                <p>Vehicules</p>
             </button>

             <button className="text-[#1a1a1a] rounded-full flex items-cneter gap-2 p-2 px-3 hover:bg-gray-200 ">
                <FaTruck />
                <p>Utilitaires</p>
             </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
            <div>
                <p className="mb-2 text-[11px]font-bold">Retrait et retour</p>
                <div className="flex items-center gap-8">
                    <div className="w-full border border-gray-300 p-3 rounded-lg relative">
                    <FaSearch className="absolute left-4 top-4" />
                        <select value={selectedDate}
                             onChange={(e) => { const value = e.target.value;
                                                 setSelectedDate(value);
                                                filterDate(value);}} className="select select-bordered w-full max-w-xs">
                                {dateList.map((item: string, index: number) => (
                                    <option key={index}>{item}</option>
                                ))}
                        </select>
                    </div>
                    <div className="hidden md:flex items-center-gap-3" text-gray-500>
                        <FaPlus />
                        <p className="text-[12px]">Lieu de retour different</p>
                    </div>

                </div>
            </div>
            <div>
                <div className="flex items-center ">
                    <div className="hidden md:flex items-center">
                        <div className="flex p-3 flex-col ">
                            <p className="mb-2 text-[11px] fond-bold">Date de depart</p>
                            <input type="date" className="border border-gray-300 p-3 rounded-lg outline-none cursor-pointer" />
                        </div>
                        <div className="flex p-3 flex-col ">
                            <p className="mb-2 text-[11px] fond-bold">Date de retour</p>
                            <input type="date" className="border border-gray-300 p-3 rounded-lg outline-none cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <button onClick={handleNavigation} className="block w-full bg-[#ff5f00] text-white p-4 px-2 rounded-md font-bold mt-4">Voir les vehicules</button>
                    </div>
                </div>
                

            </div>
          </div>

        </div>
    )
}