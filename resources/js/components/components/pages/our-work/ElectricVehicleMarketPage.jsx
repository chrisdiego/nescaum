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
        sideImage="/assets/images/stock/electric-trucks-side-image.png"
        mainText="In the United States, greenhouse gas emissions from vehicles that
        are used to move goods are growning faster than emissions from any
        other segment of the transportation sector. As more consumers turn
        to online shopping, truck volumes are to be expected to increase
        by 36% over the next decade."
        subText="While trucks and buses represent a small fraction of on-road
        vehicles today, they account for more than a quarter of
        transportation sector greenhouse gas emissions. Diesel emissions
        from trucks and buses are also major contributors of harmful
        smog-forming pollutants, particulate matter, and air toxics.
        Moreover, these emissions disproportionately impact communities
        located near major truck routes, ports, and distribution centers."
      />
      <Column width={"al-fu"} center>
        
        <Heading
          text="A Governors??? Agreement and Action Plan"
          size="24px"
          mt="20px"
          mb="40px"
        />
        <Row>
          <Column>
            <P>
            A diverse coalition of 18 jurisdictions in the United States and Canada has committed, through the {" "}
              <ExternalLink href="/assets/documents/mhdv-zev-mou_12-14-2021.pdf">
              Multi-State Medium- and Heavy-Duty Zero Emission Vehicle Memorandum of Understanding (MOU)
              </ExternalLink>{" "}
              , to work to slash GHG emissions and harmful air pollution by accelerating the market for zero-emission trucks and buses.
            </P>
            <P>
              The MOU sets zero-emission sales targets for new medium- and
              heavy-duty vehicles: 30% by 2030 and 100% by 2050. The MOU further
              commits the signatory states to working with NESCAUM through the
              <Link to="/our-work/clean-transportation/adoption-of-electric-cars"> ZEV Task Force </Link>to develop a <Link to="/initiatives/mhd-zev-initiative">Multi-State Action
              Plan</Link> for advancing progress toward
              a self-sustaining market for zero-emission trucks and buses. The
              Action Plan will include recommendations for action in several
              areas, such as:
            </P>
            <ListItems list={bulletPoints} />
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
