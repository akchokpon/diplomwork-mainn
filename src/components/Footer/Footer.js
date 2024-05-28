import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="Foot flex">
          <Logo />
          <div className="Foot_menu">
            <p className="Foot_tit">Menu</p>
            <div className="Foot_menu-in flex">
              <Menu />
              <p>
                If you reside in the U.S. territories, please call Goldman Sachs
                at 877-255-5923 with questions about Apple Card. Learn more
                about how Apple Card applications are evaluated at
                support.apple.com/kb/HT209218.
                lo
              </p>
            </div>
          </div>
          <div className="Foot_links-wrap">
            <p className="Foot_tit_1">Links</p>
          </div>
        </div>
        <div className="Foot_bot">
          <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio fugiat temporibus iusto, et iure vel est, repellat omnis perspiciatis expedita provident suscipit molestias facilis, quas quibusdam numquam voluptatibus reiciendis asperiores!
          </p>
          <p>Copyright © 2024 La Rosa Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
