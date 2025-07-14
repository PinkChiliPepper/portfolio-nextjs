"use client"
import MenuHeader from "@/components/Menu/MenuHeader";
import { FunctionComponent } from "react";

const Menu: FunctionComponent = () => {
  return (
    <header>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '4rem', justifyContent: 'center', padding: '2rem'}}>
        <MenuHeader href="/">Home</MenuHeader>
        <MenuHeader href="/education">Education</MenuHeader>
        <MenuHeader href="/work-experience">Work experience</MenuHeader>
        <MenuHeader href="/contact">Contact</MenuHeader>
      </div>
    </header>
  );
}

export default Menu
