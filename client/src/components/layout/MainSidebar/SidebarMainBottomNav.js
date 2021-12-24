import React from "react";
import PropTypes from "prop-types";

import { Dispatcher, Constants } from "../../../flux";

class SidebarMainBottomNav extends React.Component {
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
    
    return (
        <div className="bg-white border-r border-t border-b px-4 h-14 flex items-center justify-center flex-shrink-0 sticky bottom-0 left-0">

          <button className="truncate text-sm bg-gray-900 text-white tracking-wider font-semibold rounded-md shadow-lg drop-shadow-lg p-2 hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Remember Password
          </button>
      </div>
    );
  }
}

export default SidebarMainBottomNav;