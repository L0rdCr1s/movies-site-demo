import PropTypes from 'prop-types';
import MovieCardFooter from "components/movies/MovieCardFooter";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectMovie} from "redux/movie-details";

const Movie = (props) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(selectMovie(props))
    }

    return (
        <Link to="movie-details" onClick={onClick} className="bg-gray-100 rounded-lg overflow-hidden relative">
            <div className="w-full p-5 bottom-0 backdrop-blur-sm bg-black/70 absolute">
                <MovieCardFooter {...props} />
            </div>
            <img src={props.medium_cover_image} alt="cover photo" />
        </Link>
    )
}

Movie.propTypes = {
    medium_cover_image: PropTypes.string,
}

export default Movie;
