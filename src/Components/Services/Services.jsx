import { Images } from "../../Assests/Constant";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { BlueFooter, BlueContactBanner } from "../CommonComponents";
import "./Services.css";
import "../../Components/AboutUs/AboutUs";
import { Helmet } from "react-helmet";
import elips5 from "../../Assests/Ellipse 5.png";
import elips6 from "../../Assests/Ellipse 6.png";
import GeneralRequirement from "../../Assests/GeneralRequirements.webp";
import SiteConstruction from "../../Assests/SiteConstruction.webp";
import concrete from "../../Assests/Concrete.webp";
import metal from "../../Assests/Metals.webp";
import Specilites from "../../Assests/Specilities.webp";
import equipment from "../../Assests/Equipment.webp";
import specialConstructio from "../../Assests/SpecialCunstruction.webp";

import conveyingSystem from "../../Assests/Conveying.webp";
import { Banner } from "../CommonComponents/Banner";

const Services = () => {
  const serviceArray = [
    {
      img: Images.servicesImg1,
      title: "Cost Estimation (Labor & Material)",
      key: "cost",
    },
    {
      img: Images.servicesImg,
      title: "Quantities & Materials Takeoffs",
      key: "qmTake",
    },
    {
      img: Images.servicesImg2,
      title: "Construction Work Schedules",
      key: "cws",
    },
  ];

  const tradeArray = [
    {
      img: GeneralRequirement,
      title: "General Requirements",
      key: "grTO",
      redirect: "/general-requirements/",
    },
    {
      img: SiteConstruction,
      title: "Site Construction",
      key: "scTO",
      redirect: "/sitework-estimating-services/",
    },
    {
      img: concrete,
      title: "Concrete",
      key: "concrete",
      redirect: "/concrete-estimating-services/",
    },
    {
      img: Images.servicesImg6,
      title: "Masonry",
      key: "masonry",
      redirect: "/masonry-estimating-services/",
    },
    {
      img: metal,
      title: "Metals",
      key: "metal",
      redirect: "/metals-estimating-services/",
    },
    {
      img: Images.servicesImg8,
      title: "Wood & Plastic",
      key: "wpTO",
      redirect: "/wood-plastic-estimating-services/",
    },
    {
      img: Images.servicesImg9,
      title: "Thermal and Moisture Protection",
      key: "tmprotection",
      redirect: "/thermal-moisture-protection-estimating-services/",
    },
    {
      img: Images.servicesImg10,
      title: "Doors & Windows",
      key: "d&w",
      redirect: "/door-window-estimating-services/",
    },
    {
      img: Images.servicesImg11,
      title: "Finishes",
      key: "finishes",
      redirect: "/interior-exterior-finishes/",
    },
    {
      img: Specilites,
      title: "Specialties",
      key: "specialties",
      redirect: "/specialities/",
    },
    {
      img: equipment,
      title: "Equipment",
      key: "equipment",
      redirect: "/equipment-estimating-services/",
    },
    {
      img: Images.servicesImg14,
      title: "Furnishings",
      key: "furnishings",
      redirect: "/furnishing-estimating-services/",
    },
    {
      img: specialConstructio,
      title: "Special Construction",
      key: "spCTO",
      redirect: "/special-construction-estimating-services/",
    },
    {
      img: conveyingSystem,
      title: "Conveying System",
      key: "conSys",
      redirect: "/conveying-systems/",
    },
    {
      img: Images.servicesImg17,
      title: "Mechanical",
      key: "mechanical",
      redirect: "/mechanical-estimating-services/",
    },
    {
      img: Images.servicesImg18,
      title: "Electrical",
      key: "electrical",
      redirect: "/electrical-estimating-services/",
    },
    {
      img: Images.servicesImg19,
      title: "Plumbing",
      key: "plumbing",
      redirect: "/plumbing-estimating-services/",
    },
    {
      img: Images.servicesImg20,
      title: "HVAC",
      key: "HVAC",
      redirect: "/hvac-estimating-services/",
    },
  ];
  const text = (
    <>
      For a quick quote based on your project scope, call us at{" "}
      <a style={{ color: "white" }} href="tel:+1 917 300 1079">
        +1 917 300 1079
      </a>{" "}
      or email us at{" "}
      <a style={{ color: "white" }} href="mailto:bluebookestimators@gmail.com">
        bluebookestimators@gmail.com{" "}
      </a>
    </>
  );
  return (
    <>
      <Helmet>
        <title>
          Services-Construction Estimating Services-BlueBook Estimators
        </title>
        <meta
          name="description"
          content="The BlueBook Estimators provides construction cost estimating and material takeoff services for clients in the US, UK, and Canada."
        />
      </Helmet>
      <div className="serviceMainContainer">
        <div className="container">
          <h1 className="serviceHeading">Services</h1>
          <div className="row w-100 justify-content-center text-center">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12 disFlex">
              {" "}
              <Link to="/cost-estimating-services/" className="cardSubText">
                <div className="CardContainer text-center">
                  <div className="card1bg"></div>
                  <div className="CardText">
                    <h5> Cost Estimation</h5>
                    <p>
                      Cost estimation is most important and useful technique to
                      get to know what is the budget and time duration to
                      complete entire project but it’s very hectic and time
                      consuming task
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 disFlex">
              {" "}
              <Link
                to={"/construction-takeoff-services/"}
                className="cardSubText"
              >
                <div className="CardContainer text-center">
                  <div className="cardBaterialbg"></div>
                  <div className="CardText">
                    <h5>Quantities & Material Takeoff </h5>
                    <p>
                      Our experts are always here to help you to fill the gaps
                      which exits in the initial phases of the proposed solution
                      especially when we talk about Quantities and Material
                      Takeoff.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 disFlex">
              <Link to="/cost-scheduling/" className="cardSubText">
                {" "}
                <div className="CardContainer text-center">
                  <div className="cardSchedulingbg"></div>
                  <div className="CardText">
                    <h5> Cost Scheduling </h5>
                    <p>
                      Our scheduling services ensure timely completion of your
                      projects and minimize potential hazards. We streamline
                      construction timelines, enabling you to pick the most
                      profitable path for timely completion at the best price.
                      Construction projects are efficiently managed using
                      critical path scheduling, which evaluates project scope,
                      requirements, and risks regarding time and resources.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-12 disFlex">
              {" "}
              <Link to="/planning/" className="cardSubText">
                <div className="CardContainer text-center">
                  <div className="cardPlaningbg"></div>
                  <div className="CardText">
                    <h5>Planning</h5>
                    <p>
                      In the domain of project management, the opening phase
                      encompasses strategizing, coordinating, and detailing the
                      project. Project timetabling and strategizing function as
                      distinct, yet interrelated facets of project management.
                      This segment delves further into the planning phase of
                      project management. The project preparation process
                      entails project and construction supervisors, together
                      with vital team players, devising an all-encompassing
                      plan.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="container">
          <h1 className="serviceHeading">Our Trades</h1>
        </div>
        <div className="serviceCardContainer disFlex">
          {tradeArray.map((item) => {
            return (
              <Card
                className="secviceCardStyle"
                bodyStyle={{ padding: "0px" }}
                key={item.key}
              >
                <div>
                  <img src={item.img} alt={item.key} className="cardImage" />
                </div>

                <div className="cardTextContainer">
                  <img
                    src={Images.tick}
                    alt={`${item.key}tick`}
                    className="cardTick"
                  />
                  <p>{item.title}</p>
                  <p className="cardSubText">
                    <Link className="Linktext" to={item.redirect}>
                      Read More
                    </Link>
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      <Banner text={text} />
      <BlueFooter />
    </>
  );
};

export default Services;
