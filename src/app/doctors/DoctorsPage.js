'use client';
export const dynamic = 'force-dynamic';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import FilterPanel from '../components/FilterPanel';
import DoctorCard from '../components/DoctorCard';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function DoctorsPage() {
  const searchParams = useSearchParams();
  const location = searchParams.get('location') || 'Bangalore';
  const specialty = searchParams.get('specialty') || 'Doctors';

  const [doctors, setDoctors] = useState([]);
  const [sortBy, setSortBy] = useState('relevance');

  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await fetch(`/api/doctors?location=${location}&specialty=${specialty}`);
      const data = await res.json();
      setDoctors(data);
    };

    fetchDoctors();
  }, [location, specialty]);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-800 flex flex-col">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-4 flex-grow">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">
            {doctors.length} {specialty}s available in {location}
          </h2>
          <p className="text-sm text-gray-600">
            Book appointments with minimum wait-time & verified doctor details
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="w-full md:w-auto">
            <h3 className="text-md font-semibold text-gray-700 mb-2">Filter</h3>
            <FilterPanel />
          </div>

          <div className="flex-1 min-w-[250px]">
            {doctors.length === 0 ? (
              <p className="text-gray-500">No doctors found.</p>
            ) : (
              <div className="space-y-6">
                {doctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
