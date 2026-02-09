import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-dark';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-200 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-cyan-500 text-white hover:bg-cyan-400 shadow-[0_4px_14px_0_rgba(0,182,237,0.39)] hover:shadow-[0_6px_20px_rgba(0,182,237,0.23)] hover:-translate-y-0.5 border border-transparent",
    secondary: "bg-brand-100 text-brand-900 hover:bg-brand-200 border border-brand-200",
    // Outline for dark backgrounds
    outline: "border border-brand-600 text-brand-300 hover:border-cyan-400 hover:text-white bg-transparent", 
    // Outline for light backgrounds
    "outline-dark": "border border-brand-300 text-brand-700 hover:border-brand-900 hover:text-brand-900 bg-transparent"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
