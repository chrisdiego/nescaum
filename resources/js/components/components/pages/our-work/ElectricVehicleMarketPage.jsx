import React from "react";
import styled from "styled-components";
import Heading from "../../utility/Heading";
import Column from "../../utility/Column";
import Row from "../../utility/Row";
import { Link } from "react-router-dom";
import ListItems from "../../content/ListItems";
import ExternalLink from "../../links/ExternalLink";
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink";
import PageScaffold from "../../scaffold/PageScaffold";
import DocumentLinks from "../../documents-links/DocumentLinks";

const ElectricVehicleMarketPage = () => {
  const bulletPoints = [
    "Ways to ensure an equitable transition",
    "Incentives for vehicles and charging infrastructure",
    "Adoption of regulatory standards",
    "Measures to encourage fleet purchases",
    "Utility actions to support infrastructure buildout",
    "Innovative financing strategies",
  ];

  return (
    <>
      <PageScaffold 
        heroImage="/assets/images/stock/electric-buses-unsplash.jpg"
        headline="Growing the Market for Electric Trucks and Buses"
        mainText="Seventeen U.S. states, the District of Columbia, and the Canadian province of Quebec
        worked together through the Multi-State Zero Emission Vehicle (ZEV) Task Force, a
        coalition facilitated by NESCAUM, to produce a bold Action Plan for accelerating a
        transition to zero-emission trucks and buses."
        subText="Transportation of freight and people is the largest source of greenhouse gas emissions
        (GHGs) in the United States. Medium- and heavy-duty (MHD) vehicles – including large
        pick-up trucks and vans, delivery and box trucks, school and transit buses, and long-
        haul delivery trucks – contribute significantly to these emissions, which are putting the
        Earth’s climate in peril. They also produce harmful emissions of particulates and smog-
        forming nitrogen oxides that disproportionately impact public health in communities
        located near freight hubs, bus depots, and trucking corridors."
      />
      <Column width={"al-fu"} center>
        <button href="" target="_blank">
            <Image src="/assets/images/action_plan.jpeg" alt="Action Plan" />
        </button>
        <button href="" target="_blank">
            <Image src="/assets/images/action_plan_dbl.jpeg" alt="Action Plan" />
        </button>
      </Column>
      <Column width={"al-fu"} center>
        
        <Heading
          text="Development of the Action Plan"
          size="24px"
          mt="20px"
          mb="40px"
        />
        <Row>
          <Column>
            <P>
                A <ExternalLink href="/assets/documents/mhdv-zev-mou-20220329.pdf">Memorandum of Understanding (MOU)</ExternalLink> announced in July 2020 directed the Multi-State ZEV Task Force, a unique forum that has galvanized state leadership on <ExternalLink href="https://www.nescaum.org/topics/zero-emission-vehicles">light duty vehicle electrification</ExternalLink> since 2014, to develop an Action Plan to recommend strategies to accelerate the deployment of electric trucks and buses with a focus on communities overburdened by higher levels of air pollution.
            </P>
            <P>
                The MOU also established goals to make at least 30 percent of new MHD vehicle sales ZEVs by 2030, and 100 percent of sales ZEVs by no later than 2050. 
            </P>
            <P>
                To inform the development of the Action Plan, the ZEV Task Force directly engaged many public and private sector experts, partners, and stakeholders—including equity and environmental justice organizations, truck and bus manufacturers, industry and technology experts, charging and fueling providers, utility companies, public and private fleet representatives, commercial financing experts, and environmental advocates. The ZEV Task Force also received <ExternalLink href="https://www.nescaum.org/files/mhd-zev-comments.php">public comments on the draft</ExternalLink> Action Plan.
            </P>
            <P>
                More information about the Action Plan development process is available <ExternalLink href="https://nescaum.sharepoint.com/:w:/s/CleanTransportationTeam/Ear-yecMGf1Nudd5QswZWPUB5SHCQRkBGLbC862siGWyWQ?email=pkwon%40nescaum.org&e=ah47Y0">here</ExternalLink>.
            </P>
          </Column>
          <Column>
          <Image src="/assets/images/stock/electric-us-map.jpg" style={{ marginLeft: 40 }} />
          </Column>
        </Row>
      </Column>
      <DocumentLinks docFilter="electric_trucks"/>
      <ResourceLibraryLink docFilter="electric_trucks"/>
    </>
  );
};

export default ElectricVehicleMarketPage;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  margin-right: 40px;
`;

const BoldP = styled.p`
  color: #003354;
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  font-family: Roboto, sans-serif;
`;

const P = styled.p`
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 16px;

  a {
    color: blue;
    text-decoration: underline;
    font-family: inherit;
    font-size: 16px;
  }
`;
