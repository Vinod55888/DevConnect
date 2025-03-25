import React from "react";
import Login from "./components/Login";
import ProfileCard from "./components/ProfileCard";

const user = {
  name: "John Doe",
  bio: "Full-Stack Developer",
  github: "https://github.com/johndoe"
};

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center">DevConnect</h1>
      <Login />
      <ProfileCard user={user} />
    </div>
  );
}

export default App;