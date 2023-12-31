import React, { useEffect, useState } from "react";
import "./counter.css";
import rocket from "./rocket.gif";
import society from "./society.gif";
const Counter = () => {
    const [endCounts, setEndCounts] = useState({
        yearInBusiness: 3,
        teamMembers: 30,
        happyClients: 500,
        projectsDone: 300,
        hoursWorked: 300,
      });
    
      const [counts, setCounts] = useState({
        yearInBusiness: 0,
        teamMembers: 0,
        happyClients: 0,
        projectsDone: 0,
        hoursWorked: 0,
      });
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCounts((prevCounts) => ({
            yearInBusiness: Math.min(prevCounts.yearInBusiness + 1, endCounts.yearInBusiness),
            teamMembers: Math.min(prevCounts.teamMembers + 1, endCounts.teamMembers),
            happyClients: Math.min(prevCounts.happyClients + 1, endCounts.happyClients),
            projectsDone: Math.min(prevCounts.projectsDone + 1, endCounts.projectsDone),
            hoursWorked: Math.min(prevCounts.hoursWorked + 1, endCounts.hoursWorked),
          }));
        }, 100);
    
        return () => clearInterval(interval);
      }, [endCounts]); // Add 'endCounts' to the dependency array
    
  return (
    <div className="dgmt_back_counter_container">
      |
      <div className="dgmt_up_container">
        <div className="dgmt_upSection">
          <div className="first_column">
            <div>
              <img src={rocket} alt="gif" />
            </div>
           <div className="text-div">
           <span className="count">{counts.yearInBusiness}+</span>
            <p>Year In Business</p>
           </div>

          </div>
          <div className="second_column">
            <div>
              <img src={society} alt="gif" />
            </div>
            <div className="text-div">
            <span className="count">{counts.teamMembers}+</span> <br/>
            <p>Team Members</p>
           </div>
          </div>
        </div>
      </div>
      <div className="dgmt_down_container">
        <div className="first_column">
          <div>
            <img src={rocket} alt="gif" />
          </div>
          <div className="text-div">
           <span className="count">{counts.happyClients}+</span> <br/>
            <p>Happy Clients</p>
           </div>

        </div>
        <div className="second_column">
          <div>
            <img src={society} alt="gif" />
          </div>
          <div className="text-div">
           <span className="count">{counts.projectsDone}+</span> <br/>
            <p>Projects Done</p>
           </div>
        </div>
        <div className="second_column">
          <div>
            <img src={society} alt="gif" />
          </div>
          <div className="text-div">
           <span className="count">{counts.hoursWorked}+</span> <br/>
            <p>Hours Worked</p>
           </div>
        </div>
        <div className="second_column">
          <div>
            <img src={society} alt="gif" />
          </div>
          <div className="text-div">
           <span className="count">24/7</span> <br/>
            <p>Support Available</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
