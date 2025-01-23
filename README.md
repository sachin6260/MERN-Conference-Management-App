# Conference Management Application

## Project Overview
The Conference Management Application is a full-stack web platform that enables administrators to seamlessly manage conferences. The application supports adding, updating, and deleting conferences while providing detailed insights into registrations and feedback. It is built using the MERN stack, ensuring robust functionality and a user-friendly interface.

---

## Features

### Admin Dashboard
- **Dynamic Conference Management**: Add, update, and delete conferences using an intuitive UI.
- **View Registrations**: Display a list of users registered for specific conferences.
- **Feedback Management**: View feedback submitted by participants.
- **Validation and Alerts**: Ensures all fields are filled before submission, with appropriate messages for empty states.

### Registrations
- **Detailed User Information**: View user details like name and email.
- **Dynamic Loading**: Fetch and display registrations dynamically based on selected conferences.

### Feedback
- **Participant Feedback**: Collect and display feedback for each conference.

### User Experience
- **Responsive Design**: Optimized for devices of all sizes.
- **Interactive UI**: Smooth transitions and validations for enhanced usability.

---

## Technologies Used

### Frontend
- **React.js**: For building reusable components and managing the UI.
- **CSS**: Styled components for an interactive and visually appealing design.

### Backend
- **Node.js**: Backend server and API development.
- **Express.js**: Routing and middleware management.

### Database
- **MongoDB**: Storage and retrieval of conference, registration, and feedback data.

### Tools
- **Axios**: For handling HTTP requests.
- **Postman**: API testing and debugging.

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn
- MongoDB (local or cloud instance)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/conference-management-app.git
   cd conference-management-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Run the Server**
   ```bash
   npm start
   ```

5. **Run the Frontend**
   Navigate to the `client` folder and start the React development server:
   ```bash
   cd client
   npm start
   ```

6. **Access the Application**
   Open your browser and navigate to `http://localhost:3000`.

---

## File Structure
```
.
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── AdminDashboard.js
│   │   │   ├── Registrations.js
│   │   │   └── Feedback.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   ├── package.json
│   └── .env
├── server
│   ├── models
│   │   ├── Conference.js
│   │   ├── Registration.js
│   │   └── Feedback.js
│   ├── routes
│   │   ├── conferenceRoutes.js
│   │   ├── registrationRoutes.js
│   │   └── feedbackRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── README.md
```

---

## API Endpoints

### Conferences
- **GET /api/conferences**: Fetch all conferences.
- **POST /api/conferences**: Add a new conference.
- **DELETE /api/conferences/:id**: Delete a conference by ID.

### Registrations
- **GET /api/registrations/:conferenceId**: Fetch registrations for a specific conference.

### Feedback
- **GET /api/feedback/:conferenceId**: Fetch feedback for a specific conference.

---

## Future Enhancements
- Implement user authentication for secure access.
- Add export functionality for registrations and feedback.
- Include analytics for conference performance.

---

## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute as per the terms of the license.

---

## Contact
For questions or suggestions, feel free to reach out:
- **Email**: sachinchoudharyweb62@gmail.com
- **Linkedin**: https://www.linkedin.com/in/sachin-choudhary-68925b251/
 
