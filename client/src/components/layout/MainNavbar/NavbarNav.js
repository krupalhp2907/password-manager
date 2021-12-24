import React, { useState, Fragment } from 'react';
import classNames from 'classnames';
import { Menu, Transition } from '@headlessui/react';
import {LogoutIcon, FolderDownloadIcon, CogIcon, TrashIcon, InformationCircleIcon, SearchIcon,  DotsVerticalIcon, DotsHorizontalIcon, MenuIcon} from '@heroicons/react/outline';

import { Store, Dispatcher, Constants } from "../../../flux";

function NavbarNav({}) {
    
    const handleToggleSidebar = () => {
        Dispatcher.dispatch({
          actionType: Constants.TOGGLE_SIDEBAR
        });
    }
    

    return (
        <nav className='h-full flex flex-grow md:flex-grow-0 items-center p-0 m-0 md:space-x-3 justify-between'>
            <span className='hidden lg:block text-sm text-gray-600 cursor-default truncate'>Get your passwords on your other devices</span>
            <button className='ml-0 truncate text-sm bg-gray-900 text-white tracking-wider font-semibold rounded-md shadow-lg drop-shadow-lg p-2 hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Signin to sync
            </button>

            <div className='flex items-center justify-between space-x-2 md:space-x-0'>
            <button className='md:hidden w-full bg-white font-medium hover:bg-gray-200 text-sm tracking-wider text-gray-700 rounded-md p-2 focus:outline-none focus:bg-gray-200'>
                <SearchIcon className='h-6 w-6'/>
            </button>

            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex justify-center w-full bg-white font-medium hover:bg-gray-200 text-sm tracking-wider text-gray-700 rounded-md p-2 focus:outline-none focus:bg-gray-200">
                        <DotsHorizontalIcon className='hidden md:block h-6 w-6'/>
                        <DotsVerticalIcon className='md:hidden h-6 w-6'/>
                    </Menu.Button>
                </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className=" origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                        {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm',
                                    'flex items-center',
                                )}
                                >
                                <LogoutIcon className='mr-2 h-5 w-5 text-sm' />
                                <span className="truncate">Import from Another Browsers</span>
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'px-4 py-2 text-sm',
                                    'flex items-center',
                                )}
                                >
                                <FolderDownloadIcon className='mr-2 h-5 w-5 text-sm' />
                                <span className="truncate">Export Logins</span>
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'px-4 py-2 text-sm',
                                    'flex items-center',
                                )}
                                >
                                <TrashIcon className='mr-2 h-5 w-5 text-sm' />
                                <span className="truncate">Remove All logins</span>
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                    <div className="py-1">
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'px-4 py-2 text-sm',
                                'flex items-center',
                            )}
                            >
                            <CogIcon className='mr-2 h-5 w-5 text-sm' />
                            <span className="truncate">Options</span>
                        </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                'px-4 py-2 text-sm',
                                'flex items-center',
                            )}
                            >
                            <InformationCircleIcon className='mr-2 h-5 w-5 text-sm' />
                            <span className="truncate">Help</span>
                        </a>
                        )}
                        </Menu.Item>
                    </div>
                    </Menu.Items>
                </Transition>
            </Menu>

            <button className='md:hidden inline-block w-full bg-white font-medium hover:bg-gray-200 text-sm tracking-wider text-gray-700 rounded-md p-2 focus:outline-none focus:bg-gray-200' onClick={handleToggleSidebar}>
                <MenuIcon className='h-6 w-6'/>
            </button>
            </div>
        </nav>
    );
}

NavbarNav.propTypes = {
    
};

NavbarNav.defaultProps = {
    
};

export default NavbarNav;