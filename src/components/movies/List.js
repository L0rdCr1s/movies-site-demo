import Movie from "components/movies/Movie";
import {useGet} from 'assets/scripts/api-hook';
import {useEffect} from "react";

const MOVIE_LIST_API = 'https://yts.torrentbay.to/api/v2/list_movies.json';

const MoviesList = () => {
    const [fetchMovies, {loading, data, error}] = useGet({link: MOVIE_LIST_API});

    useEffect(() => {
        fetchMovies({variables: {limit: 10}});
    }, []);

    return (
        <section className="py-14">
            <h1 className="font-semi-bold text-2xl">Browse movies</h1>
            {
                loading
                    ? (<span>loading</span>)
                    : (
                        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
                            { [1,2,3,4,5,6,7,8,9].map(item => <Movie key={item} />) }
                        </div>
                    )
            }
        </section>
    )
}

export default MoviesList;
