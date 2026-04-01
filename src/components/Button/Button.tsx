import React from 'react';

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
}) => {
  const mode = primary ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black';
  const sizeClasses = {
    small: 'text-sm px-3 py-1',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  }[size];

  return (
    <button
      type="button"
      className={['rounded-full font-bold', sizeClasses, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
