'use client'

import styles from '../styles/navbar.module.scss';
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";




function RadioNavbar() {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Archives",
    "Se retrouver",
    "À propos"
  ];


  return (
    <div className="absolute h-full w-full">
      <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
        <NavbarContent className="lg:hidden">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent className="hidden lg:flex gap-4">
          <NavbarItem>
            <Link href="#">
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
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  )
}

export default RadioNavbar
