import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>}
        <input
          ref={ref}
          className={`px-3 py-2 border rounded-md shadow-sm bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-colors ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-gray-600'
          } ${className || ''}`}
          {...props}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
