import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobDetails = ({ jobId }) => {
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchJobDetails = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.get('https://api.indeed.com/ads/apisearch', {
                params: {
                    publisher:'969de56312msh7243fdbf5b21036p13e482jsnba190904fe3e',
                    jobkey: jobId,
                    format: 'json',
                    v: '2',
                },
            });
            setJob(response.data.results[0]); 
        } catch (err) {
            setError('Failed to fetch job details');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobDetails();
    }, [jobId]);

    if (loading) return <p>Loading job details...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!job) return <p>No job found.</p>;

    return (
        <div className="mt-6 p-4 border rounded">
            <h2 className="text-2xl font-bold">{job.jobtitle}</h2>
            <p className="text-lg">Company: {job.company}</p>
            <p className="mt-2">{job.snippet}</p>
            <a href={job.url} target="_blank" rel="noopener noreferrer" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Apply Now
            </a>
        </div>
    );
};

export default JobDetails;
