import PropTypes from 'prop-types';
import MovieName from "components/movies/MovieName";

const Movie = (props) => {
    return (
        <div className="bg-gray-100 rounded-lg overflow-hidden relative">
            <div className="w-full p-5 bottom-0 backdrop-blur-sm bg-black/70 absolute">
                <MovieName {...props} />
            </div>
            <img src={props.medium_cover_image} alt="cover photo" />
        </div>
    )
}

Movie.propTypes = {
    medium_cover_image: PropTypes.string,
}

export default Movie;
