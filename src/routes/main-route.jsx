import { Routes, Route} from "react-router-dom";
import Home from 'pages/home';
import MovieDetails from 'pages/movie-details';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie-details" element={<MovieDetails />} />
        </Routes>
    )
}

export default Router;
