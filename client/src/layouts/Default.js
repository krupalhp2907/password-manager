import React from "react";
import PropTypes from "prop-types";

import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainNavbar from "../components/layout/MainNavbar/MainNavbar";

const DefaultLayout = ({ children, noNavbar }) => (
  <div className="flex h-screen overflow-x-hidden bg-gray-100">

      <MainSidebar/>

      <div className=" flex flex-grow flex-col flex-1 overflow-y-auto overflow-x-hidden">


          <main className="">

            {!noNavbar && <MainNavbar/>}


            <div className="px-4 sm:px-6 lg:px-8 py-4 ">
              {children}
            </div>
          </main>
      </div>
  </div>
);

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
};

DefaultLayout.defaultProps = {
  noNavbar: false,
};

export default DefaultLayout;