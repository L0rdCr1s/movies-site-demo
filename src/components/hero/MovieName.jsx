import {StarIcon} from "@heroicons/react/solid";

const MovieName = () => {
    return (
        <div className="md:mr-6">
            <span className="text-brand-100 font-semi-bold text-2xl md:text-5xl md:font-bold">Dumanji</span>
            <div className="flex items-center text-gray-400 text-sm md:mt-1 md:text-lg">
                <span>2021</span>
                <span className="mx-1">·</span>
                <span className="text-xs md:hidden">1hr 48min</span>
                <span className="mx-1 md:hidden">·</span>
                <img src="/svg/logo-imdb.svg" alt="imdb logo" className="w-8 mr-2" />
                <span>9.8</span>
                <StarIcon className="w-4 h-4 ml-1" />
            </div>
        </div>
    )
}

export default MovieName;
