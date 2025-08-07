'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MapPin, Search } from 'lucide-react';

export default function HeroSection() {
  const router = useRouter();
  const [specialty, setSpecialty] = useState('');
  const location = 'Bangalore'; 

  const handleSearch = () => {
    if (specialty.trim() !== '') {
      router.push(`/doctors?location=${location}&specialty=${encodeURIComponent(specialty)}`);
    }
  };

  return (
    <section className="bg-[#3e4eb8] text-white py-12 px-4 w-full">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-center">Your home for health</h1>
        <h2 className="text-lg sm:text-xl mb-6 text-center">Find and Book</h2>

        <div className="bg-white text-black flex flex-col sm:flex-row rounded shadow overflow-hidden w-full max-w-3xl mx-auto">
          <div className="flex items-center px-3 py-2 w-full sm:w-1/3 border-b sm:border-b-0 sm:border-r border-gray-300 cursor-pointer">
            <MapPin size={18} className="text-gray-500 mr-2" />
            <span className="text-sm text-gray-700">{location}</span>
          </div>

          <div className="flex items-center px-3 py-2 w-full">
            <Search size={18} className="text-gray-500 mr-2" />
            <input
              type="text"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search doctors, clinics, hospitals, etc."
              className="w-full outline-none text-sm bg-transparent placeholder-gray-500 text-black"
            />
          </div>
        </div>

        <div className="mt-4 text-sm text-white flex justify-center flex-wrap gap-2">
          <span className="opacity-70">Popular searches:</span>
          {['Dermatologist', 'Pediatrician', 'Gynecologist/Obstetrician', 'Others'].map((item) => (
            <button
              key={item}
              className="hover:underline"
              onClick={() => router.push(`/doctors?location=${location}&specialty=${encodeURIComponent(item)}`)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
