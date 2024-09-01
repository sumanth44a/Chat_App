import React from "react";
import Messages from "./Messages";
import Input from "./input";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <img
          src="https://media.gettyimages.com/id/1497606569/photo/london-england-virat-kohli-of-india-waits-before-batting-during-day-five-of-the-icc-world.jpg?s=612x612&w=0&k=20&c=G06_EM592Yp7j_m38oH0wQ3a3w1k-dSFFQP8MvdnDnY="
          alt=""
        />
        <span>Sumanth</span>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
