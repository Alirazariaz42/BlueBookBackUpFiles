import "./Home.css";
import { Section1, Section2, Section3, Section4 } from "./HomeSections";
import { BlueContactBanner, BlueFooter } from "../CommonComponents";
import elips5 from "../../Assests/Ellipse 5.png";
import elips6 from "../../Assests/Ellipse 6.png";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>
            Best Construction Estimating Services Within 24 - 48 hours - The
            BlueBook Estimators
          </title>
          <meta
            name="description"
            content="Affordable & accurate Construction Estimating Services for GCs, Subcontractors, Builder & Architects for residential & commercial Projects -Fast Turnaround"
          />
        </Helmet>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>

      <BlueFooter />
    </>
  );
};

export default Home;
