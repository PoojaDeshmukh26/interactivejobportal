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
            const response = await axios.get('https://jsearch.p.rapidapi.com/job-details', {
                params: {
                    job_id: jobId,
                },
                headers: {
                    'X-RapidAPI-Key': 'ce2813bb6emsh4b1bbdd2c7d7af0p1bb900jsnadf33d3f1d07',   // Replace with your env variable
                    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
                },
            });
            setJob(response.data.data[0]);  // Ensure correct data structure according to API
        } catch (err) {
            setError('Failed to fetch job details');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (jobId) {
            fetchJobDetails();
        }
    }, [jobId]);

    if (loading) return <p>Loading job details...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!job) return <p>No job found.</p>;

    return (
        <div className="mt-6 p-4 border rounded">
            <h2 className="text-2xl font-bold">{job.job_title}</h2>
            <p className="text-lg">Company: {job.employer_name}</p>
            <p className="mt-2">{job.description}</p>
            <a href={job.job_apply_link} target="_blank" rel="noopener noreferrer" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Apply Now
            </a>
        </div>
    );
};

export default JobDetails;
