// import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import { useHistory, Redirect, Route, Routes, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  AboutUs,
  ContactUs,
  EstimationFees,
  Home,
  Payments,
  Services,
  Testimonials,
  WorkSample,
} from "./Components";
import { CostEstimation } from "./Components/CostEstimation/CostEstimation";
import {Material_TakeOff } from './Components/Material_TakeOff/Material_TakeOff'
import { Sheduling } from "./Components/Sheduling/Sheduling";
import PublicRoute from "./Utilities/publicRouting";
import { Planning } from "./Components/Planning/Planning";
import { GeneralRequirements } from "./Components/GeneralRequirements/GeneralRequirements";
import { SiteConstruction } from "./Components/SiteConstruction/SiteConstruction";
import { ThermalProtection } from "./Components/ThermalProtection/ThermalProtection";
import { Masonry } from "./Components/CommonComponents/Masonry/Masonry";
import { ConcreteEstimation } from "./Components/ConcreteEstimation/ConcreteEstimation";
import { MetalEstimations } from "./Components/MetalsEstimations/MetalEstimations";
import { WooDandPlastic } from "./Components/Wood & Plastic/WooD&Plastic";
import { DoorsandWindows } from "./Components/DoorsandWindows/DoorsandWindows";
import { Finishes } from "./Components/Finishes/Finishes";
import { ScrollToTop } from "./Components/CommonComponents/ScrollToTop";
import { DummyForm } from "./Components/CommonComponents/DummyForm";
import { ConveyingSystem } from "./Components/ConveyingSystem/ConveyingSystem";
import { Equipment } from "./Components/Equipment/Equipment";
import { Furnishings } from "./Components/Furnishings/Furnishings";
import { Electrical } from "./Components/Electrical/Electrical";
import { Mechanical } from "./Components/Mechanical/Mechanical";
import { Plumbing } from "./Components/Plumbing/Plumbing";
import { HVAC } from "./Components/HVAC/HVAC";
import { SpecialConstruction } from "./Components/SpecialConstruction/SpecialConstruction";
import { Specialities } from "./Components/Specialities/Specialities";
import { PageNotFound } from "./Components/PageNotFound";



function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route extact path="/" element={<Home />} />
          <Route extact path="/*" element={<PageNotFound />} /> 
         {/* <Route extact path="/home" element={<Home />} /> */}
          <Route extact path="/services/" element={<Services />} />
          <Route extact path="/contact-us/" element={<ContactUs />} />
          <Route extact path="/testimonials/" element={<Testimonials />} />
          <Route extact path="/estimation-fee/" element={<EstimationFees />} />
          <Route extact path="/work-samples/" element={<WorkSample />} />
          <Route extact path="/about-us/" element={<AboutUs />} />
          <Route extact path="/payment/" element={<Payments />} />
          <Route extact path="/cost-estimating-services/" element={<CostEstimation></CostEstimation>}/>
          <Route extact path="/construction-takeoff-services/" element={<Material_TakeOff></Material_TakeOff>}/>
          <Route extact path="/cost-scheduling/" element={<Sheduling></Sheduling>}/>
         <Route extact path="/planning/" element={<Planning></Planning>}/> 
         <Route extact path="/general-requirements/" element={<GeneralRequirements></GeneralRequirements>}/> 
         <Route extact path="/sitework-estimating-services/" element={<SiteConstruction></SiteConstruction>}/> 
         <Route extact path="/thermal-moisture-protection-estimating-services/" element={<ThermalProtection></ThermalProtection>}/> 
         <Route extact path="/masonry-estimating-services/" element={<Masonry></Masonry>}/> 
         <Route extact path="/concrete-estimating-services/" element={<ConcreteEstimation></ConcreteEstimation>}/> 
         <Route extact path="/metals-estimating-services/" element={<MetalEstimations></MetalEstimations>}/> 
         <Route extact path="/wood-plastic-estimating-services/" element={<WooDandPlastic/>}/> 
         <Route extact path="/door-window-estimating-services/" element={<DoorsandWindows/>}/> 
         <Route extact path="/interior-exterior-finishes/" element={<Finishes/>}/> 
         {/* <Route extact path="/DummyForm" element={<DummyForm/>}/>  */}
         <Route extact path="/conveying-systems/" element={<ConveyingSystem/>}/> 
         <Route extact path="/equipment-estimating-services/" element={<Equipment/>}/> 
         <Route extact path="/furnishing-estimating-services/" element={<Furnishings/>}/> 
         <Route extact path="/electrical-estimating-services/" element={<Electrical/>}/> 
         <Route extact path="/mechanical-estimating-services/" element={<Mechanical/>}/> 
         <Route extact path="/plumbing-estimating-services/" element={<Plumbing/>}/> 
         <Route extact path="/hvac-estimating-services/" element={<HVAC/>}/> 
         <Route extact path="/special-construction-estimating-services/" element={<SpecialConstruction/>}/> 
         <Route extact path="/specialities/" element={<Specialities/>}/>
         {/* <Route extact path="ContactUs" element={<ContactUs/>}/>  */}
          </Route>
          
          
      </Routes>
    </Router>
  );
}

export default App;
