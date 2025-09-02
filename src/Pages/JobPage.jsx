import React from 'react';
import { useLoaderData, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import{toast} from "react-toastify";

const JobPage = ({deleteJob}) => {
    const job = useLoaderData();
    const navigate = useNavigate();

    const onDeleteClick = (jobId) => {
        const confirm = window.confirm('Are you sure you want to delete this job?');
        if (!confirm) return;
        deleteJob(jobId);
        toast.success('Job Deleted Successfully !');
        navigate('/jobs')
    }

    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/jobs"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Job Listings
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    {/* 2 Spalten Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Linke Spalte (2/3) */}
                        <div className="md:col-span-2 space-y-6">
                            {/* Job Kopf */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-gray-500 mb-2">{job.type}</div>
                                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                                <div className="flex items-center text-gray-500">
                                    <FaMapMarker className="text-orange-700 mr-1" />
                                    <span className="text-orange-700">{job.location}</span>
                                </div>
                            </div>

                            {/* Job Description */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-indigo-800 text-lg font-bold mb-4">
                                    Job Description
                                </h3>
                                <p className="mb-4">{job.description}</p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>
                                <p>{job.salary} / Year</p>
                            </div>
                        </div>

                        {/* Rechte Spalte (1/3) */}
                        <div className="space-y-6">
                            {/* Company Info */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                                <h2 className="text-2xl">{job.company.name}</h2>
                                <p className="my-2">{job.company.description}</p>
                                <hr className="my-4" />
                                <h3 className="text-xl">Contact Email:</h3>
                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {job.company.contactEmail}
                                </p>
                                <h3 className="text-xl">Contact Phone:</h3>
                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {job.company.contactPhone}
                                </p>
                            </div>

                            {/* Manage Job */}
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                                <Link
                                    to={`/jobs/edit/${job.id}`}
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full block"
                                >
                                    Edit Job
                                </Link>
                                <button onClick={() => onDeleteClick(job.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4 block"
                                >
                                    Delete Job
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
};

export default JobPage;
