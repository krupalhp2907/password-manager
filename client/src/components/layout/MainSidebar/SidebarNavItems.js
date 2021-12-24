import React from "react";

import SidebarNavItem from "./SidebarNavItem";

import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        navItems: Store.getSidebarItems()
    };
  
    this.onChange = this.onChange.bind(this);

  }

    componentWillMount() {
        Store.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        Store.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({
            ...this.state,
            navItems: Store.getSidebarItems()
        });
    }

  render() {
    const { navItems: items } = this.state;
    return (
      <div className="border-r w-full divide-y flex-1 flex-grow flex-shrink-0">
        {items.map((item, idx) => (
                  <SidebarNavItem key={idx} item={item} />
              ))}
          {/* {items.length != 0 ? 
            (
              items.map((item, idx) => (
                  <SidebarNavItem key={idx} item={item} />
              ))
            ) : 
            (
              // <div className="px-4 flex flex-col space-y-4 align-middle justify-center h-full overflow-y-auto no-scrollbar">
              //   <h1 className="text-xl self-start tracking-wider uppercase border-b w-full pb-4">No Passwords</h1>
              //   <p className="text-normal text-gray-600">Sorry! There are no passwords to show. You can add passwords by clicking below</p>
              //   <button className="truncate text-sm bg-gray-900 text-white tracking-wider font-semibold rounded-md shadow-lg drop-shadow-lg p-2 hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              //     Remember Password
              // </button>
              // </div>
            )} */}
     </div>
    )
  }
}

export default SidebarNavItems;