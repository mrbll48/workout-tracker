# FitSocials

## Table of Contents

- [Overview](#overview)
- [Technology Stack](#technology-stack)
- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Client-side](#client-side)
  - [Server-side](#server-side)
- [Features](#features)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

FitSocial is a MERN stack application that allows users to create, read, and manage their workout routines. The app also provides user authentication and the ability to interact with other users' workouts.

---

## Technology Stack

![Technologies](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Technologies](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Technologies](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Technologies](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Technologies](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Technologies](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Technologies](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

---
## Description

FitSocials is a comprehensive fitness platform designed to help users manage and optimize their exercise routines. With an intuitive interface and robust features, it offers the ability to track various workouts, monitor progress, and connect with other fitness enthusiasts. The application is built with a MERN stack, integrating MongoDB, Express.js, React, and Node.js, and utilizes Apollo Server for GraphQL API implementation. Secure authentication is in place for a personalized experience, and users can easily add, update, and view workouts. Whether you're a fitness newbie or an avid gym-goer, Workout FitSocials aims to make your fitness journey more efficient, streamlined, and interactive.

## Features

- User Authentication: Securely sign up and log in to personalize your workout experience.
- Workout Management: Easily add and track various types of workouts.
- Social Interaction: Connect with other users, share your progress, and even challenge friends.
- Personalized Dashboard: Get an overview of your workout statistics and upcoming schedules.



## Getting Started

### Prerequisites

- Node.js >= v14
- npm >= v6
- MongoDB >= v4

### Installation

1. Clone the repository

```
git clone https://github.com/mrbll48/workout-tracker.git
cd workout-tracker
```


2. Install the dependencies

 - Install dependencies for server 
```
cd server
npm install
```
- Install dependecies for client
```
cd ../client
npm install
```

3. Start the application

From the root directory:

```
npm run develop
```

This will start both the server and client concurrently.

---

## Usage

### Client-side

Navigate to `http://localhost:3000` to access the frontend of the application.

### Server-side

Server runs on `http://localhost:3001`.

---

## Features

- User Authentication
- CRUD operations for workouts
- User interactions (likes, comments)

---

## Scripts

- `npm start`: Starts the server (from `server` directory)
- `npm run watch`: Starts the server with nodemon for development (from `server` directory)
- `npm run start`: Starts the client-side development server (from `client` directory)
- `npm run build`: Builds the client for production (from `client` directory)
- `npm run develop`: Runs both client and server concurrently (from root directory)

---

## Credits

Special thanks to all contributors who worked on this project.

- [William Marks](https://github.com/mrbll48)
- [Jair Gomez](https://github.com/JairGH)
- [Steven Tovar-Contreras](https://github.com/s-tovar)
- [Chris Vinthaya](https://github.com/Chrisvithaya)
- [Lilia Hernandez](https://github.com/hdezlilia)


---

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.
