'use client'

import styles from '../styles/radioNavbar.module.scss';
import React from "react";
import Player from './player/Player'
import Logo from './Logo'
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import Link from 'next/link'
import Socials from './Socials';

function RadioNavbar(props: any) {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false)

  return (
    <div className="relative w-full">
      <Navbar onMenuOpenChange={setIsMenuOpen} onScrollPositionChange={(position: any) => position >= 64 ? setIsSticky(true) : setIsSticky(false)}>
        <NavbarContent className="lg:hidden max-w-2.5">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent className="hidden lg:flex gap-4">

        {props.menuItems.map((item: any, index: any) => (
            <NavbarItem key={`${item}-${index}`}>
              <Link href={item.url}>
                {item.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <Logo size={40} />
        </NavbarContent>

        <NavbarMenu>
          {props.menuItems.map((item: any, index: any) => (
            <NavbarMenuItem className={styles.navMenuItem} key={`${item}-${index}`}>
              <Link
                className={styles.navLink}
                href={item.url}
              >
                {item.title}
              </Link>
            </NavbarMenuItem>
          ))}

            <NavbarMenuItem>
              <div className={styles.radioPitch}>
                <p>Radio Paradis est une radio musicale de quartier née en 2022 dans la rue de Paradis. 
                  Nous visons à construire une plateforme de dialogue entre la scène émergente musicale et les acteurs du 10ème arrondissement.</p>
              <Socials color={"black"}/>
              </div>
            </NavbarMenuItem>

        </NavbarMenu>
      </Navbar>

      <Player isSticky={isSticky} />
    </div>
  )
}

export default RadioNavbar
