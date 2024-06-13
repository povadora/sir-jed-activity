import { useEffect, useState } from "react";
import { Film } from "./film.interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const [films, setFilms] = useState<Film[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")
      .then((response) => setFilms(response.data));
  }, []);

  const handleNavigate = (filmId: string) => {
    navigate(filmId);
  };

  return (
    <div className="App">
      {films.map((film) => (
        <div
          key={film.id}
          className="film-item"
          onClick={() => handleNavigate(film.id)}
        >
          <img src={film.image} />
          <p>{film.title}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
