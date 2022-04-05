import WatchButton from 'components/hero/WatchButton';
import HeroFooter from 'components/hero/HeroFooter';

const Hero = () => {
    return (
        <section className="flex h-52 md:h-80 overflow-hidden">
            <div className="h-full w-full bg-brand-900 rounded-xl overflow-hidden relative">
                <div className="h-full w-full bg-gradient-to-t from-gray-900 flex flex-col justify-end px-5 pb-3 absolute md:px-8">
                    <div className="flex items-end justify-between pb-4">
                        <HeroFooter />
                        <WatchButton />
                    </div>
                </div>
                <img src={"/images/large.jpg"} alt="cover photo" />
            </div>
        </section>
    )
}

export default Hero;
