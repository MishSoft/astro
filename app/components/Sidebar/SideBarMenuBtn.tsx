import React from 'react'
import { GoSidebarExpand } from "react-icons/go";
import { useSideBarStore } from '@/store/useSideBarStore';

export default function SideBarMenuBtn() {
  const { isClose } = useSideBarStore();
  return (
    <button onClick={isClose} className='text-gray-700 m-4 cursor-pointer'>
      <GoSidebarExpand size={25} />
    </button>
  )
}

