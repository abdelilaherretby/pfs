import logo from "../../public/images/sixt-logo.png"
import { IoMdMenu } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { FaCarAlt } from "react-icons/fa";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

const menu=[
  { name:"Gerer mes réservations", icon: FaCarAlt },
  { name:"FR | £", icon: TbWorld },
]

export default function Nav() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <IoMdMenu className="text-2xl text-white cursor-pointer hover:scale-125 transistion-all"/>
        <img src={logo} alt="logo" width={70} /> 
      </div>
      <ul className="flex items-center gap-4">
        {menu.map((item,index)=>(
         <li key={index} className="hidden md:flex items-center gap-2 font-bold text-white">
           <item.icon/>
           <a href="#">{item.name}</a>  
         </li>
        ))}
        <li className="flex items-center">
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-white font-bold">Se connecter</button>
            </SignInButton>
          </SignedOut>
        </li>
      </ul>
    </div>
  )
}
