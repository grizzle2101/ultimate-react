import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  heading?: string;
  children?: ReactNode;
}

const DetailSection = ({ heading, children }: Props) => {
  return (
    <>
      <Heading fontSize={20} textColor={"grey"}>
        {heading}
      </Heading>
      {children}
    </>
  );
};

export default DetailSection;
