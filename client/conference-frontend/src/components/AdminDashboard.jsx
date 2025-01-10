import React, { useState, useEffect } from "react";
import { addConference, deleteConference, getConferences, getRegistrations, getFeedback } from "../api/conferenceApi";

const AdminDashboard = () => {
  const [conferences, setConferences] = useState([]);
  const [newConference, setNewConference] = useState({ name: "", description: "" });
  const [registrations, setRegistrations] = useState(null); // State for registrations
  const [feedback, setFeedback] = useState(null); // State for feedback
  const [showRegistrations, setShowRegistrations] = useState(false); // State to toggle registrations visibility
  const [showFeedback, setShowFeedback] = useState(false); // State to toggle feedback visibility

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const data = await getConferences();
        setConferences(data);
      } catch (error) {
        console.log("Error fetching conferences", error);
      }
    };
    fetchConferences();
  }, []);

  const handleAddConference = async () => {
    if (!newConference.name.trim() || !newConference.description.trim()) {
      console.log("All fields are required.");
      return;
    }

    try {
      const createdConference = await addConference(newConference);
      setConferences([...conferences, createdConference]);
      setNewConference({ name: "", description: "" }); // Reset the fields
    } catch (error) {
      console.error("Error adding conference:", error.response ? error.response.data : error.message);
      alert("Failed to create conference. Please try again.");
    }
  };

  const handleDeleteConference = async (id) => {
    try {
      await deleteConference(id);
      setConferences(conferences.filter((conference) => conference._id !== id));
    } catch (error) {
      console.log("Error deleting conference", error);
    }
  };

  const handleViewRegistrations = async (id) => {
    try {
      const registrationsData = await getRegistrations(id);
      setRegistrations(registrationsData); // Store registrations in state
      setShowRegistrations(true); // Show registrations section
    } catch (error) {
      console.log("Error fetching registrations", error);
    }
  };

  const handleViewFeedback = async (id) => {
    try {
      const feedbackData = await getFeedback(id);
      setFeedback(feedbackData); // Store feedback in state
      setShowFeedback(true); // Show feedback section
    } catch (error) {
      console.log("Error fetching feedback", error);
    }
  };

  const handleCloseRegistrations = () => {
    setShowRegistrations(false); // Hide registrations section
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false); // Hide feedback section
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <input
        type="text"
        value={newConference.name}
        onChange={(e) => setNewConference({ ...newConference, name: e.target.value })}
        placeholder="Conference Name"
      />
      <textarea
        value={newConference.description}
        onChange={(e) => setNewConference({ ...newConference, description: e.target.value })}
        placeholder="Conference Description"
      />
      <button onClick={handleAddConference}>Add Conference</button>

      <h2>All Conferences</h2>
      {conferences.map((conference) => (
        <div key={conference._id}>
          <h3>{conference.name}</h3>
          <button onClick={() => handleDeleteConference(conference._id)}>Delete</button>
          <button onClick={() => handleViewRegistrations(conference._id)}>View Registrations</button>
          <button onClick={() => handleViewFeedback(conference._id)}>View Feedback</button>
        </div>
      ))}

      {/* Render Registrations */}
      {showRegistrations && (
        <div>
          <h2>Registrations for Conference</h2>
          {registrations && registrations.length > 0 ? (
            <div className="registration-list">
              {registrations.map((registration) => (
                <div key={registration._id} className="registration-card">
                  <h4>{registration.userName}</h4>
                  <p>Email: {registration.email}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No registrations available.</p>
          )}
          <button onClick={handleCloseRegistrations}>Close</button>
        </div>
      )}

      {/* Render Feedback */}
      {showFeedback && (
        <div>
          <h2>Feedback for Conference</h2>
          {feedback && feedback.length > 0 ? (
            <div className="feedback-list">
              {feedback.map((item, index) => (
                <div key={index} className="feedback-card">
                  <p>{item.feedback}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No feedback available.</p>
          )}
          <button onClick={handleCloseFeedback}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
