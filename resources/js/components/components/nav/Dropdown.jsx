import styled from "styled-components";
import { Link } from "react-router-dom";

export const data = {
    "our-work": [
        {
            title: "CLEAN TRANSPORTATION",
            href: "clean-transportation",
            subLinks: [
                {
                    title: "Driving Adoption of Electric Cars",
                    href: "adoption-of-electric-cars",
                },
                {
                    title: "Growing the Market for Electric Vehicles",
                    href: "growing-market-for-electric-vehicles",
                },
                {
                    title: "Supporting Regulatory Programs",
                    href: "supporting-regulatory-programs",
                },
            ],
        },
        {
            title: "CRITERIA POLLUTANTS AND AIR TOXICS",
            href: "criteria-pollutants-and-air-toxics",
            subLinks: [
                {
                    title: "Criteria Air Pollutants",
                    href: "criteria-air-pollutants",
                },
                {
                    title: "Air Toxics",
                    href: "air-toxics",
                },
            ],
        },
        {
            title: "MONITORING",
            href: "monitoring",
        },
        {
            title: "REGIONAL MODELING",
            href: "regional-modeling",
            subLinks: [
                {
                    title: "LISTOS",
                    href: "listos",
                },
            ],
        },
        {
            title: "STATIONARY SOURCES",
            href: "stationary-sources",
            subLinks: [
                {
                    title: "Regulatory Compliance",
                    href: "regulatory-compliance",
                },
                {
                    title: "Wood Heat",
                    href: "wood-heat",
                },
                {
                    title: "Building Electrification",
                    href: "building-electrification",
                },
            ],
        },
    ],
    initiatives: [
        {
            title: "CAMNET",
            href: "camnet",
        },
        {
            title: "Clean Air Academy",
            href: "clean-air-academy",
        },
        {
            title: "LISTOS",
            href: "listos",
        },
        {
            title: "MHD ZEV Initiative",
            href: "mhd-zev-initiative",
        },
        {
            title: "Test Method Development",
            href: "test-method-development",
        },
    ],
    "about-us": [
        {
            title: "Our Staff",
            href: "about-us/staff",
        },
        {
            title: "Committees",
            href: "about-us/committees",
        },
        {
            title: "OTC",
            href: "about-us/otc",
        },
    ],
};

export const mobileData = {
    "our-work": [
        {
            title: "CLEAN TRANSPORTATION",
            href: "clean-transportation",
            subLinks: [
                {
                    title: "Driving Adoption of Electric Cars",
                    href: "adoption-of-electric-cars",
                },
                {
                    title: "Growing the Market for Electric Vehicles",
                    href: "growing-market-for-electric-vehicles",
                },
                {
                    title: "Supporting Regulatory Programs",
                    href: "supporting-regulatory-programs",
                },
            ],
        },
        {
            title: "CRITERIA POLLUTANTS AND AIR TOXICS",
            href: "criteria-pollutants-and-air-toxics",
            subLinks: [
                {
                    title: "Criteria Air Pollutants",
                    href: "criteria-air-pollutants",
                },
                {
                    title: "Air Toxics",
                    href: "air-toxics",
                },
            ],
        },
        {
            title: "MONITORING",
            href: "monitoring",
        },
        {
            title: "REGIONAL MODELING",
            href: "regional-modeling",
            subLinks: [
                {
                    title: "LISTOS",
                    href: "listos",
                },
            ],
        },
        {
            title: "STATIONARY SOURCES",
            href: "stationary-sources",
            subLinks: [
                {
                    title: "Regulatory Compliance",
                    href: "regulatory-compliance",
                },
                {
                    title: "Wood Heat",
                    href: "wood-heat",
                },
                {
                    title: "Building Electrification",
                    href: "building-electrification",
                },
            ],
        },
    ],
    initiatives: [
        {
            title: "CAMNET",
            href: "camnet",
        },
        {
            title: "Clean Air Academy",
            href: "clean-air-academy",
        },
        {
            title: "LISTOS",
            href: "listos",
        },
        {
            title: "MHD ZEV Initiative",
            href: "mhd-zev-initiative",
        },
        {
            title: "Test Method Development",
            href: "test-method-development",
        },
    ],
    "resource-library": [
        {
            title: "RESOURCE LIBRARY",
            href: "/resource-library"
        }
    ],
    "press": [
        {
            title: "PRESS",
            href: "/press"
        }
    ],
    "about-us": [
        {
            title: "Our Staff",
            href: "staff",
        },
        {
            title: "Committees",
            href: "committees",
        },
        {
            title: "OTC",
            href: "otc",
        },
    ],
};

