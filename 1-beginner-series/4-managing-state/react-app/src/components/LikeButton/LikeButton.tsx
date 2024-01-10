import { useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";

//props to pass in
export interface LikeProps {
  //function returns void.
  onClick: () => void;
}

function LikeButton(props: LikeProps) {
  //state
  //variable & updater function
  const [isSelected, setIsSelected] = useState(false);

  //component
  return (
    <>
      <div>
        <BsFillHeartFill
          color={isSelected ? "red" : ""}
          onClick={() => {
            props.onClick();
            setIsSelected(!isSelected);
          }}
        ></BsFillHeartFill>
      </div>
    </>
  );
}

export default LikeButton;
