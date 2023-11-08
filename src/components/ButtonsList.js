import React from "react";
import Button from "./Button";

const list = ["All", 'Music', 'Mixes', 'Bigboss', 'Old Films', 'Rituals', 'Live', "Dhee", 'Cooling Show', 'Courses', 'Fashion', 'Watched', 'New to you', 'Filmi', 'Game shows', 'India pop music', 'Gadgets', 'Ceremonies'];

const ButtonsList = () => {
  return (
    <div className="flex gap-4 overflow-x-scroll no-scrollbar">
      {
        list.map((item) => (
          <Button name={item} key={item}/>
        ))
      }
    </div>
  );
};

export default ButtonsList;
