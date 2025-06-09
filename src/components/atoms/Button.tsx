import React from 'react';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: ButtonSize;
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'px-2 py-1 text-sm',
  sm: 'px-4 py-1.5 text-base',
  md: 'px-6 py-2 text-lg',
  lg: 'px-8 py-3 text-xl',
  xl: 'px-10 py-4 text-2xl',
};

const Button = ({
  children,
  onClick,
  className = '',
  size = 'md',
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={`${sizeClasses[size]} border-2 border-secondary text-[#F0FBF7] font-medium transition duration-300 hover:bg-secondary hover:text-[#0D0A4B] ${className}`}
  >
    {children}
  </button>
);

export default Button;
