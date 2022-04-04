import {StarIcon, PlayIcon} from "@heroicons/react/solid";

const Hero = () => {
    return (
        <section className="flex h-52 md:h-80">
            <div className="h-full w-full bg-brand-900 rounded-xl overflow-clip relative">
                <div className="h-full w-full bg-gradient-to-t from-gray-900 flex flex-col justify-end px-5 pb-3 absolute md:px-8">
                    <div className="flex items-end justify-between pb-4">
                        <div className="md:mr-6">
                            <span className="text-brand-100 font-semi-bold text-2xl md:text-5xl md:font-bold">Dumanji</span>
                            <div className="flex items-center text-brand-100 text-gray-400 text-sm md:mt-1 md:text-lg">
                                <span>2021</span>
                                <span className="mx-1">·</span>
                                <span className="text-xs md:hidden">1hr 48min</span>
                                <span className="mx-1">·</span>
                                <img src="/svg/logo-imdb.svg" alt="imdb logo" className="w-8 mr-2" />
                                <span>9.8</span>
                                <StarIcon className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                        <div>
                            <a className="backdrop-blur-sm bg-white/20 text-brand-50 w-28 h-9 px-2 flex items-center justify-start
                        rounded-full hover:bg-white/40 md:w-32 md:py-6">
                                <PlayIcon className="w-6 h-6 md:w-10 md:h-10" />
                                <span className="ml-2">Watch</span>
                            </a>
                            <span className="text-gray-500 text-xs ml-5 mt-1 hidden md:block">1hr 48min</span>
                        </div>
                    </div>
                </div>
                <img src={"/images/large.jpg"} alt="cover photo" />
            </div>
        </section>
    )
}

export default Hero;
