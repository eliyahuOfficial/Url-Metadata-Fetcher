# URL Metadata Fetcher

This project is a simple web application built with React and TypeScript that allows users to fetch and display metadata (title, description, and image) from a list of URLs.

## Features

- **Add URLs**: Users can input multiple URLs to fetch metadata.
- **Display Metadata**: The app retrieves and displays the title, description, and image associated with each URL.
- **Error Handling**: The app handles errors gracefully by displaying a placeholder image and error message when metadata cannot be retrieved.
- **Responsive UI**: The UI is styled using Tailwind CSS to ensure responsiveness across different devices.

## Technologies Used

### Frontend
-- **React**: A JavaScript library for building user interfaces.
-- **TypeScript**: A superset of JavaScript that adds static types.
-- **Axios**: A promise-based HTTP client for the browser and Node.js.
-- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
-- **Vite**: A fast build tool for modern web projects.

### Backend
-- **Express**: A minimal and flexible Node.js web application framework.
-- **TypeScript**: Used for static type definitions.
-- **Axios**: Used for making HTTP requests to external URLs.
-- **dotenv**: Loads environment variables from a .env file.
-- **Helmet**: Secures Express apps by setting various HTTP headers.
-- **CORS**: Allows cross-origin requests.
-- **Express-Rate-Limit**: Basic rate-limiting middleware for Express.

## Setup and Installation

To run this project locally, follow these steps:

-- Clone the repository:

   git clone https://github.com/eliyahuOfficial/Url-Metadata-Fetcher.git
   cd url-metadata-fetcher

### Backend Setup

-- Install the dependencies:

`npm i`

-- Run the server:

`npm run dev`


The backend server will start on http://localhost:8080.

### Frontend Setup

-- Install the dependencies:

`npm i`

-- Run the client:

`npm run dev`

The frontend application will start on http://localhost:5173.



The tests cover various scenarios, including:

Fetching metadata from valid URLs.
Handling invalid URLs.
Displaying appropriate error messages.
Ensuring that images, titles, and descriptions are displayed correctly.
Deployment


### Security
This project uses the following security best practices:

--- Helmet: Used to secure HTTP headers.
--- Rate Limiting: Implemented to prevent abuse by limiting the number of requests from a single IP address.


### License
This project is licensed under the MIT License. See the LICENSE file for more details.

Eliyahu Levi  
Email: [eliyahuofficialmusic@gmail.com](mailto:eliyahuofficialmusic@gmail.com)  
LinkedIn: [linkedin.com/in/eliyahuofficial](https://www.linkedin.com/in/eliyahuofficial/)

---

© 2024 Eliyahu Levi All Rights Reserved.

![alt text](URLMetadataFetcher.png)