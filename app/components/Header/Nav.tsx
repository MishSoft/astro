"use client"
import { navLi, navUl, navWrapper } from '@/app/style/Header/nav.styles'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav className={navWrapper}>
      <ul className={navUl}>
        {
          links.map((link) => {
            return (
              <li className={navLi(pathname === link.href)}
               key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

