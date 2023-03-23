import { ReactNode } from "react";

interface MessageProps {
  children: ReactNode;
  count: number;
}

function Message({ children, count }: MessageProps) {
  let countNumba = 0;
  countNumba++;
  return (
    <>
      <h1>count - {countNumba}</h1>
    </>
  );
}

export default Message;
