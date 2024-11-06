# Tree Data App

This project is a **Tree Data Management Application** that allows you to see data related to trees. It provides an API built with **FastAPI** and a front-end interface built with **React**. The backend uses a SQLite database to store tree information, and the frontend allows users to visualize the data.

## Features

- Store tree data including species, height, circumference, location, and more.
- View and update tree data via an API (FastAPI).
- Built with a React frontend for an interactive user experience.
- Data is stored in a SQLite database.
- Import CSV files containing tree data for easy database population.

## Project Structure

- **Backend**: 
  - **FastAPI** application handling the API and database interactions.
  - **SQLAlchemy** ORM for database operations.
  - **SQLite** as the database.
  - Includes CSV import functionality to populate the database.
  
- **Frontend**:
  - **React** application for displaying the demanded tree data.
  - Uses **Ant Design (antd)** for UI components to create a clean and responsive interface.
  
- **Database**:
  - SQLite database file `trees.db` stores the data of all trees.

## Installation

### Backend (FastAPI)

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/tree-data-app.git
   cd tree-data-app/backend

2. Create and activate a virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate
    
3. Install the backend dependencies:

    ```bash
    pip install -r requirements.txt

4. Run the backend server:

    ```bash
    uvicorn main:app --reload

The FastAPI backend will be accessible at http://127.0.0.1:8000.

### Frontend (React)

1. Navigate to the frontend directory & Install frontend dependencies:

    ```bash
    npm install

2. Start the React development server:

    ```bash
    npm start

The React frontend will be accessible at http://localhost:3000.


### Usage


You can access the API documentation at http://127.0.0.1:8000/docs after running the backend server.


### Import CSV Data:

Upon running the backend server, the backend automatically imports the tree data from the specified CSV file (e.g., trees.csv).
The trees.db SQLite database is created and populated with the data from the CSV file.


Use the React interface to view and manage the tree data. It provides an intuitive UI for interacting with the API and viewing tree details.
