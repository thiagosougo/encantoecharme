import React from "react";
import { Icon } from "@iconify/react";

import "./Footer.css";

function Footer() {
  var ano = new Date();
  var data = ano.getFullYear();
  return (
    <div className="FooterSection">
      <div className="footerIcons">
        <a href="https://www.instagram.com/ec_encantoecharme/" target="_blank">
          <Icon icon="ant-design:instagram-filled" />
        </a>
        <a href="https://www.facebook.com/Ecienemesaposta/" target="_blank">
          <Icon icon="ant-design:facebook-filled" />
        </a>
      </div>
      <div className="footerRights">
        <p>&copy; {data} Encanto e Charme - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
