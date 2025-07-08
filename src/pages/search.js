import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { tmdbApi } from '../lib/tmdb';
import MovieCard from '../components/MovieCard';

export default function SearchPage() {
    const router = useRouter();
    const { q } = router.query;

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSearchResults = async () => {
            if (!q) return;

            setLoading(true);
            try {
                const data = await tmdbApi.searchMovies(q);
                setResults(data.results || []);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setResults([]);
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [q]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Hasil pencarian untuk: <span className="text-red-500">{q}</span></h1>

            {loading ? (
                <p className="text-gray-500">Sedang mencari...</p>
            ) : results.length === 0 ? (
                <p className="text-gray-500">Tidak ditemukan hasil untuk {q}.</p>
            ) : (
                <div className="movie-grid">
                    {results.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}
