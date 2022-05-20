import Heading from "../Heading";
import ImgEmily from "../Client Testimonials/image-emily.jpg";
import ImgJennie from "../Client Testimonials/image-jennie.jpg";
import ImgThomas from "../Client Testimonials/image-thomas.jpg";

import Text from "../Text";
import "./styles.css";

function ClientTest() {
  return (
    <div className="clienttest-content">
      <div className="clienttest-heading">
        <Heading
          fontSize={24}
          color=" hsl(210, 4%, 67%)"
          letterSpacing="8px"
        >
          CLIENTS TESTIMONIALS
        </Heading>
      </div>
      <div className="clients-container">
        <div className="client client1">
          <div className="client-img">
            <img src={ImgEmily} alt="Emily" />
          </div>
          <Text>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </Text>
          <div className="client-name-function">
            <Heading fontSize={18}>Emily R.</Heading>
            <Text fontSize={16} color=" hsl(210, 4%, 67%)">
              Marketing Director
            </Text>
          </div>
        </div>
        <div className="client client2">
          <div className="client-img">
            <img src={ImgThomas} alt="Thomas" />
          </div>
          <Text>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </Text>
          <div className="client-name-function">
            <Heading fontSize={18}>Thomas S.</Heading>
            <Text fontSize={16} color=" hsl(210, 4%, 67%)">
              Chief Operating Officer
            </Text>
          </div>
        </div>
        <div className="client client3">
          <div className="client-img">
            <img src={ImgJennie} alt="Jennie" />
          </div>
          <Text>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </Text>
          <div className="client-name-function">
            <Heading fontSize={18}>Jennie F.</Heading>
            <Text fontSize={16} color=" hsl(210, 4%, 67%)">
              {" "}
              Business Owner
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientTest;
