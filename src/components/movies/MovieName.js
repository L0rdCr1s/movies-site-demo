import {StarIcon} from "@heroicons/react/solid";

const MovieName = () => {
    return (
        <div className="md:mr-6">
            <div className="text-gray-400 text-xs">
                <span>1hr 48min</span>
            </div>
            <span className="text-brand-100 font-semi-bold text-lg md:font-bold">Dumanji</span>
            <div className="flex items-center text-gray-400 text-xs">
                <span>2021</span>
                <span className="mx-1">·</span>
                <img src="/svg/logo-imdb.svg" alt="imdb logo" className="w-8 mr-2" />
                <span>9.8</span>
                <StarIcon className="w-4 h-4 ml-1" />
                <img src="/images/tomato.png" alt="imdb logo" className="w-4 mx-2" />
                <span>80%</span>
            </div>
        </div>
    )
}

export default MovieName;
