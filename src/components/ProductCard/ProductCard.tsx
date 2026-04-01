import React from 'react';
import { Button } from '../Button/Button';

export interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  badge?: string;
  onAddToCart?: () => void;
}

export const ProductCard = ({
  title,
  description,
  price,
  imageUrl,
  badge,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md overflow-hidden hover:shadow-lg transition-shadow max-w-[320px]">
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
        {badge && (
          <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            {badge}
          </span>
        )}
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex flex-col gap-3 flex-grow items-start">
        <div className="flex justify-between items-start w-full gap-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1">{title}</h3>
          <span className="text-lg font-semibold text-blue-600 dark:text-blue-400 mt-0.5">${price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 flex-grow mb-1">{description}</p>
        <Button primary label="Add to Cart" size="medium" />
      </div>
    </div>
  );
};
