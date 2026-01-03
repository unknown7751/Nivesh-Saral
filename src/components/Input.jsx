import React from 'react';

function Input({ id, label, type = 'text', value, onChange, placeholder, required = false, className = '' }) {
  return (
    <div className="relative w-full">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`focus-ring w-full px-5 py-3 rounded-xl border border-primary/20 bg-white text-ink text-lg placeholder:text-primary/60 shadow-sm transition-colors focus:border-primaryAccent ${className}`}
      />
      {label && (
        <span className="absolute left-4 -top-2.5 px-2 bg-white text-xs text-primaryAccent font-semibold pointer-events-none">
          {label}
        </span>
      )}
    </div>
  );
}

export default Input;
