import React, { useEffect, useState } from 'react';
import './RequestLeave.css'
import { getUser, requestLeave } from '../../apiCalls';

const RequestLeave = () => {
    const [user, setUser] = useState();

  const getUserDetails = async () => {
    const res = await getUser();
    setUser(res.user);
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Send leave request to the server or perform necessary actions
    console.log('Leave request submitted:', { leaveType, startDate, endDate, reason });

     const res=await requestLeave({ type: leaveType, start_date:startDate, end_date: endDate, reason, requested_to: user.reporting_to });
    if(res.success){
      alert('requested leave successfully')
    }else{
      alert('leave request fail failed')
    }


    // Optionally, reset form fields

    setLeaveType('');
    setStartDate('');
    setEndDate('');
    setReason('');
  };

  return (
    <div className='leave'>
      <h1>Request Leave</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="leaveType">Leave Type:</label>
          <input
            type="text"
            id="leaveType"
            value={leaveType}
            onChange={(e) => setLeaveType(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="reason">Reason:</label>
          <textarea
            id="reason"
            rows="4"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
}

export default RequestLeave;

