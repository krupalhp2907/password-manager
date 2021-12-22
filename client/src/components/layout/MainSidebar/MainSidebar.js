import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarSearch from "./SidebarSearch";
import SidebarNavItems from "./SidebarNavItems";
import Transition from '../..//Transition';
import FocusTrap from '../../FocusTrap';
import SidebarMainBottomNav from "./SidebarMainBottomNav";

import { Store, Dispatcher, Constants } from "../../../flux";
import useBreakpoint from "../../../hooks/useBreakpoints";

function MainSidebar({hideLogoText}) {

  const [userSidebarState, setUserSidebarState] = React.useState({
    menuVisible: false,
    sidebarNavItems: Store.getSidebarItems()
  });

  const menuStatic = useBreakpoint('md');

  React.useEffect(() => {
    Store.addChangeListener(onChange);

    return () => Store.removeChangeListener(onChange);

    function onChange(event) {
      setUserSidebarState(() => {
        return {
          ...userSidebarState,
          menuVisible: Store.getMenuState(),
          sidebarNavItems: Store.getSidebarItems()
        }
      });
    }

  }, []);

  const handleClick = () => {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR
    });
  }

  const { menuVisible } = userSidebarState;

  const classes = classNames(
    'z-40 bg-white w-84 md:w-64 h-full flex flex-col justify-between',
    'overflow-x-hidden overflow-y-scroll md:overflow-y-auto no-scrollbar',
    'shrink-0',
    !menuStatic ? 'fixed left-0 top-0' : '',
  );

  const overlayClasses = classNames(
    'fixed inset-0 bg-gray-800 bg-opacity-50 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ',
    menuVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
  );

  return (
    <div className="flex bg-gray-100">

      <div 
        className={overlayClasses} 
        aria-hidden="true"
        onClick={handleClick}
      ></div>
      
      <Transition
        show={menuStatic || menuVisible}
        enter="transition-all duration-400"
        enterFrom="-ml-64"
        enterTo="ml-0"
        leave="transition-all duration-400"
        leaveTo="-ml-64"
      >
          <FocusTrap isActive={!menuStatic}>
            <aside className={classes} >
              <SidebarMainNavbar hideLogoText={hideLogoText} menuStatis={menuStatic}/>
              {/* <SidebarSearch menuStatic={menuStatic}/> */}
              <SidebarNavItems menuStatic={menuStatic}/>
              <SidebarMainBottomNav hideLogoText={hideLogoText} menuStatis={menuStatic}/>
            </aside>
          </FocusTrap>

      </Transition>
    </div>
  );
}


  MainSidebar.propTypes = {
    /**
     * Whether to hide the logo text, or not.
     */
    hideLogoText: PropTypes.bool
  };
  
  MainSidebar.defaultProps = {
    hideLogoText: false
  };
  
  export default MainSidebar;