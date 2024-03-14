import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button components from react-bootstrap
import { assignTask, getAllMentees } from "../../apiCalls";

function EmployeeList() {
  const [showModal, setShowModal] = useState(false); // State variable for controlling modal visibility
  const [taskDescription, setTaskDescription] = useState(""); // State variable to store task description
  const [subject, setSubject] = useState(""); // State variable to store task subject
  const [deadline, setDeadline] = useState(""); // State variable to store task deadline
  const [assignUserId, setAssignUserId] = useState(); // State variable to store task deadline

  const [mentees, setMentees] = useState([]);

  const getMentees = async () => {
    const res = await getAllMentees();
    setMentees(res.mentees);
  };

  useEffect(() => {
    getMentees();
  }, []);
  const handleAssignTask = (userId) => {
    // Handle task assignment for the specific user
    console.log(`Assign task for user with ID: ${userId}`);
    setAssignUserId(userId)
    setShowModal(true); // Show the modal when the button is clicked
  };

  const handleTaskSubmission = async() => {
    // Handle task submission
    console.log("Task Subject:", subject);
    console.log("Task Description:", taskDescription);
    console.log("Task Deadline:", deadline);
    setShowModal(false); 

    const res=await assignTask({ subject, description: taskDescription, deadline, assign_to: assignUserId });
    if(res.success){
      alert('Task assigned successfully')
    }else{
      alert('Task assigned failed')
    }

  };

  return (
    <div className="waseem">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {mentees.map((mentee, index) => (
          <tbody key={mentee._id}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{mentee.name}</td>
              <td>{mentee.position}</td>
              <td>{mentee.email}</td>
              <td>
                <button
                  onClick={() => handleAssignTask(mentee.id)}
                  className="btn btn-primary"
                >
                  Assign Task
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Assign Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskDescription">Task Description:</label>
            <textarea
              id="taskDescription"
              className="form-control"
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              rows={5}
            />
          </div>
          <div className="form-group">
            <label htmlFor="deadline">Deadline:</label>
            <input
              type="date"
              id="deadline"
              className="form-control"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleTaskSubmission}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EmployeeList;
