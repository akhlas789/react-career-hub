import { useEffect, useState } from "react";
import Job from "../job/Job";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl">Featured Jobs :{jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-2 gap-5 ">
                    {
                        jobs.map(job => <Job job={job} key={job.id}></Job>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeatureJobs;