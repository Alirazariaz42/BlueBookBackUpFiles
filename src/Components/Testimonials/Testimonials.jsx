import { BlueFooter } from "../CommonComponents";
import { Card } from "antd";
import "./Testimonials.css";
import { Images } from "../../Assests/Constant";
import HumainIcon from "../../Assests/HumainIcon.webp";
import { Helmet } from "react-helmet";

const Testimonials = () => {
  const reviewArray = [
    {
      key: 1,
      review:
        "My name is Bennie Edgerson-Daye. The BlueBook Estimators have completed numerous estimates for my business. I have secured various bids that The Bluebook Estimators has evaluated for my company. Their turnover time ranges from 1-3 days, regardless of the size of the estimate. I plan to continue employing US Estimating for all my forthcoming estimates. Their prices are fair compared to other estimating firms that cannot assure prompt estimates like US Estimating can. I wholeheartedly endorse them to anyone seeking a dependable estimating company.",
      name: "CARMINE MOLISSE",
      title: "DIRECTOR",
    },
    {
      key: 2,
      review:
        "Employing the building estimation platform has revolutionized my enterprise. The precise and comprehensive expense projections have not just increased my proposal success rate, but also guaranteed that my undertakings remain fiscally responsible. The intuitive navigation and swift computations establish it as an essential instrument in my construction repertoire.",
      name: "MIKE KARAME",
      title: "EXPRESS QUALITY CONSTRUCTION LTD - (CANADA)",
    },
    {
      key: 3,
      review:
        "Appreciate the valuation. We adjusted the figures with our parameters and arrived approximately 75k lower. Nonetheless, we secured the project. Anticipate forwarding the subsequent blueprints to you shortly.",
      name: "Ricky",
      title: "Owner",
    },
    {
      key: 4,
      review:
        " Without a doubt, the BlueBook Estimators provides the swiftest and most expert estimating solutions I've experienced in the construction industry. Their work was top-notch, and the estimates I required were delivered promptly. Communication was a breeze and consistently timely, and they made any necessary adjustments with remarkable speed. I'm eager to entrust them with my future business.",
      name: "Tribco",
      title: "CECO Concrete Construction",
    },
    {
      key: 5,
      review:
        "US Estimating® provided incredibly accurate and lightning fast estimating services for our urgent need. Although our plans were not a precise set having some conflict errors, US Estimating® plowed through the conflicts and provided responsible clarified results that were essential in a short time frame. In the end we were able to rely on the results for a successful implementation. Looking forward to many similar work services in the future.",
      name: "PATRICIA DZIUK",
      title: "WBE CONTRACTOR,SPRING VALLEY (CA).",
    },
    {
      key: 6,
      review:
        "I would recommend them to any estimator, business owner, project manager, or even if you just need financial advice. They are very precise in their measuring and takeoffs, and they are very quick as well. I have been in pinches where I needed numbers now, and I simply contacted them for assistance and got it done in time. Again, I would recommend them to anyone! Not only are they great at what they do, they are very polite and easy to work with. Nothing but good things to say about them!!",
      name: "JULIE D'AGOSTINO",
      title: "PRESIDENT",
    },
  ];
  return (
    <>
      <Helmet>
        <title>The Bluebook Estimators Testimonials | Reviews & Feedback</title>
        <meta
          name="description"
          content="Explore The BlueBook Estimators testimonials. Discover what clients say about our services. Real feedback from satisfied customers. Get insights now!"
        />
      </Helmet>
      <div className="container">
        <div className="mt-5">
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active p-4" data-bs-interval="10000">
                {/* <img src={ImageBg} class="d-block w-100" alt="..."/> */}

                <div className="CardContainercustom carousel-caption  d-block clientReview">
                  <img
                    src={HumainIcon}
                    className="mt-3"
                    height={50}
                    width={50}
                  />
                  <p style={{ color: "white" }} className="mt-3 ">
                    {reviewArray[0].review}
                  </p>
                  <h5 style={{ color: "white" }}>Bennie Edgerson-Daye</h5>
                  <h5 style={{ color: "white" }}>ESTIMATOR GEORGIA </h5>
                  <h5 style={{ color: "white" }}>ENVIRONMENTAL GROUP</h5>
                </div>
              </div>

              <div class="carousel-item  p-4" data-bs-interval="10000">
                {/* <img src={ImageBg} class="d-block w-100" alt="..."/> */}

                <div className="CardContainercustom carousel-caption clientReview d-block">
                  <img
                    src={HumainIcon}
                    className="mt-3"
                    height={50}
                    width={50}
                  />
                  <p style={{ color: "white" }} className="mt-3">
                    {reviewArray[1].review}
                  </p>
                  <h5 style={{ color: "white" }}>BENNIE EDGERSON</h5>
                  <h5 style={{ color: "white" }}>BENNIE DAYE SERVICES INC..</h5>
                  <h5 style={{ color: "white" }}>
                    DBA BENNIE DAYE CONSTRUCTION,NY.
                  </h5>
                </div>
              </div>

              <div class="carousel-item  p-4" data-bs-interval="10000">
                {/* <img src={ImageBg} class="d-block w-100" alt="..."/> */}

                <div className="CardContainercustom carousel-caption clientReview  d-block">
                  <img
                    src={HumainIcon}
                    className="mt-3"
                    height={50}
                    width={50}
                  />
                  <p style={{ color: "white" }} className="mt-3">
                    {reviewArray[2].review}
                  </p>
                  <h5 style={{ color: "white" }}>RICKY</h5>
                  <h5 style={{ color: "white" }}>OWNER</h5>
                  <h5 style={{ color: "white" }}>RICKY CAN BUILD IT LLC</h5>
                </div>
              </div>
              <div class="carousel-item  p-4" data-bs-interval="10000">
                {/* <img src={ImageBg} class="d-block w-100" alt="..."/> */}

                <div className="CardContainercustom carousel-caption clientReview  d-block">
                  <img
                    src={HumainIcon}
                    className="mt-3"
                    height={50}
                    width={50}
                  />
                  <p style={{ color: "white" }} className="mt-3">
                    {reviewArray[2].review}
                  </p>
                  <h5 style={{ color: "white" }}>Mike</h5>
                  <h5 style={{ color: "white" }}>Tribco</h5>
                  <h5 style={{ color: "white" }}>CECO Concrete Construction</h5>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <BlueFooter />
    </>
  );
};

export default Testimonials;
