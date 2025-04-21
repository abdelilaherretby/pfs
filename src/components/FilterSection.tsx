import { useState, useEffect } from "react";
import { FaGasPump, FaCarSide, FaChevronDown } from "react-icons/fa";
import { MdElectricCar } from "react-icons/md"; // Exemple d'icônes
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { TbManualGearboxFilled } from "react-icons/tb";
import { TbSquareLetterAFilled } from "react-icons/tb";

import { SiAudi } from "react-icons/si";
import { SiMercedes } from "react-icons/si";
import { SiPeugeot } from "react-icons/si";
import { SiRenault } from "react-icons/si";
import { SiToyota } from "react-icons/si";
import { SiVolkswagen } from "react-icons/si";
import { SiBmw } from "react-icons/si";
import { SiFiat } from "react-icons/si";
import { SiFord } from "react-icons/si";
import { SiJeep } from "react-icons/si";
import cn from "classnames"; // Assurez-vous d'importer la fonction classnames

import {
  FaCarAlt,
  FaCar,
  FaShuttleVan
} from "react-icons/fa";
import { TbCarSuvFilled } from "react-icons/tb";


import { TbSortDescendingNumbers, TbSortAscendingNumbers } from "react-icons/tb";



export default function FilterSection({ carFilter, carList, setCarList, setLieuRetrait, lieuRetrait, setLieuRetour, lieuRetour, firstSearchDone, setFirstSearchDone , dateDepart , dateRetour , reservationList }: any) {
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]); // devient un tableau
  const [priceOrder, setPriceOrder] = useState<number | null>(null);
  const [brandList, setBrandList] = useState<any>([]);
  const [selectedFuel, setSelectedFuel] = useState<string[]>([]); // Définir comme tableau
  const [fuelList, setFuelList] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFuel, setIsOpenFuel] = useState(false);
  const [isOpenCar, setIsOpenCar] = useState(false);
  const [selectedTypeBoite, setSelectedTypeBoite] = useState<string[]>([]);
  const [typeBoiteList, setTypeBoiteList] = useState<any>([]);
  const [selectedTypeCar, setSelectedTypeCar] = useState<string[]>([]);
  const [typeCarList, setTypeCarList] = useState<any>([]);
  const [selectedPlaces, setSelectedPlaces] = useState<number | null>(null);
  // Ajout de l'état pour ouvrir/fermer le menu carburant

  const BrandSet = new Set();
  const FuelSet = new Set();
  const TypeBoiteSet = new Set();
  const TypeCarSet = new Set();




 

  useEffect(() => {
    console.log("carFilter reçu:", carFilter.length);
  }, []);

  /*useEffect(() => {
    console.log("datededepart",dateDepart)
    console.log("datederetour",dateRetour)
    console.log("Liste des réservations dans filter section:");
    reservationList.forEach((reservation, index) => {
      console.log(`Réservation ${index + 1}:`);
      console.log("  ID :", reservation.id);
      console.log("  Date de départ :", reservation.dateDeDepart);
      console.log("  Date de retour :", reservation.dateDeRetour);
      console.log("  Véhicule réservé :");
      const car = reservation.carList;
      console.log(`    Voiture: ID=${car.id}, name=${car.name} , Marque=${car.marque}`);
    });      
  }, [reservationList]);*/

  

  useEffect(() => {
    if (carFilter) {
      handlerFilter();
    }
  }, [carFilter]);

  useEffect(() => {
    if (lieuRetrait) {
      filterLieu(lieuRetrait, lieuRetour);
  
    if (dateDepart && dateRetour) {
        filterDate(dateDepart, dateRetour);
      }
    }
  }, [lieuRetrait, lieuRetour, dateDepart, dateRetour]);
  

  const handlerFilter = () => {
    carFilter.forEach((element: any) => {
      BrandSet.add(element.marque);
      FuelSet.add(element.fuelType);
      TypeBoiteSet.add(element.typeBoite);
      TypeCarSet.add(element.carType);
    });
  
    setBrandList(Array.from(BrandSet));
    setFuelList(Array.from(FuelSet));
    setTypeBoiteList(Array.from(TypeBoiteSet));
    setTypeCarList(Array.from(TypeCarSet));
  };
  

  
  const filterPrice = (order: any) => {
    setFirstSearchDone(false);
    const parsedOrder = order === "null" ? null : Number(order);
    setPriceOrder(parsedOrder);
    applyFilters(selectedBrand.length === 0 ? null : selectedBrand, parsedOrder, lieuRetrait, selectedFuel, selectedTypeBoite, selectedTypeCar, selectedPlaces,lieuRetour,dateDepart,dateRetour);
  };

  const filterLieu = (lieuRetrait: string,lieuRetour :string) => {
    setFirstSearchDone(true);
    applyFilters(selectedBrand, priceOrder, lieuRetrait === "Toutes" ? null : lieuRetrait, selectedFuel, selectedTypeBoite, selectedTypeCar, selectedPlaces,lieuRetour,dateDepart,dateRetour);
  };


  const filterCardList = (brand: string) => {
    setFirstSearchDone(false);
    let updatedBrands = [...selectedBrand];
  
    if (updatedBrands.includes(brand)) {
      updatedBrands = updatedBrands.filter((b) => b !== brand);
    } else {
      updatedBrands.push(brand);
    }
  
    setSelectedBrand(updatedBrands);
    applyFilters(
      updatedBrands.length === 0 ? null : updatedBrands,
      priceOrder,
      lieuRetrait,
      selectedFuel,
      selectedTypeBoite,
      selectedTypeCar,
      selectedPlaces,
      lieuRetour,
      dateDepart,
      dateRetour
    );
  };

  const filterFuel = (fuel: string) => {
    setFirstSearchDone(false);
    let updatedFuels = [...selectedFuel];
  
    if (updatedFuels.includes(fuel)) {
      updatedFuels = updatedFuels.filter((f) => f !== fuel);
    } else {
      updatedFuels.push(fuel);
    }
  
    setSelectedFuel(updatedFuels);
    applyFilters(
      selectedBrand,
      priceOrder,
      lieuRetrait,
      updatedFuels.length === 0 ? null : updatedFuels,
      selectedTypeBoite,
      selectedTypeCar,
      selectedPlaces,
      lieuRetour,
      dateDepart,
      dateRetour
    );
  };
  

  const filterTypeBoite = (typeBoite: string) => {
    setFirstSearchDone(false);
    let updatedTypeBoite = [...selectedTypeBoite];
  
    if (updatedTypeBoite.includes(typeBoite)) {
      updatedTypeBoite = updatedTypeBoite.filter((t) => t !== typeBoite);
    } else {
      updatedTypeBoite.push(typeBoite);
    }
  
    setSelectedTypeBoite(updatedTypeBoite);
    applyFilters(
      selectedBrand,
      priceOrder,
      lieuRetrait,
      selectedFuel,
      updatedTypeBoite.length === 0 ? null : updatedTypeBoite,
      selectedTypeCar,
      selectedPlaces,
      lieuRetour,
      dateDepart,
      dateRetour
    );
  };

  const filterTypeCar = (typeCar: string) => {
    setFirstSearchDone(false);
    let updatedTypeCar = [...selectedTypeCar];
  
    if (updatedTypeCar.includes(typeCar)) {
      updatedTypeCar = updatedTypeCar.filter((t) => t !== typeCar);
    } else {
      updatedTypeCar.push(typeCar);
    }
  
    setSelectedTypeCar(updatedTypeCar);
    applyFilters(
      selectedBrand,
      priceOrder,
      lieuRetrait,
      selectedFuel,
      selectedTypeBoite,
      updatedTypeCar.length === 0 ? null : updatedTypeCar,
      selectedPlaces,
      lieuRetour,
      dateDepart,
      dateRetour
    );
  };
  
  const filterPlaces = (places: number | null) => {
    setFirstSearchDone(false);
  const parsedPlaces = isNaN(places) ? null : places;
  setSelectedPlaces(parsedPlaces);

  applyFilters(
    selectedBrand,
    priceOrder,
    lieuRetrait,
    selectedFuel,
    selectedTypeBoite,
    selectedTypeCar,
    parsedPlaces,
    lieuRetour,
    dateDepart,
    dateRetour
  );
};

