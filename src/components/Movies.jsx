import MovieCard from "./movieCard/movieCard";
import Pagination from "./pagination";

export default function Movies({ movies, numberOfPages, onPageChange }) {
  return (
    <>
      <div className="container">
        <div className="row g-4 mt-3">
          {movies.map((ele) => {
            return (
              <div key={ele.id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                <MovieCard movie={ele} />
              </div>
            );
          })}
        </div>

        {numberOfPages > 1 && (
          <Pagination
            numberOfPages={numberOfPages}
            onPageChange={onPageChange}
          />
        )}
      </div>
    </>
  );
}
