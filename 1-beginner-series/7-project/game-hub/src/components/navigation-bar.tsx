import { Input, Switch, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

interface Props {
  onChange: (text: string) => void;
  onToggle: () => void;
  darkMode: boolean;
}

const NavigationBar = ({ onChange, onToggle, darkMode }: Props) => {
  return (
    <div className="navigation-bar">
      <div>
        <Image src={logo} boxSize={10} />
      </div>
      <div>
        <Input
          placeholder="Search"
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      <div>
        {(darkMode ? "Dark" : "Light") + " Mode"}
        <Switch id="email-alerts" onChangeCapture={onToggle} />
      </div>
    </div>
  );
};

export default NavigationBar;
