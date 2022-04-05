import HeartIcon from '@heroicons/react/solid/HeartIcon'

const Footer = () => {
    return (
        <section className="py-10 bg-black flex flex-col justify-center items-center">
            <span className="font-bold text-brand-100 text-3xl">
                ASYX<span className="text-brand-900">MOVIES</span>
            </span>
            <div className="flex w-4/12 py-7 text-brand-300 justify-between">
                <a href="mailto:shoochristopher@gmail.com">Contact</a>
                <span>Terms and Conditions</span>
                <span>Privacy</span>
            </div>
            <span className="text-gray-400">
                Made with <HeartIcon className="w-6 h-6 text-rose-900 inline" /> by Christopher Shoo
            </span>
        </section>
    )
}

export default Footer;