const Dropdown = ({ hoveredText, mouseLeaveHandler, initRef, aboutRef }) => {
    if (hoveredText === "our-work") {
        return (
            <Container>
                <CenterContainer>
                    {data[hoveredText] &&
                        data[hoveredText].map((obj, index) => (
                            <Column key={index}>
                                <SectionHeader>
                                    <Link
                                        href={`/${hoveredText}/${obj.href}`}
                                        to={`/${hoveredText}/${obj.href}`}
                                    >
                                        {obj.title}
                                    </Link>
                                </SectionHeader>
                                <Column>
                                    {obj.subLinks &&
                                        obj.subLinks.map(link => (
                                            <>
                                            <Link
                                                key={link.href}
                                                className="m-down"
                                                href={`/${hoveredText}/${obj.href}/${link.href}`}
                                                to={`/${hoveredText}/${obj.href}/${link.href}`}
                                            >
                                                {link.title}
                                            </Link>
                                            {link.subLink && 
                                                <Link
                                                    key={link.subLink.href}
                                                    className="m-down sublink"
                                                    href={`/${hoveredText}/${obj.href}/${link.href}/${link.subLink.href}`}
                                                    to={`/${hoveredText}/${obj.href}/${link.href}/${link.subLink.href}`}
                                                >
                                                    {link.subLink.title}
                                                </Link>
                                            }
                                            </>
                                        ))}
                                </Column>
                            </Column>
                        ))}
                    <HR />
                </CenterContainer>
            </Container>
        );
    }

    if (hoveredText === "initiatives") {
        return (
            <FloatingContainer
                left={initRef.offsetLeft}
                top={initRef.offsetTop}
                onMouseLeave={mouseLeaveHandler}
            >
                {data["initiatives"].map((link) => (
                    <Link
                        key={link.href}
                        href={`/initiatives/${link.href}`}
                        to={`/initiatives/${link.href}`}
                    >
                        {link.title}
                    </Link>
                ))}
            </FloatingContainer>
        );
    }

    if (hoveredText === "about-us") {
        return (
            <FloatingContainer
                left={aboutRef.offsetLeft}
                top={aboutRef.offsetTop}
                onMouseLeave={mouseLeaveHandler}
            >
                {data["about-us"].map((link) => (
                    <Link
                        key={link.href}
                        href={`/${link.href}`}
                        to={`/${link.href}`}
                    >
                        {link.title}
                    </Link>
                ))}
            </FloatingContainer>
        );
    }
};

export default Dropdown;

const Container = styled.div`
    position: absolute;
    min-width: 100vw;
    min-height: 420px;
    background-color: white;
    left: 0;
    top: 152px;
    border-bottom: 1px solid grey;
    z-index: 999;
`;

const CenterContainer = styled.div`
    margin: 0 auto;
    padding: 40px 0 0 0;
    margin-bottom: -20px;
    width: 90%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

const HR = styled.hr`
    width: 100%;
    border-top: 2px solid #003354;
    position: absolute;
    top: 120px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 240px;
`;

const SectionHeader = styled.span`
    font-size: 18px;
    color: #003354;
    margin: 10px 20px 30px 20px;
    max-width: 280px;
    align-items: center;
    min-height: 81px;
    display: flex;
    justify-content: center;

    a {
        font-weight: 700;
        display: inline-block;
    }

    &:first-child {
        margin-left: 0 !important;
    }

    &:nth-child(4) {
        padding-left: 20px;
    }

    &:last-child {
        margin-right: 0;
    }
`;

const FloatingContainer = styled.div`
    position: absolute;
    top: ${(props) => props.top + 35}px;
    left: ${(props) => props.left}px;
    min-width: 300px;
    background-color: white;
    z-index: 1000000 !important;
    display: flex;
    flex-direction: column;
    padding: 10px;

    a {
        margin-bottom: 20px;

        &:first-child {
            margin-top: 20px;
        }
    }
`;
