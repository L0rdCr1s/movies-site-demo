import MovieName from 'components/movies/MovieName';

const MoviesList = () => {
    return (
        <section className="py-14">
            <h1 className="font-semi-bold text-2xl">Browse movies</h1>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
                {
                    [1,2,3,4,5,6,7,8,9].map(item => (
                        <div className="bg-gray-100 rounded-xl overflow-clip relative">
                            <div className="w-full p-5 bottom-0 backdrop-blur-sm bg-white/10 absolute">
                                <MovieName />
                            </div>
                            <img src={"/images/small.jpg"} alt="cover photo" />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default MoviesList;
