/**
 * This component wraps every page to create page style
 * consistency, like for example every page will have the
 * navbar visible to it
 * */

import Navbar from 'components/navbar/NavBar';
import PropTypes from 'prop-types';
import Footer from "components/Footer";

const Framework = ({children}) => {
    return (
        <div className="min-h-screen">
            <div className="px-4 lg:px-52 2xl:px-48">
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    )
}

Framework.propTypes = {
    children: PropTypes.elementType,
}

export default Framework;
