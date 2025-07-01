import { Images } from "../../../Assests/Constant";

import { Link } from "react-router-dom";
import "./BlueFooter.css";
import { PhoneOutlined } from "@ant-design/icons";
import call from "../../../Assests/CALL.png";
import whatsapp from "../../../Assests/WHATAPP (2).png";
import linked from "../../../Assests/linkedIN.png";
import facebook from "../../../Assests/FACEBOOK.png";
import location from "../../../Assests/location.png";
import mail from "../../../Assests/mail.png";
import LOGO from "../../../Assests/LOGO.png";

const BlueFooter = () => {
  return (
    <>
      <div className="footerBgImg">
        <div className="footerMainContainer">
          <div className="footerEachContainer">
            <div>
              <hr className="footerHeadLine" />
              <h1 className="footerHeadStyle">The Blue Book Estimators </h1>
              <hr className="footerHeadLine" />
            </div>
            <p className="footerDespText">
              The BlueBook Estimators are an industry leader in providing
              accurate and reliable construction cost estimation services. We
              specialize in Quantity and Material Takeoff, Scheduling, and
              Planning for your project management needs. Our experts use
              advanced softwares and we pay close attention to detail to ensure
              accurate estimates. We provide you with accurate information in a
              timely manner, enabling you to make informed decisions and execute
              projects efficiently. Rely on The BlueBook Estimators for precise
              and prompt cost estimation in construction.
            </p>
          </div>
          <div className="footerEachContainer">
            <div>
              <hr className="footerHeadLine" />
              <h1 className="footerHeadStyle">Navigation </h1>
              <hr className="footerHeadLine" />
            </div>
            <div className="footerNavigationMenu">
              <h3 className="footerNavItem">
                {" "}
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/about-us/"
                >
                  About Us
                </Link>{" "}
              </h3>
              <h3 className="footerNavItem">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/services/"
                >
                  Services
                </Link>
              </h3>
              <h3 className="footerNavItem">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/work-samples/"
                >
                  Work Samples
                </Link>
              </h3>
              <h3 className="footerNavItem">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/contact-us/"
                >
                  Contact Us
                </Link>
              </h3>
            </div>
          </div>
          <div className="footerEachContainer">
            <div>
              <hr className="footerHeadLine" />

              <h1 className="footerHeadStyle">Contact</h1>
              <hr className="footerHeadLine" />
            </div>
            <div
              className={
                window.innerWidth > 600
                  ? "footerNavigationMenu"
                  : "footerNavigationMenuMob"
              }
            >
              <div className="footerContactContainer">
                <img src={location} alt="location" className="footerIconSize" />
                <p className="footerText">
                  <span style={{ fontWeight: "900" }}>Head Office:</span> 2505
                  Bedford Ave, Brooklyn, NY 11226, USA
                </p>
              </div>
              <div className="footerContactContainer">
                <img src={call} alt="location" className="footerIconSize" />
                <p className="footerText">
                  {" "}
                  <a style={{ color: "white" }} href="tel:+1 917 300 1079">
                    +1 917 300 1079
                  </a>{" "}
                </p>
              </div>

              <div className="footerContactContainer">
                <img src={mail} alt="location" className="footerIconSize" />
                <p className="footerText">
                  <a
                    style={{ color: "white" }}
                    href="mailto:bluebookestimators@gmail.com"
                  >
                    bluebookestimators@gmail.com{" "}
                  </a>
                </p>
              </div>

              <div className="footerContactSocialContainer">
                <a
                  href="https://www.facebook.com/profile.php?id=100094068135537"
                  target="blank"
                >
                  <img
                    src={facebook}
                    alt="facebook black"
                    className="footerSocial footerfacebook"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/the-bluebook-estimators/?viewAsMember=true"
                  target="blank"
                >
                  <img
                    src={linked}
                    alt="linkedIn black"
                    className="footerSocial footerlinkedin"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="coppyRigth">
          Copyright © 2023 The BlueBook Estimators Designed By{" "}
         <a target="blank" href="http://www.mfbzone.com/"> <img src={LOGO} height={20} alt="logo" /></a>
        </p>
      </div>
    </>
  );
};

export default BlueFooter;
