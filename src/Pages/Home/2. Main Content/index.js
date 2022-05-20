import Heading from "../../../Components/Heading";
import LearnMore from "../../../Components/LearnMore";
import Text from "../../../Components/Text";
import "./styles.css";

function MainContent() {
  return (
    <div className="first-container">
      <div className="text-container">
        <div className="text-wrapper">
        <Heading>Transform your brand</Heading>
        <Text>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </Text>
        <LearnMore />
        </div>
      </div>
      <div className="img-container"></div>
      
    </div>
  );
}

export default MainContent;
