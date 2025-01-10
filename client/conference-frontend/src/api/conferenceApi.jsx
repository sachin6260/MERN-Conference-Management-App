import axios from 'axios';

const API_URL = "http://localhost:5000/api/conferences";

// Fetch all conferences
export const getConferences = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching conferences:", error);
    throw error;
  }
};

 // Register for a conference
export const registerForConference = async (id, registrationData) => {
    try {
      // Make the POST request to register the user for the conference
      const response = await axios.post(`${API_URL}/${id}/register`, registrationData);
  
      // Check if the response is successful
      if (response.status === 201) {
        console.log("Registration Successful:", response.data);
      } else {
        console.error("Registration failed with status code:", response.status);
      }
  
      return response.data; // Return the registration data
    } catch (error) {
      console.error("Error registering for conference:", error.message);
  
      // If the error response has more details, log it
      if (error.response) {
        console.error("Error response:", error.response.data);
      }
  
      throw error; // Rethrow the error to be handled by the calling function
    }
  };
  

// Get feedback for a conference
export const getFeedback = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}/feedback`);
    return response.data;
  } catch (error) {
    console.error("Error fetching feedback:", error);
    throw error;
  }
};

// Submit feedback for a conference
export const submitFeedback = async (id, feedbackData) => {
  try {
    const response = await axios.post(`${API_URL}/${id}/feedback`, feedbackData);
    return response.data;
  } catch (error) {
    console.error("Error submitting feedback:", error);
    throw error;
  }
};

// Add a new conference
export const addConference = async (conferenceData) => {
  try {
    const response = await axios.post(API_URL, conferenceData);
    return response.data;
  } catch (error) {
    console.error("Error adding conference:", error);
    throw error;
  }
};

// Update a conference
export const updateConference = async (id, conferenceData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, conferenceData);
    return response.data;
  } catch (error) {
    console.error("Error updating conference:", error);
    throw error;
  }
};

// Delete a conference
export const deleteConference = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting conference:", error);
    throw error;
  }
};

// Get registrations for a conference
export const getRegistrations = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}/registrations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching registrations:", error);
    throw error;
  }
};
