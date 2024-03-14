import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap"; // Import Modal and Button components from react-bootstrap
import "./EmployeeRequests.css";
import { approveLeave, getAllLeaveRequests, rejectLeave } from "../../apiCalls";

const EmployeeRequests = ({
}) => {
  const [showModal, setShowModal] = useState(false);

  const [allrequests, setAllrequests] = useState();
  const [selectedrequest, setSelectedRequest] = useState();
  const getRequests = async () => {
    const res = await getAllLeaveRequests();
    setAllrequests(res.leaves);
  };

  useEffect(() => {
    getRequests();
  }, []);

  const handleViewRequest = (request) => {
    setShowModal(true);
    setSelectedRequest(request);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAcceptLeave = async() => {
    // Add logic for accepting leave request
    await approveLeave({ leave_id: selectedrequest.id })
    getRequests();
    setShowModal(false);
  };

  const handleRejectLeave = async () => {
    // Add logic for rejecting leave request
    await rejectLeave({ leave_id: selectedrequest.id })
    getRequests()
    setShowModal(false);
  };

  return (
    <div className="leave">
      {allrequests?.map((request, index) => (
        <div className="received-task-container" key={index}>
          <div className="text-and-buttons">
            <div className="requester-text">
              <p>
                <strong>
                  There's a request from {request.requestedBy.name}
                </strong>
              </p>
            </div>
            <div className="button-container">
              <button
                onClick={() => handleViewRequest(request)}
                className="view-request-button"
              >
                View Request
              </button>
            </div>
          </div>
        </div>
      ))}

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Leave Request Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Leave Type:</strong> {selectedrequest?.type}
          </p>
          <p>
            <strong>Start Date:</strong> {selectedrequest?.start_date}
          </p>
          <p>
            <strong>End Date:</strong> {selectedrequest?.end_date}
          </p>
          <p>
            <strong>Reason:</strong> {selectedrequest?.reason}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleAcceptLeave}>
            Accept Leave
          </Button>
          <Button variant="danger" onClick={handleRejectLeave}>
            Reject Leave
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EmployeeRequests;
