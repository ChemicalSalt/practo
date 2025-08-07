'use client';

import {
  Stethoscope,
  ShoppingCart,
  FileText,
  FlaskConical,
  BookOpen,
  BriefcaseMedical
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2b3485] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
        <div className="flex flex-col items-center">
          <Stethoscope size={20} />
          <span className="mt-1">Consult with a doctor</span>
        </div>
        <div className="flex flex-col items-center">
          <ShoppingCart size={20} />
          <span className="mt-1">Order Medicines</span>
        </div>
        <div className="flex flex-col items-center">
          <FileText size={20} />
          <span className="mt-1">View medical records</span>
        </div>
        <div className="flex flex-col items-center relative">
          <FlaskConical size={20} />
          <span className="mt-1">Book test</span>
          <span className="absolute -top-2 right-4 bg-green-500 text-white text-[10px] px-1 py-0.5 rounded-full">New</span>
        </div>
        <div className="flex flex-col items-center">
          <BookOpen size={20} />
          <span className="mt-1">Read articles</span>
        </div>
        <div className="flex flex-col items-center">
          <BriefcaseMedical size={20} />
          <span className="mt-1 text-center">For healthcare providers</span>
        </div>
      </div>
    </footer>
  );
}
