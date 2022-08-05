import PhotoWithTransparentBox from "../content/PhotoWithTransparentBox";
import React, { useState, useEffect } from "react";
import { API_URL } from "../../../constants/constants";
import styled from "styled-components";
import Heading from "../utility/Heading";
import Column from "../utility/Column";
import Row from "../utility/Row";
import ColorUnderlinedText from "../content/ColorUnderlinedText";
import DescriptionWithPhotoSideBySide from "../content/DescriptionWithPhotoSideBySide";
import { Link } from "react-router-dom";
import Paragraph from "../utility/Paragraph";
import Button from "../utility/Button";

const Home = () => {
    const [logos, setLogos] = useState();

    useEffect(async () => {
        if (!logos) {
            let urlF = `${API_URL}/collections/member_states_logos/entries`;
            const response = await fetch(urlF);
            const results = await response.json();
            setLogos(results.data);
            console.log(results)
        }
    }, []);

    const homeData = [
        {
            title: 'CAMNET',
            content: 'CAMNET is a network of web cameras intended to raise public awareness about the effects of air pollution on visibility. Typical visual range in the eastern U.S. is 15 to 30 miles, one-third of what it would be without manmade air pollution.',
            imageSrc: '/assets/images/stock/electricbus.jpg',
            href: 'https://hazecam.net/',
            external: true
        },
        {
            title: "Zero-Emission Medium and Heavy-Duty Vehicle Initiative",
            content:
                "Truck and bus electrification is a top priority for many states. A coalition of 18 jurisdictions in the United States and Canada has committed to work together to slash GHG emissions and harmful air pollution by accelerating the market for zero-emission trucks and buses.",
            imageSrc: '/assets/images/stock/electric-truck1.jpg',
            href: "/initiatives/mhd-zev-initiative",
        },
        {
            title: "Residential/Commerical Wood Combustion",
            content:
                "Emissions from wood heating have serious public health consequences. NESCAUM evaluated the current certification process for wood stoves and recommended changes to reduce emissions and protect public health.",
            imageSrc: "/assets/images/stock/wood-on-fire-pexels.jpg",
            href: "/initiatives/test-method-development",
        },
        {
            title: "Long Island Sound Tropospheric Ozone Study (LISTOS)",
            content:
                "Air quality problems in the greater New York City metropolitan area impact the health of over 20 million people. Launched in 2017, NESCAUM’s LISTOS initiative brings together a large group of researchers and marshalls a wide array of data sources to help air quality regulators understand and address pollution in and around the NYC metro area.",
            imageSrc: "/assets/images/stock/listos.jpg",
            href: "/initiatives/listos",
        },
    ];

    return (
        <>
            <PhotoWithTransparentBox />
            <Row width="al-fu" p="80px 0 40px 0" center>
                <Column width="half">
                    <Heading
                        text="The Northeast States for Coordinated Air Use Management"
                        bold
                    />
                    <Heading text="(NESCAUM)" />
                    <Paragraph primary>
                        NESCAUM as a coalition of state air agencies promotes regional cooperation and action by its member states in support of effective programs to reduce the adverse public health and environmental impacts of air pollution and climate change.
                    </Paragraph>
                    <StyledLink href="/about-us" to="/about-us">
                        <Button text="LEARN MORE ABOUT US" />
                    </StyledLink>
                </Column>
                <Column width="half">
                    <Img src="/assets/images/maps/color-map.png" alt="map" />
                </Column>
            </Row>
            <ColorUnderlinedText
                center
                text="FEATURED INITIATIVES"
                bgColor="#ececec"
                padding="80px 0"
            />
            {homeData.map((data, index) => (
                <DescriptionWithPhotoSideBySide
                    key={index}
                    data={data}
                    index={index}
                    inverse={index % 2 !== 0}
                    nullBorderBottom={index === homeData.length - 1}
                />
            ))}
            <Column pt={40} pb={40} center>
                <ColorUnderlinedText center text={"NESCAUM MEMBER STATES"} />
                <PngContainer>
                    {logos?.sort((a, b) => {
                        return a.title.localeCompare(b.title)
                    })?.map((obj) => (
                        <Png
                            src={obj?.logo?.url}
                            alt={obj?.title}
                        />
                    ))}
                </PngContainer>
            </Column>
        </>
    );
};

export default Home;

const OrangeSpan = styled.span`
    color: #d95c14;
    margin-left: 100px;
    font-size: 36px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        margin: 20px auto 20px auto;
        max-width: 100vw;
    }
`;
const Img = styled.img`
    width: 100%;
    max-width: 100vw;

    @media screen and (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
    }
`;

const StyledLink = styled(Link)`
    @media screen and (max-width: 768px) {
        margin: 0 auto;
    }
`;

const Png = styled.img`
    width: 100%;
    height: 100%;
    margin: 10px 20px;
    max-height: 150px;
    max-width: 100px;

    @media screen and (max-width: 768px) {
        max-width: 75px;
    }
`;

const PngContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
`;
