import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Film } from "./film.interface";

export function AboutPage() {
  const { filmId } = useParams();
  const navigate = useNavigate();
  const [filmDetails, setFilmDetails] = useState<Film>();

  useEffect(() => {
    axios
      .get(`https://ghibliapi.vercel.app/films/${filmId}`)
      .then((response) => setFilmDetails(response.data));
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome to {filmDetails?.title}</h1>

      <button onClick={handleBack}>Go Back</button>
    </div>
  );
}

export default AboutPage;
