import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const handleCall = async () => {
    setError('');
    try {
      // Test Backend /hello endpoint
      const helloResponse = await fetch('http://backend-agent:8090/hello');
      if (!helloResponse.ok) throw new Error('Backend /hello endpoint failed');
      const helloData = await helloResponse.json();
      setMessage(helloData.message);

      // Test Backend /users endpoint (connected to database)
      const usersResponse = await fetch('http://backend-agent:8090/users');
      if (!usersResponse.ok) throw new Error('Backend /users endpoint failed');
      const usersData = await usersResponse.json();
      setUsers(usersData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the React Frontend</h1>
        <button onClick={handleCall} className="call-button">
          Call Backend and Database
        </button>
        {error && <p className="error">{error}</p>}
        {message && <p>{message}</p>}
        <h2>Users from Database</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;