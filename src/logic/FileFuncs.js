import fs from "fs";
import path from "path";
import Job from "./Job.js"; // adjust if Job.js lives elsewhere

// Path to the JSON file
const JOBS_FILE = path.resolve("../data/jobs.json");

// Save jobs to jobs.json
export function saveJobsToFile(jobs) {
  const jsonData = jobs.map(job => job.toJSON());
  fs.writeFileSync(JOBS_FILE, JSON.stringify(jsonData, null, 2), "utf-8");
}

// Load jobs from jobs.json
export function loadJobsFromFile() {
  if (!fs.existsSync(JOBS_FILE)) {
    return [];
  }
  const data = fs.readFileSync(JOBS_FILE, "utf-8");
  const parsed = JSON.parse(data);
  return parsed.map(jobData => new Job(jobData));
}