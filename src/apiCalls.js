const BASE_URL = "https://ems-backend-w5vv.onrender.com";
const callApi = async (endpoint, method, body, token) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["x-auth-token"] = token;
    }

    const requestOptions = {
      method: method,
      headers: headers,
    };

    if (body !== null) {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}/${endpoint}`, requestOptions);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { success: false, errors: "Internal Server Error" };
  }
};


export const loginUser = async (userData) => {
  return callApi("auth/user-login", "POST", userData);
};
export const getAllMentees = async () => {
  return callApi("ems/get-all-employee", "GET", null, localStorage.getItem("user-token"));
};

export const getUser = async () => {
  return callApi("auth/get-user", "GET", null, localStorage.getItem("user-token"));
};

export const assignTask = async (body) => {
  return callApi("ems/assign-task", "POST", body, localStorage.getItem("user-token"));
};

export const getassignedTask = async () => {
  return callApi("ems/get-assigned-task", "GET", null, localStorage.getItem("user-token"));
};

export const submitTask = async (body) => {
  return callApi("ems/submit-task", "POST", body, localStorage.getItem("user-token"));
};

export const getCompletedTasks = async () => {
  return callApi("ems/get-task-status", "GET", null, localStorage.getItem("user-token"));
};

export const requestLeave = async (body) => {
  return callApi("ems/request-leave", "POST", body, localStorage.getItem("user-token"));
};

export const getAllLeaveRequests = async () => {
  return callApi("ems/get-all-leaves", "GET", null, localStorage.getItem("user-token"));
};

export const approveLeave = async (body) => {
  return callApi("ems/approve-leave", "POST", body, localStorage.getItem("user-token"));
};

export const rejectLeave = async (body) => {
  return callApi("ems/reject-leave", "POST", body, localStorage.getItem("user-token"));
};

export const getleaveStatus = async () => {
  return callApi("ems/get-leaves-status", "GET", null, localStorage.getItem("user-token"));
};
