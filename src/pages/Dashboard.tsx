import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  // State to store username and password input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Hook to programmatically navigate to another route
  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    // Hardcoded credentials for admin login
    const adminUsername = "rahul";
    const adminPassword = "rahul02";

    // Check if credentials match
    if (username === adminUsername && password === adminPassword) {
      // Clear any previous errors and redirect to Browse page
      setError(null);
      navigate("/browse");
    } else {
      // Set an error message if credentials don't match
      setError("Invalid username or password");
    }
  };

  return (
    <div className="p-4 flex justify-between bg-red-400">
      
        <div className="ml-96">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <form
          onSubmit={handleLogin}
          className="bg-blue-200 px-32 py-10 rounded-lg shadow-md w-full  max-w-sm"
        >
          <div className="mb-4">
            <label htmlFor="username" className="block font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-24 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        </div>
      
      <div>
        <img src="https://www.f-cdn.com/assets/main/en/assets/job-post/redesign/bird.jpg" alt="Bird's Img" className="object-cover w-10/12 h-screen"/>
      </div>
    </div>
  );
};

export default Dashboard;
