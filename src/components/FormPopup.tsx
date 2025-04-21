import { FaCar, FaTruck, FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Form({ handleCloseForm, carFilter, carList, setCarList, reservationList }: any) {
  const [lieuRetraitList, setLieuRetraitList] = useState<any>([]);
  const [lieuRetourList, setLieuRetourList] = useState<any>([]);
  const [selectedLieuRetrait, setSelectedLieuRetrait] = useState<string>("");
  const [showSecondSelect, setShowSecondSelect] = useState<boolean>(false);
  const [selectedLieuRetour, setSelectedLieuRetour] = useState<string>("");

  const [selectedDateDepart, setSelectedDateDepart] = useState<string>("");
  const [selectedDateRetour, setSelectedDateRetour] = useState<string>("");

  const [errors, setErrors] = useState({
    lieuRetrait: "",
    lieuRetour: "",
    dateDepart: "",
    dateRetour: ""
  });

  const lieuRetraitSet = new Set();
  const lieuRetourSet = new Set();

  useEffect(() => {
    if (carFilter) {
      handlerFilter();
    }
  }, [carFilter]);

  const handlerFilter = () => {
    carFilter.forEach((element: any) => {
      lieuRetraitSet.add(element.lieuDeRetrait);
      lieuRetourSet.add(element.lieuDeRetour);
    });
    setLieuRetraitList(["Lieu de retrait et retour", ...Array.from(lieuRetraitSet)]);
    setLieuRetourList(["Lieu de retour différent", ...Array.from(lieuRetourSet)]);
  };

  const navigate = useNavigate();

  const handleNavigation = () => {
    const newErrors: any = {
      lieuRetrait: "",
      lieuRetour: "",
      dateDepart: "",
      dateRetour: ""
    };

    let hasError = false;

    if (!selectedLieuRetrait || selectedLieuRetrait === "Lieu de retrait et retour") {
      newErrors.lieuRetrait = showSecondSelect
        ? "Veuillez sélectionner un lieu de retrait."
        : "Veuillez sélectionner un lieu de retrait et de retour.";
      hasError = true;
    }

    if (showSecondSelect && (selectedLieuRetour === "null" || selectedLieuRetour === "Lieu de retour différent")) {
      newErrors.lieuRetour = "Veuillez sélectionner un lieu de retour.";
      hasError = true;
    }

    if (!selectedDateDepart) {
      newErrors.dateDepart = "Veuillez choisir une date de départ.";
      hasError = true;
    }

    if (!selectedDateRetour) {
      newErrors.dateRetour = "Veuillez choisir une date de retour.";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      navigate('/about', {
        state: {
          carList,
          carFilter,
          selectedLieuRetrait,
          selectedLieuRetour,
          selectedDateDepart,
          selectedDateRetour,
          reservationList
        }
      });
      return  true ;
    } else {
      return false ;
    }
  };

  useEffect(() => {
    if (lieuRetraitList.length > 0) {
      setSelectedLieuRetrait(lieuRetraitList[0]);
      setSelectedLieuRetour("null");
    }
  }, [lieuRetraitList]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleCloseForm();
  };

  return (
    <div onClick={handleOverlayClick}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-start justify-center z-50">
      <div className="bg-white mt-10 p-6 rounded-xl shadow-lg w-full max-w-md lg:max-w-2xl mx-auto relative">

        {/* Form content */}
        <div className="bg-white rounded-lg p-3">
          {/* Top Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-4 justify-center">
            <button className="text-white rounded-full flex items-center gap-2 p-2 px-3 bg-[#1a1a1a]">
              <FaCar />
              <p>Véhicules</p>
            </button>
            <button className="text-[#1a1a1a] rounded-full flex items-center gap-2 p-2 px-3 hover:bg-gray-200">
              <FaTruck />
              <p>Utilitaires</p>
            </button>
          </div>

          {/* Lieu de retrait / retour */}
          <div className="flex flex-col gap-4 mb-4">
            <div className="w-full p-3 rounded-lg relative">
              <select
                value={selectedLieuRetrait}
                onChange={(e) => setSelectedLieuRetrait(e.target.value)}
                className="h-[50px] select select-bordered w-full text-sm text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white"
              >
                {lieuRetraitList.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
              <div className="h-4 mt-1">
                {errors.lieuRetrait && (
                  <p className="text-red-500 text-xs mt-1">{errors.lieuRetrait}</p>
                )}
              </div>
            </div>

            {!showSecondSelect && (
            <div className="flex justify-center my-3">
              <div
                className="flex items-center gap-2 text-gray-500 cursor-pointer hover:text-gray-700"
                onClick={() => setShowSecondSelect(true)}
              >
                <FaPlus />
                <p className="text-[12px]">Lieu de retour différent</p>
              </div>
            </div>
          )}


            {showSecondSelect && (
              <div className="w-full p-3 rounded-lg relative">
                <select
                  value={selectedLieuRetour}
                  onChange={(e) => setSelectedLieuRetour(e.target.value)}
                  className="h-[50px] select select-bordered w-full text-sm text-gray-700 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white"
                >
                  {lieuRetourList.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </select>
                <div className="h-4 mt-1">
                  {errors.lieuRetour && (
                    <p className="text-red-500 text-xs mt-1">{errors.lieuRetour}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Dates */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-[11px] font-bold">Date de départ</p>
              <input
                type="date"
                value={selectedDateDepart}
                onChange={(e) => setSelectedDateDepart(e.target.value)}
                className="border border-gray-300 p-3 rounded-lg outline-none cursor-pointer w-full"
              />
              <div className="h-4 mt-1">
                {errors.dateDepart && (
                  <p className="text-red-500 text-xs mt-1">{errors.dateDepart}</p>
                )}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[11px] font-bold">Date de retour</p>
              <input
                type="date"
                value={selectedDateRetour}
                onChange={(e) => setSelectedDateRetour(e.target.value)}
                className="border border-gray-300 p-3 rounded-lg outline-none cursor-pointer w-full"
              />
              <div className="h-4 mt-1">
                {errors.dateRetour && (
                  <p className="text-red-500 text-xs mt-1">{errors.dateRetour}</p>
                )}
              </div>
            </div>
          </div>

          {/* Submit button */}
          <div className="mt-6">
            <button
               onClick={(e) => {
                if (handleNavigation()) {
                  handleOverlayClick(e);
                }
              }}
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white p-4 px-2 rounded-md font-bold"
            >
              Voir les véhicules
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


