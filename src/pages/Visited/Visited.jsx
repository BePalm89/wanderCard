import "./Visited.css";

import { useEffect, useState } from "react";
import { ArrowLeft, PencilLine } from "lucide-react";

import CountryDetailsCard from "../../components/CountryDetailsCard/CountryDetailsCard.jsx";
import Button from "../../components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const Visited = () => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setVisitedCountries(JSON.parse(localStorage.getItem("visited")));
  }, []);

  return (
    <div>
      {visitedCountries?.length ? (
        <div>
          <div className="action-bar">
            <Button
              label="Create a postcard"
              icon={PencilLine}
              variant="secondary"
              iconProps={{ size: 16 }}
              onClick={() => navigate("/postcard")}
            />
          </div>
          <div className="cards-countries-container">
            {visitedCountries?.map((country) => (
              <CountryDetailsCard key={country.name} country={country} />
            ))}
          </div>
        </div>
      ) : (
        <div className="no-items">
          <p>
            Hi there! You don’t have any visited countries yet. Start spinning
            the globe and add the ones you’ve already visited — then you can
            send a postcard to someone you love!
          </p>
          <div>
            <Button
              label="Go To Travel Roulette"
              variant="primary"
              icon={ArrowLeft}
              iconProps={{ size: 16 }}
              onClick={() => navigate("/")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Visited;
