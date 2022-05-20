import "./styles.css";

function Text({children, fontSize, color}) {
  return (
    <div className="text-content" style={{fontSize, color}}>
      {children}
    </div>
  );
}

export default Text;
