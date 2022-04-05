import MovieName from "components/movies/MovieDetailsName";
import WatchButton from "components/hero/WatchButton";
import {useSelector} from "react-redux";

const Details = () => {
    const {movie} = useSelector(state => state.movieStore);

    return (
        <section className="flex h-screen overflow-hidden grid grid-cols-1 py-7 md:grid-cols-3 gap-10">
            <div className="md:h-4/6 rounded-xl overflow-hidden relative">
                <div className="h-full w-full bg-gradient-to-t from-gray-900 flex flex-col justify-end px-5 pb-3 absolute">
                    <div className="flex flex-col items-start justify-between pb-4">
                        <MovieName {...movie} />
                        <WatchButton styles={'mt-4'} />
                    </div>
                </div>
                <img src={movie.large_cover_image} alt="cover photo" />
            </div>
            <div className="col-span-2 h-4/6">
                <p className="text-brand-900 font-bold text-2xl">
                    {movie.title}
                </p>
                <p className="text-gray-400 my-2">
                    {movie.genres.map(genre => genre)}
                </p>
                <p className="text-black">{movie.description_full}</p>
            </div>
        </section>
    )
}

export default Details;
