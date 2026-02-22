"use client"
import { useNavStore } from "@/store/useNavStore";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";


export default function NavMenuBtn() {
  const {toggle, isOpen} = useNavStore()
  return (
    <button onClick={toggle} className="text-gray-800 cursor-pointer md:hidden">
      { isOpen ? <IoClose size={25}/> : <CiMenuFries size={25}/>}
    </button>
  )
}

