import MovieName from "components/movies/MovieName";

const Movie = () => {
    return (
        <div className="bg-gray-100 rounded-lg overflow-hidden relative">
            <div className="w-full p-5 bottom-0 backdrop-blur-sm bg-white/10 absolute">
                <MovieName />
            </div>
            <img src={"/images/small.jpg"} alt="cover photo" />
        </div>
    )
}

export default Movie;
