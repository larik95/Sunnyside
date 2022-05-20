import Heading from "../../../Components/Heading";
import LearnMore from "../../../Components/LearnMore";
import Text from "../../../Components/Text";
import "./styles.css";

function MainContent3() {
  return (
    <div className="third-container">
      <div className="text-container-left">
        <div className="text-wrapper-img">
          <Heading fontSize={26}>Graphic design</Heading>
          <Text>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </Text>
        </div>
      </div>
      <div className="text-container-right">
        <div className="text-wrapper-img">
          <Heading fontSize={26}>Photography</Heading>
          <Text>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default MainContent3;
