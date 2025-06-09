import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ children, onClick, className = '' }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 border-2 border-secondary text-[#F0FBF7] text-lg font-medium transition duration-300 hover:bg-secondary hover:text-[#0D0A4B] ${className}`}
  >
    {children}
  </button>
);

export default Button;
