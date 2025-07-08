const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;

export const tmdbApi = {
  // Get popular movies
  getPopularMovies: async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.json();
  },
  
  // Get detail movies
  getMovieDetails: async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`);
    return response.json();
  },
  
  // Search movies
  searchMovies: async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    return response.json();
  }
};

// Helper function to get image URL
export const getImageUrl = (path, size = 'w500') => {
  if (!path) return 'https://via.placeholder.com/500x750/374151/ffffff?text=No+Image';
  return `https://image.tmdb.org/t/p/${size}${path}`;
};