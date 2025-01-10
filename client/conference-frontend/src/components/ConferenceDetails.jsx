import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFeedback, submitFeedback, getConferences } from "../api/conferenceApi";

const ConferenceDetails = () => {
  const { id } = useParams();
  const [conference, setConference] = useState({});
  const [feedback, setFeedback] = useState("");
  const [existingFeedback, setExistingFeedback] = useState([]);

  useEffect(() => {
    const fetchConferenceDetails = async () => {
      try {
        const data = await getConferences();
        const selectedConference = data.find(c => c._id === id);
        setConference(selectedConference);
      } catch (error) {
        console.log("Error fetching conference details", error);
      }
    };
    fetchConferenceDetails();
  }, [id]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const data = await getFeedback(id);
        setExistingFeedback(data);
      } catch (error) {
        console.log("Error fetching feedback", error);
      }
    };
    fetchFeedback();
  }, [id]);

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    try {
      const feedbackData = { feedback }; // feedback text ko payload mein daalein
      await submitFeedback(id, feedbackData);
      alert("Feedback submitted!");
      setFeedback(""); // Form ko reset karein
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
      alert("Error submitting feedback.");
    }
  };
  

  return (
    <div>
      <h1>{conference.name}</h1>
      <p>{conference.description}</p>
      
      <h2>Feedback</h2>
      <form onSubmit={handleFeedbackSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback"
          required
        />
        <button type="submit">Submit Feedback</button>
      </form>

      <h3>Existing Feedback</h3>
      {existingFeedback.length ? (
        existingFeedback.map((item, index) => <p key={index}>{item.feedback}</p>)
      ) : (
        <p>No feedback yet.</p>
      )}
    </div>
  );
};

export default ConferenceDetails;
