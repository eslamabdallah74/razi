import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="font-medium text-razi-blue hover:text-razi-red transition-colors duration-300"
    >
      {children}
    </a>
  );
};