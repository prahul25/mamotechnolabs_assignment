import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    const adminUsername = "rahul";
    const adminPassword = "rahul02";

    if (username === adminUsername && password === adminPassword) {
      setError(null);
      navigate("/browse");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex">
      {/* only admin login form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
        <form
          onSubmit={handleLogin}
          className="bg-gray-100 px-10 py-12 rounded-lg shadow-lg w-3/4 max-w-md"
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
              className="w-full px-4 py-2 border rounded-md"
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
              className="w-full px-4 py-2 border rounded-md"
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

      {/* Image */}
      <div className="w-1/2">
        <img
          src="https://www.f-cdn.com/assets/main/en/assets/job-post/redesign/bird.jpg"
          alt="Bird's Img"
          className="object-cover w-full h-[674px]"
        />
      </div>
    </div>
  );
};

export default Dashboard;
