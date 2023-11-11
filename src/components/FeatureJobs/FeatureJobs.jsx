import { useEffect, useState } from "react";
import Job from "../job/Job";
import { data } from "autoprefixer";

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-4xl">Featured Jobs :{jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className="grid grid-cols-2 gap-5 ">
                    {
                        jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
                    }
                </div>
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureJobs;