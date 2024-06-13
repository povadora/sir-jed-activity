import React, { useEffect, useState } from "react";
import logo from "../logo.svg";
import "./app.scss";
import axios from "axios";

interface Film {
  description: string;
  director: string;
  id: string;
  image: string;
  locations: string[];
  movie_banner: string;
  original_title: string;
  original_title_romanised: string;
  people: string;
  producer: string;
  release_date: string;
  rt_score: string;
  running_time: string;
  species: string[];
  title: string;
  url: string;
  vehicles: string[];
}

function App() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    axios
      .get("https://ghibliapi.vercel.app/films")
      .then((response) => setFilms(response.data));
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        Welcome to Ghibli Film Shops
        <small>The Best Film Ever</small>
      </header>

      {films.map((film) => (
        <div>
          <img src={film.image} />
          <p>{film.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
