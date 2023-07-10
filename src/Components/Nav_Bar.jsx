import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useDispatch, useSelector } from 'react-redux';



function Nav_Bar() {
    const [isOpen, setIsOpen] = useState(false);
    const Data = useSelector(state => state) 
    const dispatch = useDispatch();

    const logout = ()=>{
        dispatch({
            type:"Logout"
        })
    }
    return (
        <div>
            <nav className="bg-black  w-full fixed top-0 z-[999] ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                        <div className="flex items-center justify-between h-16 ">
                            <Link to='/'>
                                <div className="flex-shrink-0 flex ">

                                    <img
                                        className="h-12 w-15"
                                        src="https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png"
                                        alt="Github"
                                    />
                                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">GitHub</span>

                                </div>
                            </Link>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-center  space-x-4">
                                    <Link to='search'

                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        <div class="relative hidden md:block">
                                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                </svg>
                                                <span class="sr-only">Search icon</span>
                                            </div>
                                            
                                            <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."  disabled />
                                           
                                        </div>
                                    </Link>
                                    <Link to='/'

                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </Link>



                                    <Link
                                        to='/profile'
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Profile
                                    </Link>
          
                                    <div className='flex text-white items-center'>
                                    <img class="w-10 h-10 rounded-full" src={Data.user.avatar_url} alt="Rounded avatar"/>

                                        <p className='px-2'>{Data.user.login}</p>
                        
                                    </div>
                                    <Link 
                                     
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        onClick={logout}
                                    >
                                    Logout</Link>
                                </div>
              
                            
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden " id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to='search'
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Search
                                </Link>

                                <Link
                                    to='/'
                                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </Link>





                                <Link
                                    to='/profile'
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Profile
                                </Link>

                                <Link
                                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                onClick={logout}

                                >
                                Logout
                                </Link>


                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Nav_Bar