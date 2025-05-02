import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="font-medium text-razi-blue hover:text-razi-red transition-colors duration-300"
    >
      {children}
    </a>
  );
};