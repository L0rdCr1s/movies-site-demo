import {StarIcon} from "@heroicons/react/solid";

const HeroFooter = () => {
    return (
        <div className="md:mr-6">
            <span className="text-gray-400">2021</span>
            <p className="text-brand-100 font-semi-bold text-2xl md:text-5xl md:font-bold">Dumanji</p>
            <div className="flex items-center text-gray-400 text-sm md:mt-1 md:text-lg">
                <span className="text-xs md:hidden">1hr 48min</span>
                <span className="mx-1 md:hidden">·</span>
                <img src="/svg/logo-imdb.svg" alt="imdb logo" className="w-8 mr-2" />
                <span>9.8</span>
                <StarIcon className="w-4 h-4 ml-1" />
                <img src="/images/tomato.png" alt="imdb logo" className="w-4 mx-2" />
                <span>82%</span>
            </div>
        </div>
    )
}

export default HeroFooter;
