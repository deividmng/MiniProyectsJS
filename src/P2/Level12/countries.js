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
  ]);

  return { countries, setCountries };
}
