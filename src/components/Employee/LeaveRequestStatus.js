import React, { useEffect, useState } from "react";
import "./LeaveRequestStatus.css";
import { getleaveStatus } from "../../apiCalls";

const LeaveRequestStatus = () => {
  const [allrequests, setAllrequests] = useState();
  const getRequests = async () => {
    const res = await getleaveStatus();
    setAllrequests(res.leaves);
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div className="status-task">
      {allrequests?.map((leave) => (
      <div className="status-task-container">
        <p>Your leave for {leave.type} have been {leave.status}</p>
      </div>
  
))}


      {/* <div className="status-task-container">
        <p>Waseem Your leave have been rejected</p>
      </div> */}
    </div>
  );
};

export default LeaveRequestStatus;
