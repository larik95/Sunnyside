import Heading from "../../../Components/Heading";
import LearnMore from "../../../Components/LearnMore";
import Text from "../../../Components/Text";
import "./styles.css";

function MainContent2() {
  return (
    <div className="second-container">
      <div className="img2-container"></div>
      <div className="text-container">
        <div className="text-wrapper">
          <Heading>Stand out to the right audience</Heading>
          <Text>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </Text>
          <LearnMore borderBottom='solid 5px #e9a8a8' />
        </div>
      </div>
    </div>
  );
}

export default MainContent2;
