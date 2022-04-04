import {PlayIcon} from "@heroicons/react/solid";

const WatchButton = () => {
    return (
        <div>
            <a className="backdrop-blur-sm bg-white/20 text-brand-50 w-28 h-9 px-2 flex items-center justify-start
                        rounded-full hover:bg-white/40 md:w-32 md:py-6">
                <PlayIcon className="w-6 h-6 md:w-10 md:h-10" />
                <span className="ml-2">Watch</span>
            </a>
            <span className="text-gray-500 text-xs ml-5 mt-1 hidden md:block">1hr 48min</span>
        </div>
    )
}

export default WatchButton;
