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
			<Route path="/resource-library">
				<ResourceLibraryPage />
			</Route>
			<Route path="/about-us" exact component={AboutUs} />
			<Route path="/about-us/committees" component={CommitteesPage} />
			<Route path="/about-us/staff" component={StaffPage} />
			<Route exact path="/our-work" component={OurWork}/>
			<Route 
				exact 
				path="/our-work/clean-transportation" 
				component={CleanTransportationPage} 
			/>
			<Route 
				exact 
				path="/our-work/clean-transportation/adoption-of-electric-cars" 
				component={DrivingAdoptionElectricCarsPage} 
			/>
			<Route 
				exact 
				path="/our-work/clean-transportation/supporting-regulatory-programs" 
				component={SupportingRegulatoryProgramsPage} 
			/>
			<Route 
				exact 
				path="/our-work/criteria-pollutants-and-air-toxics" 
				component={HazardousAirPollutionPage}
			/>
			<Route
				exact
				path="/our-work/criteria-pollutants-and-air-toxics/criteria-air-pollutants"
				component={CriteriaPollutantsPage}
			/>
			<Route
				exact
				path="/our-work/criteria-pollutants-and-air-toxics/air-toxics"
				component={AirToxicsPage}
			/>
			<Route 
				exact 
				path="/our-work/monitoring" 
				component={MonitoringPage} 
			/>
			<Route
				exact
				path="/our-work/regional-modeling/listos"
				render={(props) => {
					return <ChangePath {...props} pathName={"/initiatives/listos"}/>
				}}
			/>
			<Route 
				exact 
				path="/our-work/regional-modeling" 
				component={RegionalModeling} 
			/>
			<Route 
				exact 
				path="/our-work/clean-transportation/growing-market-for-electric-vehicles" 
				component={ElectricVehicleMarketPage} 
			/>
			<Route 
				exact 
				path="/our-work/stationary-sectors/regulatory-compliance"
				component={RegulatoryCompliancePage}
			/>
			<Route 
				exact 
				path="/our-work/stationary-sectors/wood-heat"
				component={WoodHeatPage}
			/>
			<Route 
				exact 
				path="/our-work/stationary-sectors"
				component={StationarySectorsPage}
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
				component={CamnetPage}
			/>
			<Route 
				exact 
				path="/initiatives/listos" 
				component={ListosPage} 
			/>
			<Route 
				exact 
				path="/initiatives/clean-air-academy"
				component={CleanAirAcademyPage}
			/>
			<Route 
				exact 
				path="/initiatives"
				component={InitiativesPage}
			/>
			<Route 
				exact 
				path="/press"
				component={PressPage}
			/>
			
			<Route exact path="/:landing/:subLanding" component={ SubLanding }/>
			<Route exact path="/:landing/:subLanding/:supportingPage" component={ SupportingPage } />
			<Route path="/" exact>
				<Home />
			</Route>
		</Routes>
	);
}

export default Router;