# Student_Appointment_System

A RESTful API for managing student-professor appointments. This system allows professors to set their availability and students to book appointments based on available slots.

## Features
- **Add Availability**: Professors can define their available time slots.
- **Book Appointment**: Students can book appointments with professors if the slot is available.
- **Manage Availability**: Automatically updates the availability status after booking or cancellation.

## Prerequisites
Ensure the following tools are installed on your system:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) or another Prisma-compatible database

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/student_appointment_system.git
   cd student_appointment_system


   
### How to setup database

-use the .env.example for refrences

### How to run Locally

- npm run dev

# Build a Project
-docker build -it <image_name>:<tag>

# Run the docker images

- docker run -it -p 8080:8080 <image-name>:<tag>
