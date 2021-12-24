import React from "react";
import PropTypes from "prop-types";

import { Dispatcher, Constants } from "../../../flux";
import NavbarSearch from '../MainNavbar/NavbarSearch';

class SidebarMainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }

  handleToggleSidebar() {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR
    });
  }

  render() {
    const { hideLogoText } = this.props;
    return (
        <div className="bg-white border-r border-b px-4 h-14 flex flex-shrink-0 items-center justify-between sticky top-0 left-0">

          <h1 className="text-lg">
              <a href='#' className='flex items-center justify-between space-x-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Digital Locker</span>
              </a>
          </h1>

          <button
            key="Close Menu"
            className="w-10 md:hidden bg-white font-medium hover:bg-gray-50 tracking-wider text-gray-700 rounded-md p-2 focus:outline-none focus:bg-gray-100"
            aria-label="Close menu"
            title="Close menu"
            onClick={this.handleToggleSidebar}
          >
            <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
      </div>
    );
  }
}

SidebarMainNavbar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

SidebarMainNavbar.defaultProps = {
  hideLogoText: false
};

export default SidebarMainNavbar;