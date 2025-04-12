import { useState, useEffect } from "react";

export default function FilterSection({ carFilter, carList, setCarList, setDate, date }: any) {

    const [selectedBrand, setSelectedBrand] = useState<string[]>([]); // devient un tableau
    const [priceOrder, setPriceOrder] = useState<number | null>(null);
    const [brandList , setBrandList] = useState<any>([]);
    const BrandSet = new Set();

    useEffect(() => {
        if (carFilter) {
            handlerFilter()
        }
    }, [carFilter]);

    const handlerFilter = () => {
        carFilter.forEach((element: any) => {
            BrandSet.add(element.marque)
        });
        setBrandList(["Toutes", ...Array.from(BrandSet)]);
    };

    const filterCardList = (brand: string) => {
        if (brand === "Toutes") {
            setSelectedBrand([]);
            applyFilters(null, priceOrder, date);
        } else {
            let updatedBrands = [...selectedBrand];
            if (updatedBrands.includes(brand)) {
                updatedBrands = updatedBrands.filter(b => b !== brand);
            } else {
                updatedBrands.push(brand);
            }
            setSelectedBrand(updatedBrands);
            applyFilters(updatedBrands.length === 0 ? null : updatedBrands, priceOrder, date);
        }
    };

    const filterPrice = (order: any) => {
        const parsedOrder = order === "null" ? null : Number(order);
        setPriceOrder(parsedOrder);
        applyFilters(selectedBrand.length === 0 ? null : selectedBrand, parsedOrder, date);
    };

    const applyFilters = (brand: string[] | null, order: any | null, date: string | null) => {
        let filtered = [...carFilter];

        if (date) {
            filtered = filtered.filter((item: any) => item.lieuDeDepart === date);
        }

        if (brand && brand.length > 0) {
            filtered = filtered.filter((item: any) => brand.includes(item.marque));
        }

        if (order) {
            filtered = filtered.sort((a, b) =>
                order == -1 ? a.price - b.price : b.price - a.price
            );
        }

        setCarList(filtered);
    };

    return (
        <div className="bg-[#ff5f00]">
            <div className="flex flex-row justify-between  gap-4 p-4">
              <select onChange={(e) => filterPrice(e.target.value)} className="select select-bordered w-full max-w-xs ">
                  <option disabled selected>Trier par prix</option>
                  <option value="null">par défaut</option>
                  <option value={-1}>Par prix croissant</option>
                  <option value={1}>Par prix décroissant</option>
              </select>
              <select onChange={(e) => filterPrice(e.target.value)} className="select select-bordered w-full max-w-xs">
                  <option disabled selected>Trier par prix</option>
                  <option value="null">par défaut</option>
                  <option value={-1}>Par prix croissant</option>
                  <option value={1}>Par prix décroissant</option>
              </select>
              <select onChange={(e) => filterPrice(e.target.value)} className="select select-bordered w-full max-w-xs">
                  <option disabled selected>Trier par prix</option>
                  <option value="null">par défaut</option>
                  <option value={-1}>Par prix croissant</option>
                  <option value={1}>Par prix décroissant</option>
              </select>
              <select onChange={(e) => filterPrice(e.target.value)} className="select select-bordered w-full max-w-xs">
                  <option disabled selected>Trier par prix</option>
                  <option value="null">par défaut</option>
                  <option value={-1}>Par prix croissant</option>
                  <option value={1}>Par prix décroissant</option>
              </select>
              <select onChange={(e) => filterPrice(e.target.value)} className="select select-bordered w-full max-w-xs">
                  <option disabled selected>Trier par prix</option>
                  <option value="null">par défaut</option>
                  <option value={-1}>Par prix croissant</option>
                  <option value={1}>Par prix décroissant</option>
              </select>
            </div>
            <div className="flex justify-center gap-4  p-4 rounded-lg">
  {brandList.map((item: string, index: number) => {
    const isSelected = item === "Toutes" ? selectedBrand.length === 0 : selectedBrand.includes(item);
    const imagePath = item === "Toutes"
      ? "/logo/all.jpg"
      : `/logo/${item.toLowerCase()}.png`; // maintenant les images sont dans /public/logo

    return (
      <div key={index} className="flex flex-col items-center">
        <label className="cursor-pointer flex flex-col items-center gap-2">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => filterCardList(item)}
            className="hidden"
          />
          <img
            src={imagePath}
            alt={item}
             className={`w-16 h-16 object-contain bg-white p-2 rounded shadow-md transition ${
              isSelected ? "opacity-45" : ""
            }`}
          />
        </label>
      </div>
    );
  })}
</div>

        </div>
        
    );
}
