import { NextResponse } from 'next/server';
import doctors from '../../data/doctors.json';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const locationParam = searchParams.get('location')?.toLowerCase() || '';
  const queryParam = searchParams.get('specialty')?.toLowerCase() || ''; // can be any user query

  const filtered = doctors.filter((doctor) => {
    const allDoctorText = `
      ${doctor.name}
      ${doctor.specialty}
      ${doctor.hospital}
      ${doctor.location}
      ${doctor.experience}
    `.toLowerCase();

    return (
      allDoctorText.includes(queryParam) &&
      doctor.location.toLowerCase().includes(locationParam)
    );
  });

  return NextResponse.json(filtered);
}
