import React from 'react';

function Button({ children, onClick, type = 'button', disabled = false, className = '', variant = 'primary' }) {
  const baseStyles = 'focus-ring w-full rounded-xl font-bold py-4 text-lg shadow-md hover:shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed';
  const variantStyles = {
    primary: 'bg-sunshine text-ink',
    secondary: 'bg-white text-primary border border-primary/20 hover:bg-light-gray',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
