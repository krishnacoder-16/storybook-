import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  disabled = false,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black';
  const sizeClasses = {
    small: 'text-sm px-3 py-1',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  }[size];
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 active:scale-95';

  return (
    <button
      type="button"
      className={['rounded-full font-bold transition-all', sizeClasses, mode, disabledClasses].join(' ')}
      style={{ backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};
