import {StarIcon} from "@heroicons/react/solid";
import PropTypes from "prop-types";

const MovieName = (props) => {
    return (
        <div className="md:mr-6">
            <span className="text-gray-400">{props.year}</span>

            <div className="flex items-center text-gray-400 text-sm md:mt-1 md:text-lg">
                <span className="text-xs md:hidden">
                    {Math.floor(props.runtime / 60)}hr and {props.runtime % 60}min
                </span>
                <span className="mx-1 md:hidden">·</span>
                <img src="/svg/logo-imdb.svg" alt="imdb logo" className="w-8 mr-2" />
                <span>{props.rating}</span>
                <StarIcon className="w-4 h-4 ml-1" />
                <img src="/images/tomato.png" alt="imdb logo" className="w-4 mx-2" />
                <span>{props.rating * 10}%</span>
            </div>
        </div>
    )
}

MovieName.propTypes = {
    year: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.string,
    runtime: PropTypes.number,
}

export default MovieName;
