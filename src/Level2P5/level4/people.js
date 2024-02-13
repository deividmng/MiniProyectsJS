import { useState } from 'react';

export function usePeople() {
  const [people, setPeople] = useState([
    { id: 1, name: "Ana", age: 31 },
    { id: 2, name: "Pedro", age: 26 },
    { id: 3, name: "Maria", age: 28 },
    { id: 4, name: "Juan", age: 34 },
    { id: 5, name: "Laura", age: 22 },
    { id: 6, name: "Carlos", age: 30 },
    { id: 7, name: "Isabel", age: 25 },
    { id: 8, name: "Fernando", age: 29 },
    { id: 9, name: "Sofia", age: 27 },
    { id: 10, name: "Gabriel", age: 33 },
    { id: 11, name: "Luisa", age: 35 },
    { id: 12, name: "Ricardo", age: 32 },
    { id: 13, name: "Elena", age: 28 },
    { id: 14, name: "Diego", age: 31 },
    { id: 15, name: "Carmen", age: 24 },
    { id: 16, name: "Alejandro", age: 26 },
    { id: 17, name: "Valeria", age: 29 },
    { id: 18, name: "Javier", age: 33 },
    { id: 19, name: "Beatriz", age: 27 },
    { id: 20, name: "Gonzalo", age: 28 },
    { id: 21, name: "Natalia", age: 31 },
    { id: 22, name: "Mario", age: 25 },
    { id: 23, name: "Lucia", age: 30 },
    { id: 24, name: "Emilio", age: 28 },
    { id: 25, name: "Camila", age: 26 },
  ]);

  return { people, setPeople };
}
