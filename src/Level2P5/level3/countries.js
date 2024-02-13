import { useState } from 'react';

export function useCountries() {
  const [countries, setCountries] = useState([
    { country: "English", count: 91, capital: "London" },
  { country: "French", count: 45, capital: "Paris" },
  { country: "Arabic", count: 25, capital: "Riyadh" },
  { country: "Spanish", count: 24, capital: "Madrid" },
  { country: "Russian", count: 9, capital: "Moscow" },
  { country: "Portuguese", count: 9, capital: "Lisbon" },
  { country: "Dutch", count: 8, capital: "Amsterdam" },
  { country: "German", count: 7, capital: "Berlin" },
  { country: "Chinese", count: 5, capital: "Beijing" },
  { country: "Swahili", count: 4, capital: "Nairobi" },
  ]);

  return { countries, setCountries };
}
