import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlueHeader.css";
import { Images } from "../../../Assests/Constant";
import { Drawer, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import BlueUploadModal from "../BlueUploadModal/BlueUploadModal";
import HeaderFBLogo from "../../../Assests/headerFBLogo.png";
import HeaderWPLogo from "../../../Assests/headerwhatappLogo.png";
import LinkedInLogo from "../../../Assests/HeaderLinkedInLogo.png";
import phonelogo from "../../../Assests/phone-fill.png";

const BlueHeader = () => {
  const navigate = useNavigate();
  const [menuKey, setMenuKey] = useState("home");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "Services",
      key: "/services/",
    },
    {
      label: "About Us",
      key: "/about-us/",
    },
    {
      label: "Testimonials",
      key: "/testimonials/",
    },
    {
      label: "Work Sample",
      key: "/work-samples/",
    },
    {
      label: "Estimating Fees",
      key: "/estimation-fee/",
    },
    {
      label: "Payment",
      key: "/payment/",
    },
  ];

  useEffect(() => {
    if (!window.location.pathname.includes(menuKey))
      setMenuKey(window.location.pathname.replace("/", ""));
  }, [window.location.href]);

  return (
    <>
      <div className="appColor">
        <div className="blueContactSocialConatiner">
          <div className="blueContactConatiner">
            <div className="blueItemConatiner contackNo">
              <p className="blueItemText">
                {" "}
                <a style={{ color: "#337AB7" }} href="tel:+1 917 300 1079">
                  <img
                    src={phonelogo}
                    className="blueSoicalImageSize"
                    alt="phone"
                    style={{marginRight:"8px"}}
                  />{" "}
                  +1 917 300 1079
                </a>{" "}
              </p>
            </div>
            <div className="blueItemConatiner">
              <p className="blueItemText">
                <a style={{ color: "#337AB7" }} href="mailto:bluebookestimators@gmail.com">
                  <img
                    src={Images.email}
                    className="blueSoicalImageSize"
                    alt="email"
                    style={{marginRight:"8px"}}
                  />
                  bluebookestimators@gmail.com{" "}
                </a>
              </p>
            </div>
          </div>
          <div className="blueSocialContainer">
            <a
              target="blank"
              href="https://www.linkedin.com/company/the-bluebook-estimators/?viewAsMember=true"
            >
              <img
                src={LinkedInLogo}
                className="blueSoicalImageSize"
                alt="email"
              />
            </a>
            <a
              target="blank"
              href="https://www.facebook.com/profile.php?id=100094068135537"
            >
              <img
                src={HeaderFBLogo}
                className="blueSoicalImageSize"
                alt="facebook"
              />
            </a>
          </div>
        </div>

        <div className="blueMenuContainer">
          <img src={Images.logo} alt="logo" className="blueMenuImageSize" />

          <div className="blueMenuItem">
            {items.map((item) => {
              return (
                <p
                  className={
                    menuKey === item.key
                      ? "blueMenuItemSelectedStyle"
                      : "blueMenuItemStyle"
                  }
                  key={item.key}
                  onClick={() => {
                    setMenuKey(item.key);
                    navigate(`${item.key}`);
                  }}
                >
                  {item.label}
                </p>
              );
            })}
          </div>

          <div
            className="blueMenuButton"
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          >
            <p>Upload Your Plan here</p>
          </div>
        </div>

        <div>
          <Button
            className="mobDrawerButton"
            type="primary"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            {isDrawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
      </div>

      <Drawer
        title={
          <img src={Images.logo} alt="logo" className="blueMenuImageSize" />
        }
        placement="left"
        width={130}
        open={isDrawerOpen}
        closeIcon={false}
        destroyOnClose={true}
        onClose={() => setIsDrawerOpen(!isDrawerOpen)}
        bodyStyle={{
          padding: "0%",
          marginTop: "-7%",
          background: "#337ab7",
        }}
        headerStyle={{ padding: "0%" }}
      >
        <div className="blueMenuItem">
          {items.map((item) => {
            return (
              <p
                className={
                  menuKey === item.key
                    ? "blueMenuItemSelectedStyle"
                    : "blueMenuItemStyle"
                }
                key={item.key}
                onClick={() => {
                  setMenuKey(item.key);
                  navigate(`/${item.key}`);
                }}
              >
                {item.label}
              </p>
            );
          })}
        </div>

        <div
          className="blueMenuButton"
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          <p>Upload Your Plan Here</p>
        </div>
      </Drawer>

      <BlueUploadModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default BlueHeader;
