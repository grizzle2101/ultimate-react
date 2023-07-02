import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

interface NavBarProps {
  onToggle: () => void;
}

function NavBar(props: NavBarProps) {
  return (
    <>
      <div className="navigation-bar">
        <h3>NavBar</h3>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            Toggle Theme
          </FormLabel>
          <Switch id="email-alerts" onChangeCapture={() => props.onToggle()} />
        </FormControl>
      </div>
    </>
  );
}

export default NavBar;
