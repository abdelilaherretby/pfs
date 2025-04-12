import { AiOutlineClose } from "react-icons/ai";

export default function CarDetails({ car, onBack }: { car: any, onBack: () => void }) {
    return (
        <div className="bg-[#e1e3e4] p-2 rounded-xl ">
            <div className=" text-black  rounded-xl shadow-2xl w-full   ">
                <div  className=" flex flex-col md:flex-row gap-0">
                    {/* Colonne image */}
                    <div className=" bg-gradient-to-b from-[#1a1a1a] via-gray-500 to-[#1a1a1a] rounded-tl-xl rounded-bl-xl  shadow-md md:w-1/2 w-full">
                        <img
                            src={car.image?.url}
                            alt={car.name}
                            className="w-full h-auto rounded-md"
                        />
                    </div>

                    {/* Colonne infos */}
                    <div className="relative  bg-white md:w-1/2 w-full rounded-tr-xl rounded-br-xl  p-4">
                        <button
                                onClick={onBack}
                                className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
                            >
                                <AiOutlineClose />
                        </button>
                        <h2 className="text-xl font-bold mb-2">{car.name}</h2>
                        <p><strong>Marque :</strong> {car.marque}</p>
                        <p><strong>Type :</strong> {car.type}</p>
                        <p><strong>Places :</strong> {car.places}</p>
                        <p><strong>Boîte :</strong> {car.typeBoite}</p>
                        <p><strong>Prix :</strong> {car.price} €/jour</p>

                      
                    </div>
                </div>
            </div>
        </div>
    );
}
