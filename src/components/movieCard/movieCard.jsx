import { Link } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ movie }) {
  return (
    <>
      <div className="card">
        <Link
          to={`/movie/${movie.id}`}
          className="text-decoration-none d-block "
        >
          <div className="poster position-relative">
            <div className="poster-imag ">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                className="card-img-top"
              />
            </div>

            <div className="overlay">
              <div className="content">
                <h3 className="h5">اسم الفيلم :{movie.original_title}</h3>
                <p className="mb-2">تاريخ الإصدار :{movie.release_date}</p>
                <p className="mb-2"> التقييم :{movie.vote_average} </p>
                <p className="mb-0"> عدد الاصوات : {movie.vote_count} </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
