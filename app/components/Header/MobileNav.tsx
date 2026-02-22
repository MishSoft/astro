"use client"
import { mobilenavContainer, mobilenavLi, mobilenavUl, mobilenavWrapper } from '@/app/style/Header/mobilenav.style'
import { useNavStore } from '@/store/useNavStore'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'


const links = [
  {
    name: "Horoscopes",
    href: "/horoscopes"
  },
  {
    name: "Astro Shop",
    href: "/astro-shop"
  },
  {
    name: "All About Astrology",
    href: "/all-about-astrology"
  }
]

export default function MobileNav() {
  const pathname = usePathname()
  const {isOpen, isClose} = useNavStore()
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOpen = (e: MouseEvent) => {
      if(navRef.current && !navRef.current.contains(e.target as Node)) {
        isClose()
      }
    }

    document.addEventListener('mousedown', handleOpen)

    return () => {
      document.removeEventListener('mousedown', handleOpen)
    }
  }, [isOpen])


  return (
    <div ref={navRef} className={mobilenavWrapper(isOpen)}>
      <nav className={mobilenavContainer}>
        <ul className={mobilenavUl}>
          {links.map((link) => (
            <li key={link.name} className={mobilenavLi(pathname === link.href)}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
