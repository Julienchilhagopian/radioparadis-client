'use client'

import styles from '../styles/navbar.module.scss';
import React from "react";
import MobilePlayer from '../components/player/MobilePlayer'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";


function RadioNavbar() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false)


  const menuItems = [
    {
      title: "Archives",
      url: "../archives"
    },
    {
      title: "Se retrouver",
      url: "#"
    },
    {
      title: "À propos",
      url: "#"
    }
  ];

  return (
    <div className="absolute w-full">
      <Navbar onMenuOpenChange={setIsMenuOpen} onScrollPositionChange={(position) => position >= 64 ? setIsSticky(true) : setIsSticky(false)}>
        <NavbarContent className="lg:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent className="hidden lg:flex gap-4">
          <NavbarItem>
            <Link href="../archives">
              Archives
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" aria-current="page">
              Se retrouver
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">
              À propos
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <p>logo</p>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className="w-full"
                href={item.url}
                size="lg"
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      <MobilePlayer isSticky={isSticky} />
    </div>
  )
}

export default RadioNavbar
