import React from 'react'

const Comment = ({name, text}) => {
  return (
    <div className="flex my-5 items-center gap-4 shadow-md p-2">
      <div>
        <img
          className="w-10 h-10"
          src="https://cdn-icons-png.flaticon.com/512/64/64572.png"
          alt="profile-icon"
        />
      </div>
      <div>
        <div className="font-bold">{name}</div>
        <div>{ text}</div>
      </div>
    </div>
  )
}

export default Comment
