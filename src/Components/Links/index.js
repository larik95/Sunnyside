import "./styles.css";

function Links({ fontSize, color }) {
  return (
    <div className="links-container" style={{ fontSize, color }}>
      
        <a href="#" style={{ color }}>
          About{" "}
        </a>
      
        <a href="#" style={{ color }}>
          Services{" "}
        </a>{" "}
     
        <a href="#" style={{ color }}>
          Projects{" "}
        </a>
       
      
    </div>
  );
}

export default Links;
