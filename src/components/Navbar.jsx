import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat app</span>
      <div className="user">
        <img
          src="https://media.gettyimages.com/id/1801823700/photo/ahmedabad-india-virat-kohli-of-india-looks-on-during-the-icc-mens-cricket-world-cup-india.jpg?s=612x612&w=0&k=20&c=jcrjUllj94RHuYcSI49lPBJvlwb4gUvxHEWrGKHB-lA="
          alt=""
        />
        <span>Virat</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
