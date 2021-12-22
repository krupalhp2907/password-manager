import React from "react";
import PropTypes from "prop-types";


const SidebarNavItem = ({ item }) => (

    <li className="p-3 hover:bg-gray-100 cursor-pointer select-none">
        <a href="#" className="flex flex-row items-center space-x-2 ">
            {item.htmlBefore && (
                <div
                    className="d-inline-block item-icon-wrapper"
                    dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
                />
            )}
            {item.title && <span>{item.title}</span>}
            {item.htmlAfter && (
                <div
                    className="d-inline-block item-icon-wrapper"
                    dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
                />
            )}
        </a>
    </li>
);

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;