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

const MHDZEVPage = () => {
    const keyAnnouncements = [
        {
            title: "NESCAUM Extends Period for Public Comment on Draft Multi-State Medium- and Heavy-Duty Zero-Emission Vehicle Action Plan",
            link: "/assets/documents/mhd-zev-ap-draft-comment-extension.pdf",
            date: "APRIL 19, 2022 ANNOUNCEMENT",
        },
        {
            title: "NESCAUM Welcomes Nevada's Participation in the Multi-State Zero-Emission Electric Trucks Initiative",
            link: "https://www.nescaum.org/documents/nescaum-welcomes-nevada-s-participation-in-the-multi-state-zero-emission-electric-trucks-initiative/",
            date: "MARCH 31, 2022 STATEMENT",
        },
        {
            title: "Draft Multi-State Medium- and Heavy-Duty Zero-Emission Vehicle Action Plan",
            link: "/assets/documents/announcement-mhd-zev-ap-public-draft.pdf",
            date: "MARCH 10, 2022 NESCAUM REQUEST FOR COMMENTS",
        },
        {
            title: "NESCAUM Welcomes the Province of Quebec to the Multi-State MHD Zero-Emission Vehicle Initiative",
            link: "/assets/documents/quebec-statement_9-22-2021.pdf",
            date: "SEPTEMBER 22, 2021 STATEMENT",
        },
        {
            title: "15 States and the District of Columbia Join Forces to Accelerate Bus and Truck Electrification",
            link: "/assets/documents/multistate-truck-zev-mou-media-release-20200714.pdf",
            date: "JULY 14, 2020 PRESS RELEASE ANNOUNCING GOVERNORS’ MOU",
        },
    ];

    const webinars = [
        {
            link: "https://www.nescaum.org/documents/understanding-the-truck-market-webinar-20201029.mp4",
            title: "Understanding the Truck Market, Multi-State ZEV Task Force Webinar, October 29, 2020",
        },
        {
            link: "https://www.nescaum.org/documents/mhd-zev-commercial-and-public-fleets-webinar-2-20201124-2002-1.mp4",
            title: "Early Experiences in Truck Electrification: A Panel Discussion with Commercial and Public Sector Fleets, November 24, 2020",
        },
        {
            link: "https://www.nescaum.org/documents/transit-and-school-bus-electrification-webinar-20201217-2013-1.mp4",
            title: "Transit and School Bus Electrification, December 17, 2020",
            note: " Note: the recording begins five minutes after the start of the webinar."
        },
        {
            link: "https://www.nescaum.org/documents/the-role-of-utilities-in-accelerating-electrification-of-medium-and-heavy-duty-vehicles-webinar-1-20210107-2003-1.mp4",
            title: "The Role of Utilities in Accelerating Electrification of Medium- and Heavy-Duty Vehicles, January 7, 2021",
        },
        {
            link: "https://www.nescaum.org/documents/the-utility-role-in-mhdv-electrification-webinar-20210121-2002-1.mp4",
            title: "The Utility Role in MHDV Electrification: Building the Infrastructure and Managing Costs, January 21, 2021",
        },
        {
            link: "https://www.nescaum.org/documents/innovative-finance-to-accelerate-truck-and-bus-electrification-webinar-20210401-1902-1.mp4",
            title: "Innovative Finance to Accelerate Truck and Bus Electrification, April 1, 2021",
        },
        {
            link: "https://www.nescaum.org/documents/prioritizing-transportation-policy-for-health-and-equity-webinar-20211209-2006-1.mp4",
            title: "Prioritizing Transportation Policy for Health and Equity, December 9, 2021",
        },
    ];

    const learnMore = [
        {
            title: "EV Hub’s Resource Library",
            link: "https://www.atlasevhub.com/materials/resource-library/?fwp_resource_tag=medium-and-heavy-duty",
            note: " provides a compilation of recent reports on MHD vehicle electrification and a brief description of each report."
        },
        {
            title: "CALSTART’s Zero Emission Technology Inventory",
            link: "https://globaldrivetozero.org/tools/zero-emission-technology-inventory/",
            note: " tool provides interactive information on commercially available zero-emission MHD vehicles by region."
        },
    ]

    return (
        <>
            <PageScaffold
                headline='Medium- and Heavy-Duty Zero-Emission Vehicles: Action Plan Development Process'
                heroImage='/assets/images/stock/electric-bus1.png'
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
                <P>
                    This Action Plan is the culmination of two years of work by the ZEV Task Force identifying barriers and opportunities for rapid and equitable truck and bus electrification and actionable policy and program recommendations for state policymakers, utilities, and utility regulators. The plan also includes recommendations for local and federal government policymakers.
                </P>
                <P>
                    Jurisdictions that worked together and with NESCAUM to produce the Action Plan include California, Colorado, Connecticut, Hawaii, Maine, Maryland, Massachusetts, Nevada, New Jersey, New York, North Carolina, Oregon, Pennsylvania, Rhode Island, Vermont, Virginia, Washington, District of Columbia, and Quebec.
                </P>
            </Column>
            <Row width={"al-fu"} center justify="center">
                <ExternalLink href="/assets/documents/multi-state-medium-and-heavy-duty-zev-action-plan.pdf" target="_blank" >
                    <Image src="/assets/images/action_plan.jpeg" alt="Action Plan" />
                </ExternalLink>
                <ExternalLink href="/assets/documents/multi-state-medium-and-heavy-duty-zev-action-plan-dual-page.pdf" target="_blank">
                    <Image src="/assets/images/action_plan_dbl.jpeg" alt="Action Plan" />
                </ExternalLink>
            </Row>
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
                        <Image src="/assets/images/stock/electric-us-map.jpg" />
                    </Column>
                </Row>
            </Column>
            <Column width={"al-fu"} center>

                <Heading
                    text="Key Announcements During Plan Development"
                    size="24px"
                    mt="20px"
                    mb="20px"
                />
                <Row>
                    <Column>
                        {keyAnnouncements.map(point => {
                            return (
                                <ListItem>
                                    <ListTitle>{point.date}</ListTitle>
                                    <ExternalLink href={point.link} target="_blank">
                                        {point.title}
                                    </ExternalLink>
                                </ListItem>
                            );
                        })}
                    </Column>
                </Row>
            </Column>
            <Column width={"al-fu"} center>

                <Heading
                    text="Online Learning Resources"
                    size="24px"
                    mt="20px"
                    mb="20px"
                />
                <SubHeading>
                    Informational Webinars:
                </SubHeading>
                <SubP>
                    NESCAUM held a series of webinars for the multi-state ZEV Task Force to inform the development of the Action Plan. Recordings of the webinars are available below:
                </SubP>
                {webinars.map(webinar => {
                    return (
                        <ListItem>
                            <ExternalLink href={webinar.link} target="_blank">
                                {webinar.title}
                            </ExternalLink>
                            {webinar?.note}
                        </ListItem>
                    );
                })}
                <SubHeading>
                    Want to learn more?
                </SubHeading>
                <SubP>
                    Check out these online resources:
                </SubP>
                {learnMore.map(learn => {
                    return (
                        <ListItem>
                            <ExternalLink href={learn.link} target="_blank">
                                {learn.title}
                            </ExternalLink>
                            {learn?.note}
                        </ListItem>
                    );
                })}
            </Column>
            <DocumentLinks docFilter="mhd_zev_initiative" />
            <ResourceLibraryLink docFilter="mhd_zev_initiative" />
        </>
    );
};

export default MHDZEVPage;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  padding: 0 35px;
`;

const ListTitle = styled.p`
  color: #003354;
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
  margin: 0;
`;

const ListItem = styled.div`
  margin-bottom: 10px;
  margin-left: 30px;

  a {
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
        max-width: 60%;
    }
`;

const SubHeading = styled.h6`
    color: #003354;
    font-weight: bold;
    margin-left: 30px;
    margin-top: 20px;
`;

const SubP = styled.p`
    margin-left: 30px;
    font-size: 14px;

    @media screen and (min-width: 768px) {
        max-width: 60%;
    }
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
