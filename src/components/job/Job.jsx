/* eslint-disable react/prop-types */

import { MdOutlineLocationOn } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi";
const Job = ({ job }) => {
    return (
        <div>
            <div className="card card-compact h-[300px] w-[400px] bg-base-100 shadow-xl">
                <figure><img src={job.logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job.job_title}</h2>
                    <p>{job.company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold border-1px rounded-xl bg-[#7E90FE] border-[#7E90FE] mr-4 gap-5">{job.remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold border-1px rounded-xl bg-[#7E90FE] border-[#7E90FE] mr-4 gap-5">{job.job_type}</button>
                    </div>
                    <div className="mt-4 flex">
                        <h2 className="flex mr-4" ><MdOutlineLocationOn className="text-2xl mr-2"></MdOutlineLocationOn>{job.location}</h2>
                        <h2 className="flex"><HiCurrencyDollar className="text-2xl"></HiCurrencyDollar>{job.salary}</h2>
                    </div>
                    <div className="card-actions justify-end">
                        <link to={`/job/${job.id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;