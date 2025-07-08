import { Search, Film, Home } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <nav className="bg-gray-900 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2">
                            <Film className="h-8 w-8 text-red-500" />
                            <span className="text-xl font-bold hidden sm:block">MovieApp</span>
                        </Link>

                        {/* Search Bar */}
                        <form
                            onSubmit={handleSearch}
                            className="flex-1 mx-2 sm:mx-8 sm:max-w-lg"
                        >
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Cari film..."
                                    className="w-full px-4 py-2 pl-10 pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                            </div>
                        </form>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
                                <Home className="h-5 w-5" />
                                <span className="hidden sm:inline">Home</span> {/* Teks hanya muncul di sm ke atas */}
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="min-h-screen">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <Film className="h-6 w-6 text-red-500" />
                            <span className="text-lg font-semibold">MovieApp</span>
                        </div>

                        <div className="text-center md:text-right">
                            <p className="text-gray-400">
                                Powered by{' '}
                                <a
                                    href="https://www.themoviedb.org/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-red-500 hover:text-red-400"
                                >
                                    The Movie Database
                                </a>
                            </p>
                            <p className="text-gray-500 text-sm mt-1">
                                © 2024 MovieApp. Built with Next.js
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}