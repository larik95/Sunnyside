import "./styles.css";

function LearnMore({children, borderBottom}) {
  return (
    <div className="learnmore-content" >
      {children}
      <a href="#" style={{borderBottom}}>LEARN MORE</a>
    </div>
  );
}

export default LearnMore;
