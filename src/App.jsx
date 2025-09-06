import React, { useState } from "react";

import { jobfilter, jobsearch, jobsort } from "./logic/SortFuncs";

import Job from  "./logic/Job";

//npx parcel src/public/index.html
//npx electron .

// simple Job "card" component
function JobCard({ job, onDelete }) {
  return (
    <div style={{ border: "1px solid gray", padding: "8px", marginBottom: "6px" }}>
      <h3>{job.name}</h3>
      <p>Company: {job.company}</p>
      <p>Status: {job.status}</p>
      <button onClick={onDelete}>View Info</button>
    </div>
  );
}

export default function App() {
  // state: keep an array of jobs in memory
  const [jobs, setJobs] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newCompany, setNewCompany] = useState("");

  // add a new job
  const addJob = () => {
    if (!newTitle || !newCompany) return; // ignore empty
    const job = {
      name: newTitle,
      company: newCompany,
      status: "applied",
    };
    setJobs([...jobs, job]); // spread operator = copy + add new
    setNewTitle("");
    setNewCompany("");
  };

  // delete a job by index
  const deleteJob = (index) => {
    setJobs(jobs.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Job Tracker</h1>

      {/* add job form */}
      <div style={{ marginBottom: "12px" }}>
        <input
          type="text"
          placeholder="Sort by..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={() => setJobs(jobsort(jobs, newTitle))}>Sort</button>
        <input
          type="text"
          placeholder="Fitler by..."
          value={newCompany}
          onChange={(e) => setNewCompany(e.target.value)}
        />
        <button onClick={addJob}>Filter</button>
        <button onClick={addJob}>Add Job</button>
      </div>

      {/* list of jobs */}
      <div>
        {jobs.length === 0 ? (
          <p>No jobs yet</p>
        ) : (
          jobs.map((job, i) => (
            <JobCard key={i} job={job} onDelete={() => deleteJob(i)} />
          ))
        )}
      </div>
    </div>
  );
}