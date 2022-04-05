import Movie from "components/movies/Movie";
import {useApi} from 'assets/scripts/api-hook';
import {useEffect, useState} from "react";

const MOVIE_LIST_API = 'https://yts.mx/api/v2/list_movies.json';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const [fetchMovies, {loading, data, error}] = useApi({link: MOVIE_LIST_API, method: 'get'});

    useEffect(() => {
        fetchMovies({variables: {limit: 18, sort_by: 'year', order_by: 'desc'}});
    }, []);

    useEffect(() => {
        setMovies(data.movies)
        console.log(data.movies)
    }, [data]);

    if (loading) {
        return (
            <section className="py-48 flex justify-center items-center">
                <span className="font-bold text-brand-900 text-4xl">
                    loading...
                </span>
            </section>
        )
    }

    if (error) {
        return (
            <section className="py-48 flex justify-center items-center">
                <span className="font-bold text-rose-900 text-4xl">
                    Sorry no movies
                </span>
            </section>
        )
    }

    return (
        <section className="py-14">
            <h1 className="font-semi-bold text-2xl">Browse movies</h1>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
                {
                    movies
                        ? movies.map(item => <Movie key={item.id} {...item} />)
                        : (<span>no movies</span>)
                }
            </div>
        </section>
    )
}

export default MoviesList;
