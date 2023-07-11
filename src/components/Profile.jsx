import React from "react";

const Profile = ({ email, password }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Profile Page</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Profile;
