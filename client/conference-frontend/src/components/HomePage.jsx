import React, { useState, useEffect } from "react";
import { getConferences, registerForConference } from "../api/conferenceApi";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [conferences, setConferences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedConferenceId, setSelectedConferenceId] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);  

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const data = await getConferences();
        setConferences(data);
      } catch (error) {
        console.log("Error fetching conferences", error);
      } finally {
        setLoading(false);
      }
    };
    fetchConferences();
  }, []);

  const handleRegister = async (conferenceId) => {
    if (!userName || !email) {
      alert("Please enter both your name and email.");
      return;
    }

    const userRegistrationData = {
      userName: userName,
      email: email,
    };

    try {
      const registration = await registerForConference(conferenceId, userRegistrationData);
      console.log("User Registered:", registration);
      alert("Registered successfully!");
      setIsRegistered(true); // Set registration status to true
    } catch (error) {
      alert("Error registering for conference.");
    }
  };

  return (
    <div>
      <h1>Conferences</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        conferences.map((conference) => (
          <div key={conference._id}>
            <h3>{conference.name}</h3>
            <p>{conference.description}</p>
            <Link to={`/conference/${conference._id}`}>View Details</Link>
            <button onClick={() => setSelectedConferenceId(conference._id)}>
              Select Conference
            </button>
          </div>
        ))
      )}

      {/* Registration Form */}
      {selectedConferenceId && !isRegistered && (
        <div>
          <h2>Register for Conference</h2>
          <form onSubmit={(e) => { e.preventDefault(); handleRegister(selectedConferenceId); }}>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                />
              </label>
            </div>
            <div>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </label>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      )}

      {/* Show confirmation message */}
      {isRegistered && (
        <div>
          <h2>Thank you for registering!</h2>
          <p>You have successfully registered for the conference.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
