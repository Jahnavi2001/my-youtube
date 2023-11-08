import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-4 shadow-md p-1">
      <div>
        <img
          className="w-10 h-10"
          src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
          alt="profile-icon"
        />
      </div>
      <div className="font-bold">{name}</div>
      <div>{message}</div>
    </div>
  );
};

export default ChatMessage;
