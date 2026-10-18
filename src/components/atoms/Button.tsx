import React from 'react';

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonVariant = 'primary' | 'outline';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'px-3 py-1.5 text-sm',
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-3 text-lg',
  xl: 'px-10 py-4 text-xl',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-secondary border-secondary text-white hover:bg-[#4A85A8] hover:border-[#4A85A8]',
  outline: 'border-secondary text-[#F0FBF7] hover:bg-secondary',
};

// Réutilisable sur un <Link> ou un <a> pour qu'ils aient l'apparence d'un bouton
export const buttonClasses = (variant: ButtonVariant = 'outline', size: ButtonSize = 'md') =>
  `inline-flex items-center justify-center gap-2 ${sizeClasses[size]} border-2 font-medium transition duration-300 ${variantClasses[variant]}`;

const Button = ({
  children,
  onClick,
  className = '',
  size = 'md',
  variant = 'outline',
}: ButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className={`${buttonClasses(variant, size)} ${className}`}
  >
    {children}
  </button>
);

export default Button;
