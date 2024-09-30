import React, { useState } from 'react';
import JobList from '../JobList/JobList';
import JobDetails from '../JobDetails/JobDetails';

const Home = () => {
    const [selectedJob, setSelectedJob] = useState(null);

    return (
        <>
        <div className="container mx-auto p-6">
            <JobList onJobSelect={setSelectedJob} />
            {selectedJob && <JobDetails jobId={selectedJob} />}
        </div>
        </>
    );
};

export default Home;
