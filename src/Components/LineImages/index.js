import "./styles.css";
import Milk from "./image-gallery-milkbottles.jpg";
import Orange from "./image-gallery-orange.jpg";
import Cone from "./image-gallery-cone.jpg";
import Sugar from "./image-gallery-sugarcubes.jpg";

function LineImages() {
  return (
    <div className="line-images-content">
      <div className="milk-and-orange">
      <img src={Milk} alt="milk" />
      <img src={Orange} alt="Orange" />
      </div>
      <div className="cone-and-sugar">
      <img src={Cone} alt="Cone" />
      <img src={Sugar} alt="Sugar" />
      </div>
    </div>
  );
}

export default LineImages;
