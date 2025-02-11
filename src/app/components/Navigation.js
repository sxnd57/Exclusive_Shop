"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navigation() {
  const pathName = usePathname()
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "About" },
    { href: "/signup", label: "Sign Up" },
  ];
  return (
    <div>
      <ul className="flex text-[16px] gap-12">
        {navItems.map(item => (
          <li key={item.href} className={`cursor-pointer ${pathName === item.href ? 'border-b-2' : ''}`}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
