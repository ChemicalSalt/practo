// src/app/api/specialties/route.js

import { NextResponse } from 'next/server';

const specialties = ['Cardiologist', 'Dermatologist', 'Pediatrician', 'Dentist'];

export function GET() {
  return NextResponse.json(specialties);
}
