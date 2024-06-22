import { useEffect, useState } from "react";
import { Film } from "./film.interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./main-app.scss";


export function HomePage() {
  const [films, setFilms] = useState<Film[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")
      .then((response) => setFilms(response.data));
  }, []);

  const handleNavigate = (filmId: string) => {
    navigate(filmId);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a film..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <i className="fas fa-search"></i>
      </div>
      <div className="film-list">
        {filteredFilms.map((film) => (
          <div
            key={film.id}
            className="film-item"
            onClick={() => handleNavigate(film.id)}
          >
            <img src={film.image} alt={film.title} />
            <p>{film.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
