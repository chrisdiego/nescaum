import React from "react";
import styled from "styled-components";
import Heading from "../../utility/Heading";
import FullWidthHeroImage from "../../content/content-visuals/FullWidthHeroImage";
import Column from "../../utility/Column";
import BreadcrumbNavigation from "../../breadcrumb/BreadcrumbNavigation";
import Row from "../../utility/Row";
import { Link } from "react-router-dom";
import ListItems from "../../content/ListItems";
import ExternalLink from "../../links/ExternalLink";
import DocumentLinks from "../../documents-links/DocumentLinks";
import PageScaffold from "../../scaffold/PageScaffold";

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
          text="A Governors’ Agreement and Action Plan"
          size="24px"
          mt="20px"
          mb="40px"
        />
        <Row>
          <Column>
            <P>
              In July 2020, NESCAUM coordinated the development and release of a
              governor’s{" "}
              <ExternalLink href="https://www.nescaum.org/documents/zev-mou-8-governors-signed-20131024.pdf/">
                Memorandum of Understanding (MOU)
              </ExternalLink>{" "}
              committing fifteen states and the District of Columbia to work
              together to advance the market for electric trucks and buses.
            </P>
            <P>
              The MOU sets zero-emission sales targets for new medium- and
              heavy-duty vehicles: 30% by 2030 and 100% by 2050. The MOU further
              commits the signatory states to working with NESCAUM through the
              <Link to="/our-work/clean-transportation/adoption-of-electric-cars"> ZEV Task Force </Link>to develop a Multi-State Action
              Plan (LINK TO PLAN DEVELOPMENT PAGE) for advancing progress toward
              a self-sustaining market for zero-emission trucks and buses. The
              Action Plan will include recommendations for action in several
              areas, such as:
            </P>
            <ListItems list={bulletPoints} />
          </Column>
          <Image src="/assets/images/stock/electric-us-map.png" style={{ marginLeft: 40 }} />
        </Row>
      </Column>
      <DocumentLinks docFilter="electric_trucks"/>
    </>
  );
};

export default ElectricVehicleMarketPage;

const Image = styled.img`
  max-width: 400px;
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
