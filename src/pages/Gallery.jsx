import React from 'react';

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index} 
            className="aspect-square bg-gray-200 rounded-lg shadow-sm"
          ></div>
        ))}
      </div>
    </div>
  );
}
