import "./styles.css";

function Heading({children, marginLeft, fontSize, color, letterSpacing}) {
  return (
    <div className="heading-content" style={{marginLeft, fontSize, color, letterSpacing}}>
      {children}
    </div>
  );
}

export default Heading;
