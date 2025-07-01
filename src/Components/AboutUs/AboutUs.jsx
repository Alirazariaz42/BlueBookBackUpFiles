import { BlueFooter } from "../CommonComponents";
import "./AboutUs.css";
import { Heading } from "./Heading";
import AboutUsImg from "../../Assests/AboutUs (2).webp";
import AboutUs2ndPic from "../../Assests/AboutUs2ndPic.webp";
import elips5 from "../../Assests/Ellipse 5.png";
import elips6 from "../../Assests/Ellipse 6.png";
import { KeyFeacurres } from "./KeyFeacurres";
import { Banner2 } from "../CommonComponents/Banner2";
import { Banner } from "../CommonComponents/Banner";
import { Helmet } from "react-helmet";
const AboutUs = () => {
  const text = (
    <>WORKING WITH US WE ARE A GLOBAL NETWORK OF CONSTRUCTION COST EXPERTS</>
  );
  const text2 = (
    <>
      If You Have Any Further Queries, You Can Call Us At{" "}
      <a style={{ color: "white" }} href="tel:+1 917 300 1079">
        +1 917 300 1079
      </a>{" "}
      Or Email At{" "}
      <a style={{ color: "white" }} href="mailto:bluebookestimators@gmail.com">
        bluebookestimators@gmail.com{" "}
      </a>
      <br />
      <br />
      Or You Can Upload Your Plans In The Link Below To Get A Quote In The Next
      5 Minutes.
    </>
  );
  const text3 = (
    <>
      We have a proven track record of serving both Public and Private
      construction sectors across the American regions.
    </>
  );
  return (
    <>
      <Helmet>
        <title>About Us - Construction Estimating & Takeoff Services in US</title>
        <meta name="description" content="Discover our expertise in construction estimating. The BlueBook Estimators provides accurate material takeoff services for projects. Learn more." />
      </Helmet>
      <div className="">
        <Heading> ABOUT US </Heading>
        <div
          className="row w-100"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-lg-6 text-center Description ">
            <p className="p-3">
              The BlueBook Estimators provide Estimating services that pirates
              with the goal of offering affordable and efficient Cost
              Estimating, Quantities & Material Takeoff & Scheduling. We offer
              services for General Contractors, Subcontractors, Material
              Suppliers-Manufacturers, Architects, Engineers, and Homeowners.
              Our skilled team, fully cognizant of each client's unique
              requirements, works diligently to generate precise and trustworthy
              estimates, eliminating the need for alternatives. We have
              successfully served various developments, architectural firms, and
              contracting companies across America. Our prompt responses and
              competitive rates distinguish us from our competitors. With over
              15 years in the AEC industry, we possess a deep understanding of
              the evolving construction landscape and guide our clientele
              accordingly. Our mission is to conserve your resources and time by
              combining industry expertise, state-of-the-art technology, and our
              unwavering dedication to enhancing your construction estimating,
              scheduling, and cost management procedures. If an expert is what
              you seek, we're here to assist you. Reach us at +1 917 300 1079.
            </p>
          </div>
          <div className="col-lg-6 text-center p-lg-5 p-3 ">
            <img src={AboutUsImg} className="m-2 w-100 AboutImg" alt="" />
          </div>
        </div>
        <Heading> OUR VALUEABLE CLIENTS </Heading>
        <div
          className="row w-100"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-lg-6 text-center p-lg-4 p-3">
            <img src={AboutUs2ndPic} className="m-2 w-100 AboutImg" alt="" />
          </div>
          <div className="col-lg-6  text-center Description">
            <p className="p-3">
              Through our experience in a diverse range of projects, from
              small-scale construction to multi-million dollar evaluations, we
              have reliably provided construction cost estimates to numerous
              companies worldwide. Our commitment to quality, timely deliveries,
              and exceptional customer support has allowed us to establish
              long-lasting relationships with our clients, making us their go-to
              source for all estimating needs. We support design firms by
              understanding the unique requirements of each project, producing
              construction cost estimate reports at crucial design stages,
              offering value engineering guidance, and identifying errors during
              the design process. Additionally, we work closely with contracting
              companies in USA, delivering highly accurate bid estimates,
              advising on strategic bidding proposals, and assisting with price
              negotiations.
            </p>
          </div>
        </div>

        <Banner2 text={text3} />

        <div className="container-fluid ">
          <div className="row w-100 mt-4 p-2 container-fluid ">
            <div className="col-lg-4 ">
              <h4 className="Mini-Heading text-center">Our Services</h4>
              <p className="OurServices">
                The Blue Book Estimators provides an extensive array of
                solutions to cater to our clients' specific requirements in the
                most effective manner. The roster of services comprises:
              </p>
              <ul className="UnorderList">
                <li>Construction Cost Estimating</li>
                <li>Quantities & Material Takeoff </li>
                <li>Scheduling</li>
                <li>Bidding Assistance</li>
                <li>Planning</li>
                <li>Strategic planning</li>
                <li>Operational planning </li>
              </ul>
            </div>

            <div className="col-lg-4 ">
              <h4 className="Mini-Heading text-center">All CSI Trades</h4>
              <p className="OurServices">
                Boasting a team of in-house trade expert estimators and
                engineers, we have the ability to offer cost estimation and
                consulting for all CSI divisions within a single entity.
              </p>
              <ul className="UnorderList">
                <li>General Conditions</li>
                <li>Sitework </li>
                <li>Concrete </li>
                <li>Masonry </li>
                <li>Metals </li>
                <li>Finishes </li>
                <li>Mechanical </li>
                <li>Electrical </li>
                <li>Plumbing </li>
                <li>Wood/Plastic Composites</li>
                <li>Thermal/Moisture Protection</li>
              </ul>
            </div>

            <div className="col-lg-4 ">
              <h4 className="Mini-Heading text-center">Our Projects</h4>
              <p className="OurServices">
                Our extensive expertise and capability to manage intricate
                building assignments have allowed us to offer construction cost
                estimation and advisory services in various construction
                sectors, including collaborations with prominent public
                institutions.
              </p>
              <ul className="UnorderList">
                <li>Mixed $ Multi-use Residential</li>
                <li>Commercial </li>
                <li>Industrial </li>
                <li>Retail</li>
                <li>Institutional</li>
                <li>Civil & Public Works</li>
                <li>Airports & Highways</li>
                <li>Parks & Recreation</li>
                <li>Mining & Marine</li>
              </ul>
            </div>
          </div>
        </div>

        <Heading> Key Features </Heading>

        <div className="container">
          <KeyFeacurres FeatureHeadibg=" ACCURACY">
            Using our highly accurate construction cost databases and RSMeans
          </KeyFeacurres>

          <KeyFeacurres FeatureHeadibg="FAST FAST TURNAROUNDS">
            Delivery within 24 to 48 hours
          </KeyFeacurres>

          <KeyFeacurres FeatureHeadibg="MARKET COMPETITIVE RATES">
            Affordable estimates
          </KeyFeacurres>

          <KeyFeacurres FeatureHeadibg="CERTIFIED ESTIMATORS">
            Expert estimators certified with American estimators organizations.
          </KeyFeacurres>

          <KeyFeacurres FeatureHeadibg="24/7 CUSTOMER SUPPORT">
            Live chat & email support
          </KeyFeacurres>
        </div>
      </div>

      <Banner text={text2} />

      <BlueFooter />
    </>
  );
};

export default AboutUs;
