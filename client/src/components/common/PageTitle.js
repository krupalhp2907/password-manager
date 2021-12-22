import React from 'react';
import PropTypes from 'prop-types';

import {GlobeAltIcon, SearchIcon, PencilIcon, TrashIcon} from '@heroicons/react/outline';

function PageTitle({title, noButtons}) {
    return (
        <div className='border-b pt-3 pb-4 flex flex-col-reverse md:flex-row'>
            <div className="flex flex-grow items-center space-x-2">
                <GlobeAltIcon className='h-6 w-6 text-gray-500 text-center'/>
                <a href="#" className='text-2xl text-black font-semibold text-center' target='#'>{title}</a>
            </div>
            
            {!noButtons && (
                <div className="flex items-center space-x-2 justify-end mb-4 md:mb-auto">

                    <button className='flex space-x-2 md:mb-auto items-center font-semibold hover:bg-gray-200 text-sm text-black rounded-md p-2 focus:outline-none focus:bg-gray-200'>
                        <PencilIcon className='h-5 w-5'/>
                        <span className=''>Edit</span>
                    </button>
                    <button className='flex space-x-2 md:mb-auto items-center font-semibold hover:bg-gray-200 text-sm tracking-wider text-black rounded-md p-2 focus:outline-none focus:bg-gray-200'>
                        <TrashIcon className='h-5 w-5'/>
                        <span className=''>Delete </span>

                    </button>

                </div>
            )}

        </div>
    );
}

PageTitle.propTypes = {
    title: PropTypes.string,
    noButtons: PropTypes.bool,
};

PageTitle.defaultProps = {
    title: "172.50.1.1:8090",
    noButtons: false,
};

export default PageTitle;