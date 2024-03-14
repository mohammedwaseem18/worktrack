import React, { useEffect, useState } from "react";
import "./AdminDashboard.css"; // Import CSS file for styling
import AddEmployee from "./AddEmployee"; // Import AddEmployee component
import EmployeeList from "./EmployeeList"; // Import EmployeeList component
import EmployeeRequests from "./EmployeeRequests"; // Import EmployeeRequests component
import CompletedTask from "./CompletedTask"; // Import CompletedTask component
import Avatar from "@mui/material/Avatar"; // Import Avatar component from Material-UI

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import MedicalInformationOutlinedIcon from "@mui/icons-material/MedicalInformationOutlined";
import HolidayVillageOutlinedIcon from "@mui/icons-material/HolidayVillageOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../apiCalls";
import { Link } from "react-router-dom";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const getUserDetails = async () => {
    const res = await getUser();
    setUser(res.user);
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  const [showAddEmployeePanel, setShowAddEmployeePanel] = useState(false);
  const [showEmployeeList, setShowEmployeeList] = useState(false);
  const [showEmployeeRequests, setShowEmployeeRequests] = useState(false);
  const [showCompletedTask, setShowCompletedTask] = useState(false); // Added state for CompletedTask

  const toggleAddEmployeePanel = () => {
    setShowAddEmployeePanel(!showAddEmployeePanel);
    setShowEmployeeList(false);
    setShowEmployeeRequests(false);
    setShowCompletedTask(false); // Close CompletedTask component
  };

  const toggleEmployeeList = () => {
    setShowEmployeeList(!showEmployeeList);
    setShowAddEmployeePanel(false);
    setShowEmployeeRequests(false);
    setShowCompletedTask(false); // Close CompletedTask component
  };

  const toggleEmployeeRequests = () => {
    setShowEmployeeRequests(!showEmployeeRequests);
    setShowAddEmployeePanel(false);
    setShowEmployeeList(false);
    setShowCompletedTask(false); // Close CompletedTask component
  };

  const toggleCompletedTask = () => {
    setShowCompletedTask(!showCompletedTask);
    setShowAddEmployeePanel(false);
    setShowEmployeeList(false);
    setShowEmployeeRequests(false);
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // Handle the file upload, e.g., save it to state or send it to the server
    console.log("Uploaded file:", file);
  };

  return (
    <div className="admin-dashboard-container">
      <div className="left-panel">
        <div className="logo">
          <label htmlFor="avatar-upload">
            <Avatar sx={{ width: 100, height: 80 }}>
              <img
                height="100%"
                width="100%"
                src={user?.profile_image}
                alt=""
              />
            </Avatar>
            <span style={{ fontWeight: "bold", color: "white" }}>
              {user?.name}
            </span>
            {/* Add margin for spacing */}
            <input
              type="file"
              id="avatar-upload"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="menu">
          <div className="menu-item" onClick={toggleAddEmployeePanel}>
            <BadgeOutlinedIcon />
            <span>Add Employee</span>
          </div>
          <div className="menu-item" onClick={toggleEmployeeList}>
            <BadgeOutlinedIcon />
            <span>Employee List</span>
          </div>
          <div className="menu-item" onClick={toggleCompletedTask}>
            {/* Toggle CompletedTask visibility */}
            <AssignmentOutlinedIcon />
            <span>Tasks</span>
          </div>

          <div className="menu-item">
            <Link
              to="/chat"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ChatOutlinedIcon />
              <span>Chat</span>
            </Link>
          </div>
          <div className="menu-item">
            <MedicalInformationOutlinedIcon />
            <span>Health </span>
          </div>
          <div className="menu-item" onClick={toggleEmployeeRequests}>
            <HolidayVillageOutlinedIcon />
            <span>Requests</span>
          </div>

          <div className="menu-item">
            <AccountCircleOutlinedIcon />
            Profile
          </div>
          <div className="menu-item">
            <QuizOutlinedIcon />
            <span>F.A.Q</span>
          </div>
          <div
            className="menu-item"
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            <ExitToAppOutlinedIcon />
            LogOut
          </div>
        </div>
      </div>
      <div className="content">
        <div className="navbar">
          <div className="icons">
            <MessageIcon sx={{ width: 40, height: 40 }} />
            <NotificationsIcon sx={{ width: 40, height: 40 }} />
          </div>
        </div>
        <div className="panel">
          <div className="right-panel">
            {showAddEmployeePanel && <AddEmployee />}
            {showEmployeeList && <EmployeeList />}
            {showEmployeeRequests && <EmployeeRequests />}
            {showCompletedTask && <CompletedTask />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
