import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Nav from './Nav'
import { headerContainer, headerInner, headerWrapper } from '@/app/style/Header/header.styles'
import NavMenuBtn from './NavMenuBtn'
import MobileNav from './MobileNav'

export default function Header() {
  return (
    <header className={headerWrapper}>
      <div className={headerContainer}>
        <div
          className={headerInner}>
          <Link href="/">
            <Image src={'/logo/logo.png'} width={40} height={40} alt='Logo' />
          </Link>
          <Nav />
          <NavMenuBtn />
        </div>
      </div>
      <MobileNav/>
    </header>
  )
}


