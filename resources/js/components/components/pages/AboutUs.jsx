import React from "react";
import PageScaffold from "../scaffold/PageScaffold";
import Row from "../utility/Row";
import Paragraph from "../utility/Paragraph";
import styled from "styled-components";

const HighlightedSection = styled.div`
  background: lightgray;
  padding: 60px 80px;
  margin: 40px 0;
`;

const SectionHeading = styled.h2`
  margin-bottom: 20px;
  color: #003354; 
`;

const PageHeading = styled.h1`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #003354;
`;


const AboutUs = () => {
    return (
        <Row width="al-fu" center direction="column">
            <PageHeading>About Us</PageHeading>
            <SectionHeading>Mission Statement</SectionHeading>
            <Paragraph color="#003354">The Northeast States for Coordinated Air Use Management (NESCAUM) catalyzes and guides state action to improve air quality, curb climate-disrupting greenhouse gas emissions, and enable a rapid transition to clean energy.  Building on more than fifty years of experience, NESCAUM’s special expertise lies in coordinating and supporting collaboration across states to devise, implement, and scale effective solutions.</Paragraph>
            <br />
            <SectionHeading>What We Do</SectionHeading>
            <Paragraph>
                NESCAUM works to improve public health and protect the environment by reducing air pollution and greenhouse gas emissions from electricity generation, vehicles, industry, fuels, and local sources.  We provide scientific, technical, analytical, and policy support to the air quality programs of our member states in the Northeast to assist them in meeting their climate and air quality goals.  Our member states are Connecticut, Maine, Massachusetts, New Hampshire, New Jersey, New York, Rhode Island, and Vermont.  Building on more than fifty years of experience, NESCAUM’s special expertise lies in coordinating and supporting collaboration across states to devise, implement, and scale effective solutions.
            </Paragraph>
            <HighlightedSection>
                <SectionHeading>History</SectionHeading>
                <Paragraph>
                    NESCAUM was founded to improve coordination among the Northeast states and to help our member state air agencies implement more effective air quality solutions. Formed as a non-profit organization in 1967  to address air pollution from New England power plants, NESCAUM is the oldest regional air quality organization of its kind. Today, NESCAUM addresses a wide spectrum of air quality, climate, and energy issues: greenhouse gas mitigation, mercury reductions, diesel exhaust controls, energy efficiency improvements, cleaner cars and fuels, environmental justice, and new and more effective regulatory policies. In addition to providing scientific, technical, analytical, and policy support to the air quality programs of the eight Northeast states, we provide a forum for our member states to work together to address climate and energy challenges on a regional basis and to better represent the region’s  interests  in national policy debates.
                </Paragraph>
            </HighlightedSection>
        </Row>
    );
}

export default AboutUs;