import React from 'react'
import { Link } from 'react-router-dom';

 
   function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className='footer p-[10rem]  bg-blue-600 p-4 rounded-[10px]  gap-[8 ]grid
            grid-colos-5 m-auto items-center justify-center'> 
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-grey-900 uppercase">Resources</h2>
                            <ul className="text-grey-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
            
                                </li>
                                <li>
                                    <Link to="/companyreview" className="hover:underline">
                                        Company Review
                                    </Link>
                                
                                   
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-black-900 uppercase">Follow us</h2>
                            <ul className="text-black-500 font-medium">
                                <li className="mb-4">
                                <Link to="/" className="hover:underline">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Twitter
                                    </Link>
                                    
                                </li>
                            </ul>
                        </div>
                        <div>
    
                            <h2 className="mb-6 text-sm font-semibold text-grey-900 uppercase">Legal</h2>
                            <ul className="text-grey-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-grey-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-grey-500 sm:text-center">
                        © 2024
                        
                        . All Rights Reserved.
                    </span>
                </div>
            
            </footer>
             
             
              
           
        
    );
}

export default Footer;
