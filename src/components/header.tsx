"use client"

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const Header = () => {
  const { theme, setTheme } = useTheme();

  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/",
      label: "Store",
    },
    {
      href: "/",
      label: "Blog",
    },
  ];

  return (
    <div className="flex flex-row w-full justify-between items-center px-6">
      <div>
        <h1>Recks Gex</h1>
      </div>
      <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 md:block">
        {routes.map((route, i) => (
          <Button key={i} asChild variant="ghost">
            <Link
              href={route.href}
              className="text-sm font-medium transition-colors"
            >
              {route.label}
            </Link>
          </Button>
        ))}
      </nav>
      <div>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Toggle Theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </div>
    </div>
  )
}

export default Header