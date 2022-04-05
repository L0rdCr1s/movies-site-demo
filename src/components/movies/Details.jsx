import MovieName from "components/hero/MovieName";
import WatchButton from "components/hero/WatchButton";

const Details = () => {
    return (
        <section className="flex h-screen overflow-hidden grid grid-cols-1 py-7 md:grid-cols-3 gap-10">
            <div className="md:h-4/6 rounded-xl overflow-hidden relative">
                <div className="h-full w-full bg-gradient-to-t from-gray-900 flex flex-col justify-end px-5 pb-3 absolute">
                    <div className="flex flex-col items-start justify-between pb-4">
                        <MovieName />
                        <WatchButton styles={'mt-4'} />
                    </div>
                </div>
                <img src={"/images/small.jpg"} alt="cover photo" />
            </div>
            <div className="col-span-2 h-4/6">
                <p className="text-brand-900 font-bold text-2xl">Synopsis</p>
                <p className="text-gray-400 my-2">Criminal, Biography, action</p>
                <p className="text-black">
                    Belgian sleuth Hercule Poirot's vacation aboard a glamorous river steamer
                    turns into a terrifying search for a murderer when a picture-perfect couple's
                    idyllic honeymoon is tragically cut short. Set against an epic landscape of sweeping
                    Egyptian desert vistas and the majestic Giza pyramids, this tale of unbridled passion and
                    incapacitating jealousy features a cosmopolitan group of impeccably dressed travelers, and
                    enough wicked twists and turns to leave audiences guessing until the final, shocking denouement. —Official Synopsis
                </p>
            </div>
        </section>
    )
}

export default Details;
