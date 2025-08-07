'use client';
import React from 'react';

export default function DoctorCard({ doctor }) {
  return (
    <div className="border-t py-6 flex flex-col sm:flex-row gap-4">
      {/* Doctor Image */}
      <div className="w-full sm:w-32 flex justify-center items-start">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>

      {/* Doctor Info */}
      <div className="flex-1">
        {/* Name */}
        <h2 className="text-blue-700 font-semibold text-lg">{doctor.name}</h2>

        {/* Specialty */}
        <p className="text-sm text-gray-700">{doctor.specialty}</p>

        {/* Experience */}
        <p className="text-sm text-gray-600">{doctor.experience} years experience overall</p>

        {/* Location */}
        <p className="text-sm text-gray-700">{doctor.location}</p>

        {/* Clinic */}
        {doctor.clinic && <p className="text-sm text-gray-600">{doctor.clinic}</p>}

        {/* Fees */}
        <p className="text-sm text-gray-800 font-medium mt-1">₹{doctor.fees} Consultation fee</p>

        {/* Rating + Reviews */}
        <div className="mt-2 flex items-center gap-2">
          <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded font-semibold">
            👍 {doctor.rating}%
          </span>
          <span className="text-sm text-blue-700 underline cursor-pointer">
            {doctor.reviews} Patient Stories
          </span>
        </div>

        {/* Availability */}
        {doctor.availableToday && (
          <p className="text-green-600 text-sm mt-1 font-semibold flex items-center gap-1">
            📅 Available Today
          </p>
        )}

        {/* Buttons */}
        <div className="mt-3 flex flex-col sm:flex-row gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm">
            Book Clinic Visit
          </button>
          <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 text-sm">
            Contact Clinic
          </button>
        </div>
      </div>
    </div>
  );
}
