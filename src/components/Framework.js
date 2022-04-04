/**
 * This component wraps every page to create page style
 * consistency, like for example every page will have the
 * navbar visible to it
 * */

import Navbar from 'components/navbar/NavBar';
import PropTypes from 'prop-types';

const Framework = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}

Framework.propTypes = {
    children: PropTypes.elementType,
}

export default Framework;
