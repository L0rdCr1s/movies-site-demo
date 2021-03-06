import SearchBar from "components/navbar/SearchBar";

const NavBar = () => {
    return (
        <section className="mb-12 md:mb-8">
            <div className="flex flex-grow py-5 mt-4">
                <div className="basis-1/2 flex items-center">
                    <span className="font-bold text-2xl">
                        BSHOO<span className="text-brand-900">MOVIES</span>
                    </span>
                    <SearchBar styles="hidden md:flex" />
                </div>
                <div className="basis-1/2 flex justify-end items-center">
                    <span className="mr-4">Login</span>
                    <a className="bg-brand-900 text-brand-50 py-2.5 px-5 rounded-full hover:bg-brand-700">
                        Register
                    </a>
                </div>
            </div>
            <SearchBar styles="flex md:hidden" />
        </section>
    )
}

export default NavBar;
