import { useState, useEffect } from "react";
import FilterSection from "../components/FilterSection";
import GalerieSection from "../components/GalerieSection";
import SloganSection from "../components/SloganSection";
import { useLocation } from "react-router-dom";

export default function About() {
    const location = useLocation();
    const [carList, setCarList] = useState<any[]>([]);
    const [carFilter, setCarFilter] = useState<any[]>([]);
    const [date, setDate] = useState<string>(""); 
    useEffect(() => {
      const initialCarList = location.state?.carList || [];
      const initialCarFilter = location.state?.carFilter || [];
      const initialDateList = location.state?.selectedDate || [];
      setCarList(initialCarList);
      setCarFilter(initialCarFilter);
      setDate(initialDateList);
    }, [location.state]);
  return (
    <div>
     <SloganSection />
    <FilterSection carFilter={carFilter} carList={carList} setCarList={setCarList} setDate={setDate} date={date} />
    <GalerieSection carList={carList} />
    </div>
  );
}
