import { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { mobileData } from '../Dropdown';
import { Link } from "react-router-dom";


const SlidePanel = ({ navOpen, setNavOpen }) => {

    const wrapperRef = useRef(null);

    const handleClickOutside = useCallback((event) => {
        if (!navOpen) return;
        if (wrapperRef && !wrapperRef.current.contains(event.target)) {
            setNavOpen(false);
        }
    }, [navOpen, setNavOpen])

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        if (navOpen === true) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        return () => document.removeEventListener('click', handleClickOutside);
    }, [navOpen, handleClickOutside]);

    const sectionHeadings = {
        'our-work': "Our Work",
        initiatives: "Initiatives",
        'about-us': "About Us",
        'resource-library': "Resource Library",
        press: "Press"
    }


    return (
        <Container
            className='slide-panel'
            navOpen={navOpen}
            ref={wrapperRef}
            onClick={(event) => handleClickOutside(event)}
        >
            <SectionHeader>
                <Link to="/" onClick={() => setNavOpen(false)}>
                    Home
                </Link>
            </SectionHeader>
            {Object.keys(mobileData).map((obj, index) => {
                return (
                    <>
                        <SectionHeader>
                            <Link
                                href={`/${obj}`}
                                to={`/${obj}`}
                                onClick={() => setNavOpen(false)}
                            >
                                {sectionHeadings[obj]}
                            </Link>
                        </SectionHeader>
                        {mobileData[obj].map((navItem) => {
                            return mobileData[obj].length <= 1 ? '' : (
                                <Column key={index}>
                                    <SubSectionHeader>
                                        <Link
                                            href={`/${obj}/${navItem.href}`}
                                            to={`/${obj}/${navItem.href}`}
                                            onClick={() => setNavOpen(false)}
                                        >
                                            {navItem.title}
                                        </Link>
                                    </SubSectionHeader>
                                    <Column>
                                        {navItem.subLinks &&
                                            navItem.subLinks.map(link => (
                                                <LinkContainer>
                                                    <Link
                                                        key={link.href}
                                                        className="m-down"
                                                        href={`/${obj}/${navItem.href}/${link.href}`}
                                                        to={`/${obj}/${navItem.href}/${link.href}`}
                                                        onClick={() => setNavOpen(false)}
                                                    >
                                                        {link.title}
                                                    </Link>
                                                    {link.subLink &&
                                                        <Link
                                                            key={link.subLink.href}
                                                            className="m-down sublink"
                                                            href={`/${obj}/${navItem.href}/${link.href}/${link.subLink.href}`}
                                                            to={`/${obj}/${navItem.href}/${link.href}/${link.subLink.href}`}
                                                            onClick={() => setNavOpen(false)}
                                                        >
                                                            {link.subLink.title}
                                                        </Link>
                                                    }
                                                </LinkContainer>
                                            ))}
                                    </Column>
                                </Column>
                            )
                        })}
                    </>)
            })
            }


        </Container>
    )
}

export default SlidePanel;

const Container = styled.nav`
	z-index: 10000; 
	background-color: white; 
	width: 400px; 
	max-width: 100vw; 
	height: 100vh;
	position: absolute; 
	top: 70px;
	left: ${props => props.navOpen === false ? '-400px' : '0'}; 
	transition: .4s ease-in-out;
	padding: 10px 20px 80px 20px;
	box-shadow: ${props => props.navOpen ? '3px 15px 25px -4px rgba(156,156,156,1)' : 'none'} ; 
    overflow: scroll;
`

const SectionHeader = styled.p`
	font-size: 24px;
	margin-bottom: 10px; 
	font-weight: 600;
	margin-top: 20px;
    border-bottom: 2px solid #003354;
    
    a {
        font-weight: 700;
    }
`
const SubSectionHeader = styled.p`
    width: 100%;
	font-size: 16px;
	margin-bottom: 10px; 
	font-weight: 500;
	margin-top: 10px;

    a {
        font-weight: 600;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
`;

const LinkContainer = styled.li`
    margin-left: 15px;
    margin-bottom: 8px;
    list-style-type: none;
`;