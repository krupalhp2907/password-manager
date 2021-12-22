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
     </div>
    )
  }
}

export default SidebarNavItems;