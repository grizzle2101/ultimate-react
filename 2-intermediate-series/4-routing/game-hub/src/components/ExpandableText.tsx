import { Button, Text } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  children = children?.toString();

  const displayText = () => {
    return isExpanded
      ? children
      : children?.toString().split("", 200).concat("...");
  };

  if (!children) return null;

  return (
    <>
      <Text>{displayText()}</Text>
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Less" : "More"}
      </Button>
    </>
  );
};

export default ExpandableText;
