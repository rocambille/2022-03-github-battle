import { useState } from "react";

const array = [
  {
    id: 1,
    age: 19,
    name: "Romain",
  },
  {
    id: 2,
    age: 27,
    name: "Jaafar",
  },
  {
    id: 3,
    age: 16,
    name: "Quentin",
  },
];

export default function Home() {
  const [isFilterOn, setFilterOn] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setFilterOn(!isFilterOn);
        }}
      >
        {isFilterOn ? "disable" : "enable"} filter
      </button>
      {array
        .filter((person) => !(isFilterOn && person.age <= 18))
        .map((person) => (
          <section key={person.id}>
            <h2>{person.name}</h2>
          </section>
        ))}
    </>
  );
}
