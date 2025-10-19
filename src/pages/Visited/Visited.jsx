import "./Visited.css";

import { useEffect, useState } from "react";
import CountryDetailsCard from "../../components/CountryDetailsCard/CountryDetailsCard.jsx";

const Visited = () => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    setVisitedCountries(JSON.parse(localStorage.getItem("visited")));
  }, []);

  return (
    <div className="cards-countries-container">
      {visitedCountries?.map((country) => (
        <CountryDetailsCard key={country.name} country={country} />
      ))}
    </div>
  );
};

export default Visited;
