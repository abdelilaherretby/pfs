import React from "react";

const DetailPrixPopup = ({ onClose,differenceEnJours,selectedValue,montantHT,tva, supp,frais,total}: { onClose: () => void ,differenceEnJours: any ,selectedValue : any , montantHT : number,tva : number, supp : number ,frais : number , total: number }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl p-6 w-85 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-600 text-xl"
        >
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4 text-center ">DÉTAILS DU PRIX</h2>

        <div className="mb-4">
          <p className="font-semibold">Frais de location (Montant hors taxes) : </p>
          <p className="text-sm text-gray-600">{differenceEnJours} Jour de location x {selectedValue} €</p>
          <p className="text-right font-medium">{montantHT} €</p>
        </div>

        <div className="mb-4 border-t pt-4">
            <h3 className="font-semibold text-gray-800 mb-2">Taxes et frais :</h3>
            
            <div className="flex justify-between text-sm text-gray-600 mb-1 ml-5">
                <span>TVA :</span>
                <span>{tva} €</span>
            </div>
            
            <div className="flex justify-between text-sm text-gray-600 mb-1 ml-5">
                <span>Supplément local :</span>
                <span>{supp} €</span>
            </div>

            <div className="flex justify-end text-base font-medium text-gray-800 mt-2">
                <span>{frais} €</span>
            </div>
        </div>


        <div className="border-t pt-2 flex justify-between font-semibold text-lg">
          <span>Total (TTC) :</span>
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailPrixPopup;
