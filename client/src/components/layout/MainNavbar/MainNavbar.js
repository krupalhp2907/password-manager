import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

import NavbarSearch from "./NavbarSearch";
import NavbarNav from "./NavbarNav";

function MainNavbar({sticky}) {
    const classes = classNames(
        'bg-white border-b h-14 px-4 md:px-4', 
        'flex items-center justify-between',
        sticky &&'sticky top-0 left-0'
    );
    return(
        <header className={classes}>
            <NavbarSearch />
            <NavbarNav />
        </header>
    );
}

MainNavbar.propTypes = {
    /**
     * Navbar Sticky
     */
    sticky:  PropTypes.bool, 
};

MainNavbar.defaultProps = {
    sticky: true
};

export default MainNavbar;