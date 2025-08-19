import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "./MovieDetails.css";
export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  // get details by movie id
  const getDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=94bee77a87b90434841fa49f6e1379ae&language=ar`
    );
    setMovie(res.data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  console.log(movie);

  return (
    <>
      {!movie ? (
        <p>جاري تحميل بيانات الفيلم...</p>
      ) : (
        <div className="movie-details">
          <div className="poster-info flex">
            <div className="poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>

            <div className="info">
              <h1>{movie.title}</h1>
              <h3>اسم الفيلم : {movie.original_title}</h3>
              <p>تاريخ الإصدار : {movie.release_date}</p>
              <p>التقييم : {movie.vote_average}</p>
              <p>عدد الأصوات : {movie.vote_count}</p>
            </div>
          </div>

          <div className="overview container mt-4 ">
            <h4>الاحداث : </h4>
            <p> {movie.overview} </p>
            {movie.homepage && (
              <a
                href={movie.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="watch-btn ms-3"
              >
                الموقع الرسمي
              </a>
            )}
            <Link to="/" className="watch-btn me-3">
              الصفحة الرئيسية
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
