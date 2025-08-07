'use client';
import { ChevronDown, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-22 border-gray-100 w-full z-50 relative">
      <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-between">
        {/* Left: Hamburger + Logo + Left Nav Links */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Hamburger on LEFT now */}
          <button
            className="block md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={20} />
          </button>

          {/* Logo */}
          <div className="text-lg sm:text-xl font-bold text-blue-600">practo</div>

          {/* Left Nav Links (always visible) */}
          <nav className="flex flex-wrap gap-1 sm:gap-1 text-xs sm:text-sm text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600 border-b-2 border-blue-600">Find Doctors</a>
            <a href="#" className="hover:text-blue-600">Video Consult</a>
            <a href="#" className="hover:text-blue-600">Surgeries</a>
          </nav>
        </div>

        {/* Right: Login + Right-side links */}
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          {/* Desktop right-side links */}
          <div className="hidden md:flex gap-3 text-gray-700">
            <div className="hidden md:flex gap-4 text-gray-700 text-sm">
  {/* For Corporates with NEW badge */}
  <div className="flex items-center gap-1 cursor-pointer whitespace-nowrap">
    <span className="text-white bg-blue-900 text-[9px] px-1 py-0.5 rounded-full">NEW</span>
    <span>For Corporates</span>
    <ChevronDown size={14} />
  </div>

  {/* For Providers */}
<div className="flex items-center gap-1 cursor-pointer whitespace-nowrap">
  <span>For Providers</span>
  <ChevronDown size={14} />
</div>

{/* Security & help */}
<div className="flex items-center gap-1 cursor-pointer whitespace-nowrap">
  <span>Security & help</span>
  <ChevronDown size={14} />
</div>

</div>
          </div>
<div className="flex justify-between items-start w-full">

  <button className="border px-3 py-1 rounded hover:bg-gray-100 text-xs whitespace-nowrap self-start">
    Login/Signup
  </button>
</div>



        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-3 text-sm text-gray-700 font-medium border-t">
          <div className="flex flex-col gap-2 pt-3">
            <div className="flex items-center gap-1">
              <span className="text-white bg-blue-900 text-[9px] px-1 py-0.5 rounded-full">NEW</span>
              <span>For Corporates</span>
              <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1">
              <span>For Providers</span>
              <ChevronDown size={14} />
            </div>
            <div className="flex items-center gap-1">
              <span>Security & help</span>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
