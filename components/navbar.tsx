'use client'
import Link from 'next/link'

const links = [
  { href: '/home', label: 'Home' },
  { href: '/profile', label: 'Profile' },
  { href: 'room', label: 'Rooms' },
  { href: '/about', label: 'About' },
]

const Navbar = () => {
  return (
    <div className="flex flex-row gap-16 text-xl px-3 py-2">
      {links.map((link) => (
        <Link href={link.href} key={link.label}>
          {link.label}
        </Link>
      ))}
    </div>
  )
}

export default Navbar
