import { ReactNode } from "react";

interface MessageProps {
  children: ReactNode;
}

let count = 0;

function Message({ children }: MessageProps) {
  console.log("message called - ", count);
  count++;
  return (
    <>
      <h1>count - {count}</h1>
    </>
  );
}

export default Message;
