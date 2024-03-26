import { useState } from "react";
import {BiChevronLeft} from "react-icons/bi";
import UserProfile from "./components/UserProfile";
import SidebarData from "./components/SidebarData";

export default function Sidebar () { 

  const [toggle, setToggle] = useState(false)

  return (
    <div className={`${toggle ? "w-[5.7rem]" : "w-[17rem]"} sidebar-container`}>
      <UserProfile toggle={toggle}/>
      <SidebarData toggle={toggle}/>
      
      <div className="absolute top-[7rem] flex justify-center items=center -left-5
        w-10 h-10 rounded-full cursor-pointer
      "onClick={() => {
        setToggle(!toggle);
      }} >
        <BiChevronLeft className={` ${toggle ? "rotate-180" : ""} 
          text-3xl transition-all duration-300 `}/>
      </div>
    </div>
  )
}
