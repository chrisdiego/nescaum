import { useState } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import SlidePanel from './SlidePanel';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <PlaceHolderContainer></PlaceHolderContainer>
            <Container>
                <Hamburger {...{ navOpen, setNavOpen }} />
                <SlidePanel {...{ navOpen, setNavOpen }} />
                <Link to="/"><img style={{maxWidth: "100%", maxHeight: "55px", marginLeft: "50px", marginTop: "10px"}} src="/assets/images/logos/logo-color@2x.png" /></Link>
            </Container>
        </>
    )
}

export default NavBar;

const Container = styled.div`
    display: flex; 
    justify-content: start;
	width: 100vw;
	background-color: white; 
	position: fixed;
	min-height: 70px;
	top: 0;
	z-index: 100000;
	box-shadow: 3px 0px 35px -4px rgba(156,156,156,1); 
`

const PlaceHolderContainer = styled.div` // To take up the fixed height at the top of page and force content down
	height: 70px; 
	width: 100vw; 
	background-color: white; 
	z-index: 1000;
`