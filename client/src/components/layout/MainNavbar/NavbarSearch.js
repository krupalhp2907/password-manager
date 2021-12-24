import React, { useState } from 'react';
import {SearchIcon} from '@heroicons/react/outline';

function NavbarSearch({}) {
    
    return (
        <div className="hidden md:block w-full mr-4">
            <div className='flex items-center justify-start flex-1 flex-shrink-0 text-sm text-gray-500'>
                <button className='mr-2 '>
                    <SearchIcon className='w-4 h-4'/>
                </button>
                <input 
                    type="text" 
                    name="search" 
                    id="navSearch" 
                    placeholder="Search Passwords..."
                    className="rounded-none flex-1 px-0 text-sm focus:outline-none" />

            </div>
        </div>
    );
}

NavbarSearch.propTypes = {
    
};

NavbarSearch.defaultProps = {
    
};

export default NavbarSearch;