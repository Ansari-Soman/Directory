import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { cities } from './data'
import LocationSearch from './LocationSearch'
import { DirectoryContext } from '../Context'
import axios from 'axios';

const Header = () => {

    return (
        <header className="w-full bg-white shadow-md ">
            <div className="container mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo / Heading */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
                >
                    Maya Directory
                </Link>

                {/* Right side buttons */}
                <div className="flex items-center space-x-4">
                    <LocationSearch />
                    {/* Free Listing */}
                    <Link to='/listing' className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                        Free Listing
                    </Link>

                    {/* Login / Signup */}
                    <button className="px-4 py-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition">
                        Login / Sign Up
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
