import React from "react";
import { PageNameContaqiner } from "../CommonComponents/PageNameContaqiner";
import { HalfTextHalfImg } from "../CommonComponents/HalfTextHalfImg";
import sheduleImg from "../../Assests/Shedule.webp";
import { BlackBGSubHeading } from "../CommonComponents/BlackBGSubHeading";
import { HalfImgHalfText } from "../CommonComponents/HalfImgHalfText";
import PrimavearaPic from "../../Assests/Scheduling (2).webp";
import { Banner } from "../CommonComponents/Banner";
import { MoreServices } from "../CommonComponents/MoreServices";
import check from "../../Assests/check.webp";
import MsProjectScheduling from "../../Assests/MsProjectScheduling.webp";
import { CommonCard } from "../CommonComponents/CommonCard";
import MaterialTakeoff from "../../Assests/MaterialTakeOff (2).webp";
import CostSetimatio from "../../Assests/CostEstimation.webp";
import conveyingSystem from "../../Assests/Conveying.webp";
// import Scheduling from '../.../Assests/Scheduling (2).png'
import BlueFooter from "../CommonComponents/BlueFooter/BlueFooter";
import { Helmet } from "react-helmet";
export const Sheduling = () => {
  const text1 = (
    <>
      A Scheduling is a estimating service which signifies the transformation of
      a detailed or initial project plan into a time-focused agenda, considering
      factors such as duration, significance, outside sequencing links, resource
      distribution, and project due dates. It possesses the ability to influence
      the execution of the plan by recognizing realistic time and resource
      constraints.
      <br />
      Each of our design and construction timetables is created using either
      Primavera or MS Project, based on the client's preference. We evaluate and
      modify these timetables on a monthly basis to reflect real-time
      adjustments, emphasizing possible setbacks, discrepancies, and crucial
      assignments. In order to manage expenses effectively, we integrate cost
      and resources into the timetable, showcasing progress, cash flow, earned
      value, and total costs. Explore our example to comprehend our strategy and
      learn how we effectively employ scheduling methods.
    </>
  );
  const text2 = (
    <>
      The BlueBook Estimators provide a reliable and competitive platform for
      performing Primavera Scheduling services. Our Primavera scheduling
      solutions include communication, planning, and examination of a project's
      scope and timeline. We pride ourselves on an accomplished team of
      Primavera project scheduling consultants who have the knowledge and
      trustworthiness necessary to assist you with both proactive and forensic
      consulting services, utilizing advanced construction management
      technology. Moreover, our adept Primavera scheduling experts effectively
      identify and diminish future delays, controlling cost overruns by
      consolidating the project's expenditures.
    </>
  );
  const text3 = (
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

  const text4 = (
    <>
      Our expert, MS Project scheduler, utilizes numerous capabilities of MS
      Project software to improve communication, planning, and evaluation of
      construction projects' scope and timeline. Our distinguished consultants
      excel in reducing overhead and identifying costly delays before they
      occur. Our adept MS Project consultants employ their vast experience and
      knowledge to evaluate and fulfill all client's scheduling needs. As a
      result, we decrease operational costs and enable our scheduling
      consultants to enhance communication and keep stakeholders,
      subcontractors, and suppliers informed.
    </>
  );
  return (
    <div>
      <Helmet>
        <title>Construction Management: CPM Scheduling Services</title>
        <meta
          name="description"
          content="Experts in CPM scheduling services, we offer top-notch construction project and risk management consultancy services."
        />
      </Helmet>
      <PageNameContaqiner text=" Scheduling " />
      <HalfTextHalfImg text={text1} scr={sheduleImg} />
      <BlackBGSubHeading text="Primavera Scheduling" />
      <HalfImgHalfText source={PrimavearaPic} text={text2} />
      <BlackBGSubHeading text="The Process To Deal With Primavera Scheduling" />

      <div className="container">
        <div className="row w-100 m-0 mb-5 justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-12 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <CommonCard
                heading="Work Breakdown Structure (WBS)"
                paragraph="Before starting and setting up the Primavera schedule it is necessary to develop a Work Breakdown Structure (WBS)..While managing work breakdown structure, we analyze, create and manage different WBS databases for our respectable clients."
              />
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <CommonCard
                heading="Primavera Calendars "
                paragraph={
                  <>
                    Calendars allow you to specify available workdays and work
                    hours on a given day. Calendars can also be allocated to
                    each resource and activity in order to define time
                    limitations consistently. For this three types of calendars
                    available
                    <br /> <br />
                    <ul>
                      <li>Global Calendar</li>
                      <li>Project Calendar</li>
                      <li>Resource Calendar.</li>
                    </ul>
                  </>
                }
              />
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <CommonCard
                heading="Activities"
                paragraph={
                  <>
                    Set up and broken down into smaller chunks of work to which
                    the scheduler will assign resources lateron. We have an
                    expert team to provide the following activities with
                    Activity Code for your construction project.
                    <br /> <br />
                    <ul>
                      <li>Activity details</li>
                      <li>Activity usage profile</li>
                      <li>Activity usage spreadsheet</li>
                      <li>Resource usage spreadsheet</li>
                    </ul>
                  </>
                }
              />
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <CommonCard
                heading="Activity Relationships "
                paragraph={
                  <>
                    Tied to the activities, next in line come the relationships,
                    which signify connections between the project activities,
                    generating the order of which the activities will take
                    place. In Primavera P6 relationships are divided into four
                    categories:
                    <br />
                    <br />
                    <ul>
                      <li>Finish to Start (FS),</li>
                      <li>Start to Start (SS),</li>
                      <li>Finish to Finish (FF),</li>
                      <li>Start to Finish (SF).</li>
                    </ul>
                  </>
                }
              />
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <CommonCard
                heading="Milestones"
                paragraph={
                  <>
                    Milestones follow activities and have a fixed date. They
                    represent a definite and exact time during the running of
                    the project.
                    <br />
                    <br /> Milestones are important element in a schedule
                    because they show a snapshot of a specific time, or a major
                    event in the project’s progress, as it unravels, and can
                    often be used to do budget reviews and determine the project
                    status.
                  </>
                }
              />
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <CommonCard
                heading="Risk"
                paragraph={
                  <>
                    We evaluate risks and their impact on an entire construction
                    project along with a risk score that generally varies or
                    fluctuates between 0 -72, relying on the absolute value of
                    three fields that includes probability, cost and schedule.
                  </>
                }
              />
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-12 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <CommonCard
                heading="Schedule Baselines"
                paragraph={
                  <>
                    We evaluate risks and their impact on an entire construction
                    project along with a risk score that generally varies or
                    fluctuates between 0 -72, relying on the absolute value of
                    three fields that includes probability, cost and schedule.
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <BlackBGSubHeading text="MS Project Scheduling" />
      <HalfTextHalfImg text={text4} scr={MsProjectScheduling} />
      <BlackBGSubHeading text="Main Features of Ms Project Scheduling" />
      <div>
        <p className="p-lg-4 p-3">
          We have the best estimating services providers with MS Project
          Scheduling consultants to utilize efficient practices with the help of
          MS project scheduling software.
        </p>
        <div className="row w-100 m-0  justify-content-md-center">
          <div
            className="col-lg-6 col-md-6 col-12 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <p className="p-4">
                Building project preparation for thorough work scope over sight
                MS Project Planning approaches for harmonizing execution tactics
                Establishing genuine task time frames Seamless structuring and
                connection of all tasks Minimizing constraints to the lowest
                level Developing project schedule Supervising the work scope
                Circumventing unachievable deadlines for project milestones
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 col-12 "
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div>
              <p className="p-4">
                Disallow varied float computations Limit unattached tasks
                Examine the crucial pathway Scrutinize a timeline requiring
                sensible float Consider resources needed for project completion
                Confirm the resource strategy Adjust your baseline Proactively
                conduct a schedule risk assessment
              </p>
            </div>
          </div>
        </div>
      </div>
      <Banner text={text3}></Banner>
      <BlackBGSubHeading text="Checkout Our More Services" />
      <MoreServices
        text1="Cost Estimation (Labor & Material)"
        text2="Quantities & Materials Takeoffs"
        src1={CostSetimatio}
        scr2={MaterialTakeoff}
        link1="/cost-estimating-services/"
        link2="/construction-takeoff-services/"
      />
      <BlueFooter />
    </div>
  );
};
