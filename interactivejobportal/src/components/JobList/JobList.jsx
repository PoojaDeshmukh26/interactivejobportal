import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchJobs = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('', {
                params: {
                    publisher: process.env.REACT_APP_INDEED_API_KEY,
                    q: filter || '',
                    l: 'USA', 
                    format: 'json',
                    v: '2',
                    limit: 10,
                },
            });
            setJobs(response.data.results);
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
        <div className="container mx-auto p-6 ">
            <h1 className="text-3xl font-bold mb-4">Job For You</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search for jobs..."
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border rounded p-2 mr-2"
                />
                <button onClick={fetchJobs} className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
                    Search
                </button>
            </div>
            {loading && <p>Loading jobs...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <div key={job.jobkey} className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-xl font-semibold">{job.jobtitle}</h2>
                        <p className="text-gray-700">{job.company}</p>
                        <p className="mt-2 text-gray-500">{job.snippet}</p>
                        <a href={job.url} target="_blank" rel="noopener noreferrer" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Apply
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobList;
