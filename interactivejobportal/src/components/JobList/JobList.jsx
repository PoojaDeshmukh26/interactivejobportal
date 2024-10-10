import React, { useEffect, useState } from 'react';
import axios from 'axios';

//imported Icons from React Icons ----->
import {AiOutlineSearch} from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchJobs = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('https://jsearch.p.rapidapi.com/search', { // Add the correct API endpoint
                params: {
                    query: filter || 'developer',  // The job title or search query
                    location: 'USA',  // The location, you can change this dynamically
                    limit: 10,  // Limit the results
                },
                headers: {
                    'X-RapidAPI-Key': 'ce2813bb6emsh4b1bbdd2c7d7af0p1bb900jsnadf33d3f1d07',  // Your API Key in .env
                    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
                },
            });
            setJobs(response.data.data);  // Assuming the API response structure
        } catch (err) {
            setError('Failed to fetch jobs');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, [filter]);

   return (
        <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Job For You</h1>
        <div className= 'first Div flex justify-between items-center rounded-[8px] gap-[20px] bg-white p-5 shadow-lg shadow-greyish-700'>
        <div className='flex gap-2 items-center'>
    
            <AiOutlineSearch className='text.[30px] icon'/>
            <input type ='text' className='bg-transparent text-blue-500 focus :outline-none  w-[100%]'placeholder='Search for jobs...'/>
            
            
            </div>
            <div className='flex gap-2 items-center'>
            <BsHouseDoor className='text.[30px] icon'/>
            <input type ='text' className='bg-transparent text-blue-500 focus :outline-none  w-[100%]'placeholder="Search by Company..."/>
           
            
            </div>
            <div className='flex gap-2 items-center'>
            <CiLocationOn className='text.[30px] icon'/>
            <input type ='text' className='bg-transparent text-blue-500 focus :outline-none  w-[100%]'placeholder="Search by Location..."/>
            
            
            </div>
                </button>
            </div>
            {loading && <p>Loading jobs...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <div key={job.job_id} className="bg-white p-4 rounded shadow-md"> {/* Assuming job_id is the unique identifier */}
                        <h2 className="text-xl font-semibold">{job.job_title}</h2> {/* Updated to match expected API response */}
                        <p className="text-gray-700">{job.employer_name}</p> {/* Updated field */}
                        <p className="mt-2 text-gray-500">{job.description}</p> {/* Updated field */}
                        <a href={job.job_apply_link} target="_blank" rel="noopener noreferrer" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Apply
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobList;
