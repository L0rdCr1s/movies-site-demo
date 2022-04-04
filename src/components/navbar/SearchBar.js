import PropTypes from 'prop-types';
import SearchIcon from "@heroicons/react/outline/SearchIcon";

const SearchBar = ({styles}) => {
    return (
        <div className={`w-full md:w-7/12 md:ml-8 items-center ${styles}`}>
            <SearchIcon className="text-gray-700 w-6 h-6 absolute ml-4" />
            <input
                type="text"
                name="search-input"
                placeholder="Search for movies (not working)"
                autoComplete="given-name"
                className="w-full pl-14 text-sm"
            />
        </div>
    )
}

SearchBar.propTypes = {
    styles: PropTypes.string,
}

export default SearchBar;
