"use client"
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'
import { headerContainer, headerInner, headerSidebarBtn, headerWrapper } from '@/app/style/Header/header.styles'
import NavMenuBtn from './NavMenuBtn'
import MobileNav from './MobileNav'
import { GoSidebarCollapse } from "react-icons/go";
import SideBar from '../Sidebar/SideBar'
import { useSideBarStore } from '@/store/useSideBarStore'


export default function Header() {
  const {toggleSidebar} = useSideBarStore();
  return (
    <header className={headerWrapper}>
      <div className={headerContainer}>
        <div
          className={headerInner}>
          <div className='flex items-center gap-5'>
            <button onClick={toggleSidebar}>
              <GoSidebarCollapse size={25} className={headerSidebarBtn} />
            </button>
            <Link href="/">
              <Image src={'/logo/logo.png'} width={40} height={40} alt='Logo' />
            </Link>
          </div>

          <Nav />
          <NavMenuBtn />
        </div>
      </div>
      <MobileNav/>
      <SideBar />
    </header>
  )
}


