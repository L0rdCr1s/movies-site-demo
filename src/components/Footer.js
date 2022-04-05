import HeartIcon from '@heroicons/react/solid/HeartIcon';
import MailIcon from '@heroicons/react/solid/MailIcon';
import {AiFillLinkedin, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
    return (
        <section className="py-10 bg-black flex flex-col justify-center items-center">
            <span className="font-bold text-brand-100 text-3xl">
                ASYX<span className="text-brand-900">MOVIES</span>
            </span>
            <div className="flex w-96 md:w-3/12 py-7 text-brand-300 justify-between">
                <a href="mailto:shoochristopher@gmail.com" className="flex items-center">
                    <MailIcon className="w-6 h-6 mr-1 text-brand-900" />
                    Email me
                </a>
                <a href="https://mobile.twitter.com/shoochristopher" className="flex items-center" target="_blank">
                    <AiOutlineTwitter className="w-6 h-6 mr-1 text-brand-900" />
                    Twitter
                </a>
                <a href="https://www.linkedin.com/in/shoo" className="flex items-center" target="_blank">
                    <AiFillLinkedin className="w-6 h-6 mr-1 text-brand-900" />
                    LinkedIn
                </a>
            </div>
            <span className="text-gray-400">
                Made with <HeartIcon className="w-6 h-6 text-rose-900 inline" /> by Christopher Shoo
            </span>
        </section>
    )
}

export default Footer;
