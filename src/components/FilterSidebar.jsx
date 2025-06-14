// src/components/FilterSidebar.jsx
import React from 'react';

const FilterSidebar = ({ filters, onChange }) => {
  return (
    <div className="w-full md:w-1/4 p-4 bg-gray-100 rounded">
      {/* City filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">City</label>
        <input
          type="text"
          value={filters.city}
          onChange={(e) => onChange({ ...filters, city: e.target.value })}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Price Range */}
      <div className="mb-4 flex gap-2">
        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => onChange({ ...filters, minPrice: e.target.value })}
          className="w-1/2 p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => onChange({ ...filters, maxPrice: e.target.value })}
          className="w-1/2 p-2 border rounded"
        />
      </div>

      {/* Bedrooms */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Min Bedrooms</label>
        <select
          value={filters.bedrooms}
          onChange={(e) => onChange({ ...filters, bedrooms: e.target.value })}
          className="w-full p-2 border rounded"
        >
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
