import React from 'react';
import Navbar from '../../components/novaNavbar';
import { userData } from '../../helpers';
import './Profile.css';

export const Profile = () => {
  const { name , username, email , role} = userData();
  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h2>Profile</h2>
        <div className="profile-details">
          <p>Name : {name}</p>
          <p>Username : {username}</p>
          <p>Email : {email}</p>
          <p>role : {role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
