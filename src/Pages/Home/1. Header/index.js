import "./styles.css";
import Logo from "../../../Components/Logo";
import Links from "../../../Components/Links";
import ButtonMenu from "../../../Components/ButtonMenu";

function Header() {
  return (
    <div className="header-content">
      <div className="nav-container">
        <div className="logo-content">
          <Logo />
        </div>
        <div id='btn-mobile' className="modal-button">
          <ButtonMenu />
        </div>
        <div id="modal" className="links-content">
          <Links color="#fff" fontSize={18} />
          <div className="contact-link">
            <a href="#">CONTACT</a>
          </div>
        </div>
      </div>
      <div className="mid-container">
        WE ARE CREATIVES
        <div className="arrow">
          <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
            <g
              stroke="#FFF"
              stroke-width="6"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M18 3v100M3 95.484l15 15 15-15" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}



export default Header;