const filterDate = (dateDepart: string, dateRetour: string) => {
  setFirstSearchDone(true);
  applyFilters(
    selectedBrand,
    priceOrder,
    lieuRetrait,
    selectedFuel,
    selectedTypeBoite,
    selectedTypeCar,
    selectedPlaces,
    lieuRetour,
    dateDepart,
    dateRetour
   
  );
};


  const applyFilters = (brand: string[] | null, order: any | null, lieuRetrait: string | null, fuel: string[] | null, typeBoite: string[] | null, typeCar: string[] | null, places: number | null, lieuRetour: string | null, dateDepart: string | null, dateRetour: string | null ) => {
    let filtered = [...carFilter];
    if (lieuRetrait && lieuRetour !== "null") {
      filtered = filtered.filter((item: any) => item.lieuDeRetrait === lieuRetrait && item.lieuDeRetour === lieuRetour);
    }else if (lieuRetour=="null"){
      filtered = filtered.filter((item: any) => item.lieuDeRetrait === lieuRetrait && item.lieuDeRetour === lieuRetrait);
    }

    if (brand && brand.length > 0) {
      filtered = filtered.filter((item: any) => brand.includes(item.marque));
    }
    if (fuel && fuel.length > 0) {
      filtered = filtered.filter((item: any) => fuel.includes(item.fuelType));
    }
    if (typeBoite && typeBoite.length > 0) {
      filtered = filtered.filter((item: any) => typeBoite.includes(item.typeBoite));
    }
    if (typeCar && typeCar.length > 0) {
      filtered = filtered.filter((item: any) => typeCar.includes(item.carType));
    }
    if (places) {
      filtered = filtered.filter((item: any) => item.places >= places);
    }
    if (order) {
      filtered = filtered.sort((a, b) =>
        order == -1 ? a.prixParJour - b.prixParJour : b.prixParJour - a.prixParJour
      );
    }
    


    // 1. Vérification des disponibilités
    if (dateDepart && dateRetour) {
      filtered = filtered.filter((car: any) => {
        const isReserved = reservationList.some((reservation: any) => {
          return reservation.carList.id === car.id && (
            // Cas où les dates se chevauchent
            (new Date(dateDepart) >= new Date(reservation.dateDeDepart) && new Date(dateDepart) <= new Date(reservation.dateDeRetour)) ||
            (new Date(dateRetour) >= new Date(reservation.dateDeDepart) && new Date(dateRetour) <= new Date(reservation.dateDeRetour)) ||
            (new Date(dateDepart) <= new Date(reservation.dateDeDepart) && new Date(dateRetour) >= new Date(reservation.dateDeRetour))
          );
        });
        return !isReserved; // garder les voitures non réservées sur cet intervalle
      });
    }
    


    setCarList(filtered);
  };



  const iconMap: Record<string, JSX.Element> = {

    // icones pour le carburant
    essence: <FaGasPump size={24} />,
    diesiel: <BsFillFuelPumpDieselFill size={24} />,
    electrique: <MdElectricCar size={24} />,
    hybride: <FaCarSide size={24} />,

    // icones pour les types de boite
    automatique: <TbSquareLetterAFilled size={24} />,
    manuel: <TbManualGearboxFilled size={24} />,
   
    // icones pour les marques
    audi: <SiAudi size={58} />,
    mercedes: <SiMercedes size={58} />,
    peugeot: <SiPeugeot size={58} />,
    renault: <SiRenault size={58} />,
    toyota: <SiToyota size={58} />,
    vw: <SiVolkswagen size={58} />,
    bmw: <SiBmw size={58} />,
    fiat: <SiFiat size={58} />,
    ford: <SiFord size={58} />,
    jeep: <SiJeep size={58} />,

    // icones pour les types de voiture
    berline: <FaCarSide size={24} />,
    suv: <TbCarSuvFilled size={24} />,
    coupe: <FaCarAlt size={24} />,
    cabriolet : <FaCar size={24} />,
    minivan: <FaShuttleVan size={24} />,
    break: <FaShuttleVan size={24} />,

    
  };

  return (
    <div className="bg-slate-900">
      <div className="flex flex-row justify-center gap-16 p-4">

        {/* Menu déroulant pour sélectionner l ordre du  prix */}
        <select onChange={(e) => filterPrice(e.target.value)} className="select select-bordered w-1/6 h-14">
            <option disabled selected>
            Trier par prix
            </option >
            <option value="null">par défaut</option>
            <option value={-1}>Par prix croissant</option>
            <option value={1}>Par prix décroissant</option>
        </select>

        {/* Menu déroulant pour sélectionner le nombre de places */}
        <select onChange={(e) => filterPlaces(Number(e.target.value))} className="select select-bordered w-1/6 h-14">
          <option disabled selected>
            Nombre de places
          </option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5+</option>
          <option value="6">6+</option>
          <option value="7">7+</option>
       </select>

       
      {/* Menu déroulant pour sélectionner le type de boite */}
        <div className="w-1/6 h-14">
        <div className="relative w-full h-full">
            <button
            className="w-full h-full flex justify-between px-4 py-2 text-sm font-medium text-black bg-white rounded-lg shadow hover:opacity-90 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            >
            <span>
                Type de boite
                {selectedTypeBoite.length > 0 && (
                <span className="ml-1">({selectedTypeBoite.length})</span>
                )}
            </span>
            <FaChevronDown className="h-4 w-4 opacity-60" />
            </button>

            {isOpen && (
            <div className="absolute mt-2 w-[240px] rounded-xl bg-white shadow-2xl z-50 py-2 space-y-2">
                {typeBoiteList
                .filter((item: string) => item !== "Toutes")
                .map((item: string, index: number) => {
                    const isSelected = selectedTypeBoite.includes(item);
                    return (
                    <label
                        key={index}
                        className={cn(
                        "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg cursor-pointer transition-all",
                        isSelected
                            ? "bg-zinc-500 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-black"
                        )}
                        onClick={() => filterTypeBoite(item)}
                    >
                        <div className="text-xl">{iconMap[item]}</div>
                        <span>{item}</span>
                    </label>
                    );
                })}
            </div>
            )}
        </div>
        </div>

         {/* Menu déroulant pour sélectionner le type de voiture */}
        <div className="w-1/6 h-14">
        <div className="relative w-full h-full">
            <button
            className="w-full h-full flex justify-between px-4 py-2 text-sm font-medium text-black bg-white rounded-lg shadow hover:opacity-90 focus:outline-none"
            onClick={() => setIsOpenCar(!isOpenCar)}
            >
            <span>
                Type de véhicule
                {selectedTypeCar.length > 0 && (
                <span className="ml-1">({selectedTypeCar.length})</span>
                )}
            </span>
            <FaChevronDown className="h-4 w-4 opacity-60" />
            </button>

            {isOpenCar && (
            <div className="absolute mt-2 w-[240px] rounded-xl bg-white shadow-2xl z-50 py-2 space-y-2">
                {typeCarList
                .filter((item: string) => item !== "Toutes")
                .map((item: string, index: number) => {
                    const isSelected = selectedTypeCar.includes(item);
                    return (
                    <label
                        key={index}
                        className={cn(
                        "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg cursor-pointer transition-all",
                        isSelected
                            ? "bg-zinc-500 text-white"
                            : "bg-gray-100 hover:bg-gray-200 text-black"
                        )}
                        onClick={() => filterTypeCar(item)}
                    >
                        <div className="text-xl">{iconMap[item]}</div>
                        <span>{item}</span>
                    </label>
                    );
                })}
            </div>
            )}
        </div>
        </div>


        {/* Menu déroulant pour sélectionner le carburant */}
    <div className="w-1/6 h-14">
    <div className="relative w-full h-full">
        <button
        className="w-full h-full flex justify-between px-4 py-2 text-sm font-medium text-black bg-white rounded-lg shadow hover:opacity-90 focus:outline-none"
        onClick={() => setIsOpenFuel(!isOpenFuel)}
        >
        <span>
            Type de carburant
            {selectedFuel.length > 0 && (
            <span className="ml-1">({selectedFuel.length})</span>
            )}
        </span>
        <FaChevronDown className="h-4 w-4 opacity-60" />
        </button>

        {isOpenFuel && (
        <div className="absolute mt-2 w-[240px] rounded-xl bg-white shadow-2xl z-50 py-2 space-y-2">
            {fuelList
            .filter((item: string) => item !== "Toutes")
            .map((item: string, index: number) => {
                const isSelected = selectedFuel.includes(item);
                return (
                <label
                    key={index}
                    className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg cursor-pointer transition-all",
                    isSelected
                        ? "bg-zinc-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-black"
                    )}
                    onClick={() => filterFuel(item)}
                >
                    <div className="text-xl">{iconMap[item]}</div>
                    <span>{item}</span>
                </label>
                );
            })}
        </div>
        )}
    </div>
    </div>
    </div>




    {/* Liste des marques */}
<div className="flex justify-center gap-4 p-4 rounded-lg">
  {brandList
    .filter((item: string) => item !== "Toutes")
    .map((item: string, index: number) => {
      const isSelected = selectedBrand.includes(item);
      const icon = iconMap[item.toLowerCase()]; // on récupère l’icône correspondante

      return (
        <div key={index} className="flex flex-col items-center">
          <label className="cursor-pointer flex flex-col items-center gap-2">
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => filterCardList(item)}
              className="hidden"
            />
            <div
              className={`w-16 h-16 flex items-center justify-center bg-white rounded shadow-md transition ${
                isSelected ? "opacity-45" : ""
              }`}
            >
              {icon}
            </div>
          </label>
        </div>
      );
    })}
</div>


    </div>
  );
}