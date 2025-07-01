import { Images } from "../../Assests/Constant";
import { BlueContactBanner, BlueFooter } from "../CommonComponents";
import { Banner } from "../CommonComponents/Banner";
import BankOfMaricaPic from "../../Assests/BankOfAmerica.webp";
import fee from "../../Assests/fee.webp";
import "./EstimationFees.css";import { Helmet } from 'react-helmet';

const EstimationFees = () => {
  const text = (
    <><Helmet>
    <title>
    The BlueBook Estimators: Transparent Fee Estimation Solutions
    </title>
    <meta
      name="description"
      content="We provide accurate and transparent fee estimations. Our tools simplify cost assessments, empowering your project planning with confidence."
    />
  </Helmet>
      <p>
        If You Have Any Further Queries, You Can Call Us At{" "}
        <a style={{ color: "white" }} href="tel:+1 917 300 1079">
          +1 917 300 1079
        </a>{" "}
        Or Email At{" "}
        <a
          style={{ color: "white" }}
          href="mailto:bluebookestimators@gmail.com"
        >
          bluebookestimators@gmail.com{" "}
        </a>
      </p>

      <p>
        Or You Can Upload Your Plans In The Link Below To Get A Quote In The
        Next 5 Minutes.
      </p>
    </>
  );
  const imageArray = [
    { key: "ndb", icon: Images.payment1 },
    { key: "strip", icon: Images.payment2 },
    { key: "visa", icon: Images.payment3 },
    { key: "express", icon: BankOfMaricaPic },
    { key: "masterCard", icon: Images.payment5 },
    { key: "chase", icon: Images.payment6 },
    { key: "discover", icon: Images.payment7 },
  ];
  return (
    <>
      <div className="feeMainContainer">
        <h1 className="feeHeading fw-bold">Estimation Fees</h1>
        <p>
          The BlueBook Estimator always like to hear from clients about the
          budget of the project so we have no fix rates about our services. But
          ofcourse, we charge per project, and remain very low so that our
          clients can bid more projects with minimum fees. Estimating fee can be
          like $150, $250, $350, $550 and so on. We do jobs even in $75, $100 –
          it all depend on size/scope of the project.
        </p>

        <div className="row w-100  ">
          <div className="col-md-6 col-12">
            <div className="">
              <h2 className="feeSubHeading fw-bold mt-4">Our Process</h2>
              <p className="feeText">
                You can forward us the plans and mention us whether you would be
                bidding whole project or selected trades. After a detailed
                review of drawings – we will send you our fee proposal for your
                approval
              </p>
              <p className="feeSubText">
                Only after your approval, we will start the work and complete
                the job by/before your due date.
              </p>
            </div>
            <div className="">
              <h2 className="feeSubHeading fw-bold mt-5">Format & Software</h2>
              <p className="feeText">
                Our work would be in editable excel sheet – if required, we can
                use your template or can put your company details on the
                estimate/proposal. For to do quantities takeoff – we use
                software Planswift, BlueBeam, On Screen Takeoff (OST)
              </p>
              <p className="feeSubText">
                Mostly we use Plan swift. We will be very happy to provide
                Software files as well as Markups/color drawings (if required).
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div>
              <img src={fee} className="feeDetailImage mt-md-5 mt-4" />
            </div>
          </div>
        </div>

        <div className="feeDetailContainer"></div>
      </div>

      <div className="mt-5 mt-5">
        <div className="container">
          <div className="row w-100 m-0 mt-2 mb-2 justify-content-center ">
            <div className="col">
              <img src={imageArray[0].icon} height={70} weidth={70} />
            </div>
            <div className="col">
              <img src={imageArray[1].icon} height={70} weidth={70} />
            </div>
            <div className="col">
              <img src={imageArray[2].icon} height={70} weidth={70} />
            </div>
            <div className="col">
              <img src={imageArray[3].icon} height={70} weidth={70} />
            </div>
            <div className="col">
              <img src={imageArray[4].icon} height={70} weidth={70} />
            </div>
            <div className="col">
              <img src={imageArray[5].icon} height={70} weidth={70} />
            </div>
            <div className="col">
              <img src={imageArray[6].icon} height={70} weidth={70} />
            </div>
          </div>
        </div>
        <Banner text={text}> </Banner>
      </div>
      <BlueFooter />
    </>
  );
};

export default EstimationFees;
