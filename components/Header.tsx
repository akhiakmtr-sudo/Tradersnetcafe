import React from 'react';
import { NavItemProps } from '../types';

const NavLink = ({ label, href }: NavItemProps) => (
  <a
    href={href}
    className="text-[11px] md:text-[12px] font-medium tracking-[0.25em] text-white/70 hover:text-white transition-colors duration-200 uppercase"
  >
    {label}
  </a>
);

export const Header: React.FC = () => {
  const navItems: NavItemProps[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Members', href: '#members' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className="absolute top-0 right-0 z-50 w-full flex justify-end items-center px-8 md:px-16 py-10">
      <nav className="flex gap-8 md:gap-12">
        {navItems.map((item) => (
          <NavLink key={item.label} label={item.label} href={item.href} />
        ))}
      </nav>
    </header>
  );
};