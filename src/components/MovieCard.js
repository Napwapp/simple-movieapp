import { Star, Calendar } from 'lucide-react';
import { getImageUrl } from '../lib/tmdb';
import Link from 'next/link';

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="movie-card group cursor-pointer">
        {/* Poster Image */}
        <div className="relative aspect-[2/3] overflow-hidden">
          <img
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Rating */}
          <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>

        {/* Movie Info */}
        <div className="p-4">
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-red-500 transition-colors">
            {movie.title}
          </h3>
          
          <div className="flex items-center space-x-2 text-xs text-gray-400">
            <Calendar className="h-3 w-3" />
            <span>{new Date(movie.release_date).getFullYear()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}