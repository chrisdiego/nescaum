import React from "react";
import NavigationDesktop from '../nav/NavigationDesktop';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import useIsMobile from '../../../hooks/useIsMobile'; 
import NavBar from '../nav/mobile-nav/Navbar';


const Header = () => {
	const isMobile = useIsMobile(1220); 

	if (!isMobile) {
		return (
				<H>
					<div>
						<Logo className="col-3">
							<StyledLink to="/">
								<Image src="/assets/images/logos/logo-color@2x.png" />
							</StyledLink>
						</Logo>
					</div>
					<NavigationDesktop />
			</H>
		)
	}

	if (isMobile) {
		return (
			<NavBar/>
		)
	}
}

export default Header;

const H = styled.header`
	display: flex; 
	padding: 20px 40px; 
	align-items: flex-end;
	position: relative;
	border-bottom: 1px solid rgba(0, 0, 0, .2);

`

const Logo = styled.div`
	display: flex; 
	flex-direction: column; 
	width: 300px; 
`

const StyledLink = styled(Link)`
	width: 300px;
`

const Image = styled.img`
	max-width: 100%;
`