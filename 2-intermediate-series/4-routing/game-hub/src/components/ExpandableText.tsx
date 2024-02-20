import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: String;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = () => {
    return isExpanded ? children : children?.substring(0, 200).concat("...");
  };

  if (!children) return null;

  return (
    <>
      <Text>
        {displayText()}
        <Button
          marginLeft={3}
          size="xs"
          fontWeight="bold"
          colorScheme="yellow"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          {isExpanded ? "Less" : "More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
