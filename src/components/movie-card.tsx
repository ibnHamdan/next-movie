import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  selectedTab,
  onTabChange,
}) => {
  console.log(movie);

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
  };
  const casts = movie.Actors.split(',');
  const genre = movie.Genre.split(',');

  const renderMovieDetails = (movie: Movie) => {
    switch (selectedTab) {
      case 'overview':
        return (
          <div>
            <h2>Overview:</h2>
            {movie.Title}
            <img src={movie.Poster} />
          </div>
        );
      case 'cast':
        return (
          <div>
            <h2>Cast:</h2>

            {casts.map((cast) => {
              return <h5>{cast}</h5>;
            })}
          </div>
        );
      case 'genre':
        return (
          <div>
            <h2>Genre:</h2>

            {genre.map((gen) => {
              return <h5>{gen}</h5>;
            })}
          </div>
        );
      case 'image':
        return (
          <div>
            <h2>Images:</h2>

            {movie.Images?.map((image) => {
              console.log('images', image);
              return (
                <img src={image} height={'100px'} width={'80px'} />
              );
            })}
          </div>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <>
      <div className="tab-buttons">
        <button onClick={() => handleTabChange('overview')}>
          Overview
        </button>
        <button onClick={() => handleTabChange('cast')}>Casts</button>
        <button onClick={() => handleTabChange('genre')}>
          Genre
        </button>
        <button onClick={() => handleTabChange('image')}>
          Images
        </button>
      </div>

      <div className="details-container">
        <div className="movie-card">{renderMovieDetails(movie)}</div>
      </div>
      <div className="about-section">
        <h3>About</h3>
        <p>{movie.Plot}</p>
      </div>
    </>
  );
};
