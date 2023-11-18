import { useEffect, useState } from 'react';
import { Movie } from '../types';
import { SearchInput } from '../components/search-input';
import { MovieCard } from '../components/movie-card';
import('../movies.json');

export const MoviesLooker: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  //const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('overview');
  const [filteredMovie, setFilteredMovie] = useState<Movie>();

  useEffect(() => {
    fetch('./src/movies.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data are', data);
        setMovies(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearchChange = (text: string) => {
    const filteredMovies = movies.filter((movie) => {
      const movieName = movie.Title.toLowerCase();
      return movieName.includes(text);
    });

    if (filteredMovies.length) {
      console.log('handleSearch', filteredMovies[0]);
      setFilteredMovie(filteredMovies[0]);
    }
  };

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <SearchInput onSearchChange={handleSearchChange} />
      {filteredMovie && (
        <MovieCard
          movie={filteredMovie}
          selectedTab={selectedTab}
          onTabChange={handleTabChange}
        />
      )}
    </>
  );
};
