import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./ReceivedTask.css";
import { getassignedTask, submitTask } from "../../apiCalls";

const ReceivedTask = ({ subject, description, deadline, id, getTasks }) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewTask = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmitTask = async() => {
    console.log("Task Submitted!");
    setShowModal(false);
    await submitTask({ task_id: id });
    alert('task submitted successfully')
    getTasks();
  };

  return (
    <div className="tasks">
      <div className="taskCard">
        <div className="taskHeader">
          <p className="greeting">you have a new task</p>
          <button className="viewTaskButton" onClick={handleViewTask}>
            View Task
          </button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Task Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="taskDescription">
            <p>
              <strong>Subject:</strong> {subject}
            </p>
            <p>
              <strong>Task Description:</strong> {description}
            </p>
            <p>
              <strong>Deadline:</strong> {deadline}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitTask}>
            Submit Task
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const res = await getassignedTask();
    setTasks(res.tasks);
  };

  useEffect(() => {
    getTasks();
  }, []);
  return (
    <div>
      {tasks.map((task) => (
        <ReceivedTask
          subject={task.subject}
          description={task.description}
          deadline={task.deadline}
          id={task.id}
          getTasks={getTasks}
        />
      ))}
    </div>
  );
};

export default TaskList;
