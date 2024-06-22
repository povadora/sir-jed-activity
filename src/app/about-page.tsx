import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Film } from "./film.interface";
import "./main-app.scss";

export function AboutPage() {
  const { filmId } = useParams();
  const navigate = useNavigate();
  const [filmDetails, setFilmDetails] = useState<Film>();

  useEffect(() => {
    axios
      .get(`https://ghibliapi.vercel.app/films/${filmId}`)
      .then((response) => setFilmDetails(response.data));
  }, [filmId]);

  const handleBack = () => {
    navigate("/");
  };

  const handleImageClick = () => {
    const imageElement = document.querySelector('.film-image');
    if (imageElement) {
      imageElement.classList.toggle('half-width');
    }
  };

  return (
    <div className="film-details">
      <div className="film-content">
        <div className="film-left">
          <h1 className="About-title">{filmDetails?.title}</h1>
          <div className="film-info">
            <div className="film-info-item">
              <i className="fas fa-user"></i>
              <p><span>Director: </span>{filmDetails?.director}</p>
            </div>
            <div className="film-info-item">
              <i className="fas fa-user-tie"></i>
              <p><span>Producer: </span>{filmDetails?.producer}</p>
            </div>
            <div className="film-info-item">
              <i className="fas fa-calendar-alt"></i>
              <p><span>Release Date: </span>{filmDetails?.release_date}</p>
            </div>
            <div className="film-info-item">
              <i className="fas fa-star"></i>
              <p><span>Rotten Tomatoes Score: </span>{filmDetails?.rt_score}</p>
            </div>
            <div className="film-info-item">
              <i className="fas fa-film"></i>
              <p><span>Description: </span>{filmDetails?.description}</p>
            </div>
          </div>
          <button onClick={handleBack}>Go Back</button>
        </div>
        <div className="film-right">
          {filmDetails?.image && (
            <img
              src={filmDetails.image}
              alt={filmDetails.title}
              className="film-image"
              onClick={handleImageClick}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
