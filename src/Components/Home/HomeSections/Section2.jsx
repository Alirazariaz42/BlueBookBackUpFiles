import { useEffect, useState } from "react";
import ".././Home.css";
import "./Section.css";
import Card1BG from "../../../Assests/card1BG.webp";
import { BlueButton } from "../../CommonComponents";
import { Card } from "antd";
import { Images } from "../../../Assests/Constant";
import { Link, useNavigate } from "react-router-dom";

const Section2 = () => {
  const navigate = useNavigate();
  const servicesArray = [
    {
      icon: `${Images.service1}`,
      title: "Concrete",
      description:
        "Contractors involved within the work onsite for completing the fieldwork and struggle to estimate accurately for bidding proposals. We help them with our accurate estimate report for concrete projects.",
      key: "service1",
      subHeading: "",
    },
    {
      icon: `${Images.service2}`,
      title: "Framing",
      description:
        "Framing takeoff means a basic count of the framing lumber. It is the first step in estimating construction materials for a new residential or construction building. And for estimation we are her to provide you.",
      key: "service2",
      subHeading: "(Wood & Metal)",
    },
    {
      icon: `${Images.service3}`,
      title: "Finishes",
      description:
        "Drywall Installation Cost Estimation including the finishing, taping, labor costs, and materials. In addition, We provide drywall installation services to contractors. Our cost-estimating team has expert contractors.",
      subHeading: "Drywall, Paint, Flooring, Tiles, ACT",
      key: "service3",
    },
    {
      icon: `${Images.service4}`,
      title: "Thermal & Moisture",
      description:
        "Roofing estimating services the cost of installing new roofing, there are several aspects to consider. Although roofing material counts for a major portion of the cost, you must also consider the number of stories, the complexity of the roof, the slope or pitch etc.",
      subHeading: "Roofing and Exterior Work",
      key: "service4",
    },
    {
      icon: `${Images.service5}`,
      title: "Mechanical",
      description:
        "Our mechanical estimating services leverage the best technology and practices to ensure the reliable and precise cost analysis of your projects",
      key: "service5",
      subHeading: "MEP",
    },
    {
      icon: `${Images.service6}`,
      title: "Electrical",
      description:
        "We are aware of how crucial precise electrical cost estimation is to the success of any project, we use the most up-to-date software and technologies to generate these estimates.",
      key: "service6",
      subHeading: "MEP",
    },
    {
      icon: `${Images.service7}`,
      title: "Plumbing",
      description:
        "Plumbers don’t have time and hands-on expertise to overview the drawings and plans to check whether the plans will work in the working environment or not. For this, our estimators take extra time to review and make corrective changes.",
      key: "service7",
      subHeading: "MEP",
    },
    {
      icon: `${Images.service8}`,
      title: "Cost Estimation",
      description:
        "We Understand it is most hectic and time consuming but important task for any construction team. So, We provide you best team for project estimation",
      key: "service8",
      subHeading: "Labour & Material",
    },
  ];

  const servicesArray2 = [
    {
      icon: `${Images.service1}`,
      title: "Concrete",
      description:
        "Contractors involved within the work onsite for completing the fieldwork and struggle to estimate accurately for bidding proposals. We help them with our accurate estimate report for concrete projects.",
      key: "service1",
      subHeading: "",
    },

    {
      icon: `${Images.service4}`,
      title: "Thermal & Moisture",
      description:
        "Roofing estimating services the cost of installing new roofing, there are several aspects to consider. Although roofing material counts for a major portion of the cost, you must also consider the number of stories, the complexity of the roof, the slope or pitch etc.",
      subHeading: "Roofing and Exterior Work",
      key: "service4",
    },
    {
      icon: `${Images.service5}`,
      title: "Mechanical",
      description:
        "Our mechanical estimating services leverage the best technology and practices to ensure the reliable and precise cost analysis of your projects",
      key: "service5",
      subHeading: "MEP",
    },
    {
      icon: `${Images.service6}`,
      title: "Electrical",
      description:
        "We are aware of how crucial precise electrical cost estimation is to the success of any project, we use the most up-to-date software and technologies to generate these estimates.",
      key: "service6",
      subHeading: "MEP",
    },
    {
      icon: `${Images.service7}`,
      title: "Plumbing",
      description:
        "Plumbers don’t have time and hands-on expertise to overview the drawings and plans to check whether the plans will work in the working environment or not. For this, our estimators take extra time to review and make corrective changes.",
      key: "service7",
      subHeading: "MEP",
    },
    {
      icon: `${Images.service8}`,
      title: "Cost Estimation",
      description:
        "We Understand it is most hectic and time consuming but important task for any construction team. So, We provide you best team for project estimation",
      key: "service8",
      subHeading: "Labour & Material",
    },
  ];

  const [serviceKey, setServiceKey] = useState("");
  const [cardArray, setCardArray] = useState(servicesArray2);

  const handleResize = () => {
    if (window.innerWidth > 1500) setCardArray(servicesArray);
    else setCardArray(servicesArray2);
  };

  useEffect(() => {
    if (window.innerWidth > 1500) setCardArray(servicesArray);
    else setCardArray(servicesArray2);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="row w-100 p-lg-3 p-0 m-0">
        <div className="col-lg-4 col-12">
          <div className="ServiceTextContainer">
            <h1 className="sec2Heading text-center">Our Services</h1>
            <p className="sec2Text p-lg-2 p-0">
              The Blue Book Estimators are particularly effective Construction
              estimating Services in USA at determining the costs and duration
              of tasks for builders and busy contractors. We specialize in
              providing Cost Estimation, Quantity take-off Material list, and
              Scheduling. Our team makes sure to provide you with all the
              information you require, such as how many materials you'll need
              and when the project will be completed, using sophisticated
              software and their expertise. We pay very close attention to the
              details and want you to be completely satisfied with our work. Our
              estimates will provide you with the confidence you need to plan
              and execute your construction project.
            </p>
            <div className="sec2ButtonContainer text-center">
              <BlueButton
                text={"Explore More"}
                height={window.innerWidth > 1020 ? 60 : 50}
                buttonBackground={"black"}
                onClick={() => {
                  navigate("/services");
                }}
                size={20}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-8 col-12">
          <div className="row justify-content-center mt-lg-4 ">
            <div
              className="col-md-5 col-12 mt-2 "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/cost-estimating-services/"
              >
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
            <div
              className="col-md-5 col-12 mt-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/cost-scheduling/"
              >
                <div className="CardContainer text-center">
                  <div className=" cardSchedulingbg"></div>
                  <div className="CardText">
                    <h5> Scheduling</h5>
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
          </div>

          <div className="row  justify-content-center mt-lg-4  ">
            <div
              className="col-md-5 col-12 mt-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/construction-takeoff-services/"
              >
                <div className="CardContainer text-center">
                  <div className="cardBaterialbg"></div>
                  <div className="CardText">
                    <h5> Quantities & Material Takeoff</h5>
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
            <div
              className="col-md-5 col-12 mt-2 "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/planning/"
              >
              <div className="CardContainer text-center">
                <div className="cardPlaningbg"></div>
                <div className="CardText">
                  <h5> Planning</h5>
                  <p>
                    In the domain of project management, the opening phase
                    encompasses strategizing, coordinating, and detailing the
                    project. Project timetabling and strategizing function as
                    distinct, yet interrelated facets of project management.
                    This segment delves further into the planning phase of
                    project management. The project preparation process entails
                    project and construction supervisors, together with vital
                    team players, devising an all-encompassing plan.
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
