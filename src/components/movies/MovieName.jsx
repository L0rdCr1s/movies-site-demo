import {StarIcon} from "@heroicons/react/solid";
import PropTypes from "prop-types";

const MovieName = (props) => {
    return (
        <div className="md:mr-6">
            <div className="text-gray-400 text-xs">
                <span>{props.year}</span>
            </div>
            <p className="text-brand-100 font-semi-bold text-xl truncate ...">{props.title}</p>
            <div className="flex items-center text-gray-400 text-xs mt-1">
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
}

export default MovieName;
