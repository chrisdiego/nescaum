import React from "react";
import {
	Routes,
	Route,
} from "react-router-dom";
import Home from "../pages/Home";
import OurWork from "../pages/OurWork";
import ResourceLibraryPage from "../pages/ResourceLibraryPage";
import Press from "../pages/Press";
import AboutUs from "../pages/AboutUs";
import SubLanding from "../pages/SubLanding";
import SupportingPage from "../pages/SupportingPage";
import CommitteesPage from "../pages/about-us/CommitteesPage";
import ElectricVehicleMarketPage from "../pages/our-work/ElectricVehicleMarketPage";
import CleanTransportationPage from "../pages/our-work/CleanTransportationPage";
import InitiativesPage from "../pages/InitiativesPage";
import DrivingAdoptionElectricCarsPage from "../pages/our-work/DrivingAdoptionElectricCarsPage";
import SupportingRegulatoryProgramsPage from "../pages/our-work/SupportingRegulatoryProgramsPage";
import HazardousAirPollutionPage from "../pages/our-work/HazardousAirPollutionPage";
import MonitoringPage from "../pages/our-work/MonitoringPage";
import RegionalModeling from "../pages/our-work/RegionalModelingPage";
import ListosPage from "../pages/initiatives/ListosPage";
import ChangePath from "./ChangePath";
import CleanAirAcademyPage from "../pages/initiatives/CleanAirAcademyPage";
import RegulatoryCompliancePage from "../pages/our-work/RegulatoryCompliancePage";
import StationarySectorsPage from "../pages/our-work/StationarySectorsPage";
import PressPage from "../pages/press/PressPage";
import WoodHeatPage from "../pages/our-work/WoodHeatPage";
import CriteriaPollutantsPage from "../pages/criteria-pollutants-air-toxics/CriteriaPollutantsPage";
import AirToxicsPage from "../pages/criteria-pollutants-air-toxics/AirToxicsPage";
import CamnetPage from "../pages/initiatives/CamnetPage";
import StaffPage from "../pages/about-us/StaffPage";

const Router = () => {
	return (
		<Routes>
			<Route path="/resource-library" element={<ResourceLibraryPage/>} />
			<Route path="/about-us" exact element={<AboutUs/>} />
			<Route path="/about-us/committees" element={<CommitteesPage/>} />
			<Route path="/about-us/staff" element={<StaffPage/>} />
			<Route exact path="/our-work" element={<OurWork/>} />
			<Route 
				exact 
				path="/our-work/clean-transportation" 
				element={<CleanTransportationPage/>} 
			/>
			<Route 
				exact 
				path="/our-work/clean-transportation/adoption-of-electric-cars" 
				element={<DrivingAdoptionElectricCarsPage/>} 
			/>
			<Route 
				exact 
				path="/our-work/clean-transportation/supporting-regulatory-programs" 
				element={<SupportingRegulatoryProgramsPage/>} 
			/>
			<Route 
				exact 
				path="/our-work/criteria-pollutants-and-air-toxics" 
				element={<HazardousAirPollutionPage/>}
			/>
			<Route
				exact
				path="/our-work/criteria-pollutants-and-air-toxics/criteria-air-pollutants"
				element={<CriteriaPollutantsPage/>}
			/>
			<Route
				exact
				path="/our-work/criteria-pollutants-and-air-toxics/air-toxics"
				element={<AirToxicsPage/>}
			/>
			<Route 
				exact 
				path="/our-work/monitoring" 
				element={<MonitoringPage/>} 
			/>
			<Route
				exact
				path="/our-work/regional-modeling/listos"
				render={(props) => {
					return <ChangePath {...props} pathName={"/initiatives/listos"} />
				}}
			/>
			<Route 
				exact 
				path="/our-work/regional-modeling" 
				element={<RegionalModeling/>} 
			/>
			<Route 
				exact 
				path="/our-work/clean-transportation/growing-market-for-electric-vehicles" 
				element={<ElectricVehicleMarketPage/>} 
			/>
			<Route 
				exact 
				path="/our-work/stationary-sectors/regulatory-compliance"
				element={<RegulatoryCompliancePage/>}
			/>
			<Route 
				exact 
				path="/our-work/stationary-sectors/wood-heat"
				element={<WoodHeatPage/>}
			/>
			<Route 
				exact 
				path="/our-work/stationary-sectors"
				element={<StationarySectorsPage/>}
			/>
			<Route
				exact
				path="/initiatives/growing-market-for-electric-vehicles"
				render={(props) => {
					return <ChangePath 
						{...props} 
						pathName='/our-work/clean-transportation/growing-market-for-electric-vehicles'
					/>
				}}
			/>
			<Route
				exact
				path="/initiatives/camnet"
				element={<CamnetPage/>}
			/>
			<Route 
				exact 
				path="/initiatives/listos" 
				element={<ListosPage/>} 
			/>
			<Route 
				exact 
				path="/initiatives/clean-air-academy"
				element={<CleanAirAcademyPage/>}
			/>
			<Route 
				exact 
				path="/initiatives"
				element={<InitiativesPage/>}
			/>
			<Route 
				exact 
				path="/press"
				element={<PressPage/>}
			/>
			
			<Route exact path="/:landing/:subLanding" element={< SubLanding />} />
			<Route exact path="/:landing/:subLanding/:supportingPage" element={< SupportingPage />} />
			<Route path="/" exact element={<Home/>} />
		</Routes>
	);
}

export default Router;