import { NextResponse } from 'next/server';

const locations = ['Bangalore'];

export function GET() {
  return NextResponse.json(locations);
}
