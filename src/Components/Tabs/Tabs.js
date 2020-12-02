import React, {useState, useEffect} from 'react';
import items from "./items";
import './Tabs.css';

export default function Tabs() {
    const [loading, setloading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const featchJob = () => {
    const newJob = items;
    setJobs(newJob);
    setloading(false);
  }

  useEffect(()=> {
    featchJob();
  }, []);

  if(loading){
    return <h1>Loading....</h1>
  }

  const { company, designation, time, response } = jobs[value];
  
  return (
    <div className="tab-app">
      <h1>Job's History</h1>
      <nav className="tab-nav">
        <ul>
          {jobs.map((job, index) => {
            return <li key={job.id} onClick={()=>setValue(index)} className={`${index === value && 'activeClass'}`}>{job.company}</li>
          })}
        </ul>
      </nav>
      <section>
          <h3>{company}</h3>
          <h4>{designation}</h4>
          <p>{time}</p>
          <ul className="tab-list">
            {response.map((res,index) => {
              return <li key={index}>{res}</li>
            })}
          </ul>
        </section>
    </div>
  );
}
