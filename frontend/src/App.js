import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [backendResponse, setBackendResponse] = useState('');
  const [dbResponse, setDbResponse] = useState('');

  const callBackend = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/hello');
      setBackendResponse(response.data.message);
    } catch (error) {
      setBackendResponse('Error calling backend');
    }
  };

  const callDatabase = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/db');
      setDbResponse(response.data.message);
    } catch (error) {
      setDbResponse('Error calling database');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Full Stack Demo</h1>
        <div className="space-y-4">
          <button
            onClick={callBackend}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Call Backend
          </button>
          <p className="text-gray-600 text-center">{backendResponse || 'No response yet'}</p>
          <button
            onClick={callDatabase}
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Call Database
          </button>
          <p className="text-gray-600 text-center">{dbResponse || 'No response yet'}</p>
        </div>
      </div>
    </div>
  );
}

export default App;