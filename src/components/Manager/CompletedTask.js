import React, { useEffect, useState } from 'react';
import './CompletedTask.css';
import { getCompletedTasks } from '../../apiCalls';

const CompletedTask = () => {

   const [completedTasks, setCompleted] = useState([]);

  const getTasksStatus = async () => {
    const res = await getCompletedTasks();
    setCompleted(res.tasks);
  };

  useEffect(() => {
    getTasksStatus();
  }, []);

  return (
    <div className='completed-task'>

      {completedTasks.map((task, index) => (
        <div className='completed-task-container' key={index}>
          <p>{task.assignTo.name} has completed the {task.subject}</p>
        </div>
      ))}
    
   
    </div>
  );
};

export default CompletedTask;