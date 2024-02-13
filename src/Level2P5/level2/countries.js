import { useState } from 'react';

export function useCountries() {
  const [countries, setCountries] = useState([
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",

    "Mexico",
    "Netherlands",
    "Oman",
    "Poland",
    "Qatar",
    "Russia",
    "Spain",
    "Turkey",
    "Ukraine",
    "Vietnam",
  ]);

  return { countries, setCountries };
}
