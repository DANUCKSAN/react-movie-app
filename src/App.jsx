import { useState,useEffect } from 'react'
import Search from './components/Search'
import Spinner from './components/spinner';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';
import { updateSearchCount } from './appwrite';
import { getTrendingMovies } from './appwrite';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS={
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useDebounce(
    () => {
      setDebouncedSearchTerm(searchTerm);
    },
    500,
    [searchTerm]
  );

  const fetchMovies = async (query='') => {
    setIsloading(true);
    setErrorMessage('');
    try {
      const  endpoint= query 
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&query=${encodeURIComponent(query)}`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      if(data.response==='False'){
        setErrorMessage(data.Error || 'No movies found.');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

    if (query  && data.results.length > 0) {
      await updateSearchCount(query , data.results[0]);

    }

    
    } catch (error) {
      console.error('Error fetching movies:', error);
      setErrorMessage('Failed to fetch movies. Please try again later.');
    }finally {
      setIsloading(false);
    }
  };

  const loadTrendingMovies=async ()=>{
    try{
      const trending = await getTrendingMovies();
      setTrendingMovies(trending || []);

    }catch(error){
      console.log(`Error fetching trending movies:${error}`);
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);

  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
        <img src="./hero.png" alt="hero-banner"/>
       
        <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
         </header>


          {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

         <section className='all-movies'>
          <h2>All Movies</h2>
          {isloading ? (
            <Spinner/>
          ): errorMessage ? (
            <div className="text-red-500">{errorMessage}</div>
          ) : (
            <ul>

              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
         </section>
      </div>
    
    </main>
  )
}

export default App
