import { useState } from "react";
import { Modal } from "../Modal";
import "./styles.css";

function ButtonMenu() {

   const [show, setShow] = useState (false);
   const closeModalHandler = () => setShow(false);

  return (
    <div id='btn-mobile' className="modal-button">
          <button onClick={() => setShow (true)}>
            <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
                fill="#FFF"
                fill-rule="evenodd"
              />
            </svg>
          </button>
         <Modal show={show} closeModalHandler={closeModalHandler}  />
    </div>
  );

}

export default ButtonMenu;
