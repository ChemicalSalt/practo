'use client';
import React from 'react';

export default function FilterPanel() {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-4 bg-indigo-900 text-white px-3 py-3 sm:px-4 sm:py-4 rounded mb-6">
      <select className="bg-white text-black text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded w-[48%] sm:w-auto">
        <option>Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>

      <select className="bg-white text-black text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded w-[48%] sm:w-auto">
        <option>Patient Stories</option>
        <option>100+</option>
        <option>500+</option>
      </select>

      <select className="bg-white text-black text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded w-[48%] sm:w-auto">
        <option>Experience</option>
        <option>0-5 years</option>
        <option>5-10 years</option>
        <option>10+ years</option>
      </select>

      <select className="bg-white text-black text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded w-[48%] sm:w-auto">
        <option>All Filters</option>
      </select>

      {/* Sort By Dropdown (Right-aligned on large screens) */}
      <div className="w-full sm:w-auto sm:ml-auto flex items-center justify-between sm:justify-end gap-1 mt-2 sm:mt-0">
        <span className="text-xs sm:text-sm hidden sm:inline text-white">Sort by:</span>
        <select className="bg-white text-black text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded w-full sm:w-auto">
          <option>Relevance</option>
          <option>Experience</option>
          <option>Fees</option>
        </select>
      </div>
    </div>
  );
}
