import PropTypes from 'prop-types';
import {PlayIcon} from "@heroicons/react/solid";

const WatchButton = ({styles}) => {
    return (
        <a className={`backdrop-blur-sm bg-white/20 text-brand-50 w-28 h-9 px-2 flex items-center justify-start
                        rounded-full hover:bg-white/40 md:w-36 md:py-7 ${styles}`}>
            <PlayIcon className="w-6 h-6 md:w-10 md:h-10" />
            <div>
                <p className="ml-2">Watch</p>
                <p className="text-gray-500 text-xs ml-2 hidden md:block">1hr 48min</p>
            </div>
        </a>
    )
}

WatchButton.propTypes = {
    styles: PropTypes.string,
}

export default WatchButton;
