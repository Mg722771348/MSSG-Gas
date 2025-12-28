import React from 'react';

export const BRAND_NAME = "MSSG Gas And Electrical Services Ltd";
export const GAS_SAFE_ID = "531530";
export const EXPERIENCE_YEARS = 33;
export const PHONE_NUMBER = "07415120877";
export const PRIMARY_REGIONS = ["Portsmouth", "Southampton", "Southsea", "Gosport", "Waterlooville", "Eastleigh", "Hampshire"];

export const SERVICES = [
  {
    id: 'breakdowns',
    title: 'Emergency Boiler Repairs',
    description: 'Expert diagnostics and rapid repair for all major boiler brands, specializing in Vaillant and Glowworm breakdown services.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 'upgrades',
    title: 'High-Efficiency Upgrades',
    description: 'A-Rated boiler installations and heating system modernizations to drastically reduce energy consumption and bills.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 'smart-tech',
    title: 'Smart Home Heating',
    description: 'Precision control with Nest, Hive, and Tado installations. Manage your home temperature from anywhere in the world.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0-2-2H7a2 2 0-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
];