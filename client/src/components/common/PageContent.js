import React, { useState } from 'react';
import {EyeIcon, EyeOffIcon} from '@heroicons/react/outline';

function PageContent({item}) {
    // const {to, title, username, password, domain} = item;

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (e) => {
        setShowPassword(() => !showPassword);
    }

    return (
        <React.Fragment>
            <div className='md:w-1/2 w-full py-8 space-y-4 border-b border-gray-300'>

                <div className='flex flex-col'>
                    <h5 className='lg:text-lg text-sm text-gray-500 font-semibold tracking-wider uppercase'>Website address</h5>
                    <div className="flex flex-row flex-shrink-0 justify-between items-center py-2 md:py-4 space-x-3">
                        <a href='localhost:3000/' target={'localhost:3000/'} 
                            className='font-semibold flex-grow truncate hover:underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                                Some long long text :- Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt eaque eligendi dolorum ex. Magnam pariatur et unde, facere ducimus placeat expedita vero explicabo reiciendis, doloremque officiis, facilis debitis itaque. Suscipit.
                            </a>
                        <button className='flex-shrink-0 ml-0 truncate text-sm bg-gray-900 text-white tracking-wider font-semibold rounded-md shadow-lg drop-shadow-lg py-2 px-4 md:px-8 hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Copy
                        </button>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h5 className='lg:text-lg text-sm text-gray-500 font-semibold tracking-wider uppercase'>Username</h5>
                    <div className="font-semibold flex flex-row justify-between items-center py-2 md:py-4 space-x-3">
                        <span 
                            className='flex-grow truncate'
                        >
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, porro animi inventore sint placeat ipsam in expedita odit quisquam quam consequatur quas explicabo quod minima consectetur obcaecati? Quos, enim aspernatur!
                        </span>
                        <button className='flex-shrink-0 ml-0 truncate text-sm bg-gray-900 text-white tracking-wider font-semibold rounded-md shadow-lg drop-shadow-lg py-2 px-4 md:px-8 hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Copy
                        </button>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h5 className='lg:text-lg text-sm text-gray-500 font-semibold tracking-wider uppercase'>Password</h5>
                    <div className="font-semibold flex flex-row justify-between items-center py-2 md:py-4 space-x-3">

                        {showPassword && (
                            <div className='whitespace-no-wrap leading-5 flex-grow truncate flex-shrink-0 space-x-2 flex'>
                                <span>admin</span>
                                <EyeOffIcon 
                                    onClick={handleShowPassword}
                                    className='cursor-pointer align-middle h-5 w-5 font-semibold text-gray-700'
                                />
                            </div>
                        )}

                        {!showPassword && (
                            <div className='whitespace-no-wrap leading-5 flex-grow truncate space-x-2 flex'>
                                <span className='flex-grow truncate'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi deserunt quod excepturi dolore alias rerum distinctio ipsum eligendi earum animi? Praesentium, sit consequatur libero maxime deserunt consequuntur illo doloremque provident?</span>
                                <EyeIcon 
                                    onClick={handleShowPassword}
                                    className='flex-shrink-0 cursor-pointer align-middle h-5 w-5 font-semibold text-gray-700'
                                />
                            </div>
                        )}

                        <button className='flex-shrink-0 ml-0 truncate text-sm bg-gray-900 text-white tracking-wider font-semibold rounded-md shadow-lg drop-shadow-lg py-2 px-4 md:px-8 hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Copy
                        </button>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 w-full mt-4 space-y-2 lg:text-normal text-sm text-gray-500 font-semibold tracking-wider">
                <p>Created: September 6, 2021</p>
                <p>Last modified: September 6, 2021</p>
                <p>Last used: December 19, 2021</p>
            </div>

        </React.Fragment>
        
    );
}

PageContent.propTypes = {
    
};

PageContent.defaultProps = {
    
};

export default PageContent;