import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-evenly  items-center">
                <Link to="/" className="text-white text-lg font-bold">Job Search</Link>
                <div>
                    <Link to="/" className="text-white mx-2">Home</Link>
                    <Link to="/companyreview" className="text-white mx-2">Company Review</Link>
                    <Link to="/salaryguide" className="text-white mx-2">Salary Guide</Link>
                 
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
