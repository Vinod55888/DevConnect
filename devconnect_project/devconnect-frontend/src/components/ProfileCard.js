import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-500">{user.bio}</p>
      <a href={user.github} className="text-blue-500">GitHub Profile</a>
    </div>
  );
};

export default ProfileCard;