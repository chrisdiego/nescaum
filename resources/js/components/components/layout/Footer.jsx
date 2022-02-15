import React from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Typography from "../utility/Typography";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Row from "../utility/Row";
import Column from "../utility/Column";
import useIsMobile from "../../../hooks/useIsMobile";

const Footer = () => {

	const isMobile = useIsMobile();

	const mb = isMobile ? 40 : 0;

	return (
		<StyledFooter className="container-secondary">
			<Column columns={6}>
				<Img src="/assets/images/logos/logo_white.png" alt="footer"/>
			</Column>

			<Row className="row">
				<Column  columns={4} mr={30} mobileFull style={{marginBottom: mb}}>
						<Typography variant="p" className="text-small">NESCAUM is a regional, nonprofit association of public agencies working together to advance clean air.</Typography>
						<Typography variant="p" className="text-small">We work with state policy makers, federal agences, and stakeholders to develop clean air programs. NESCAUM's members-state environmental agencies include many of the most innovative policy makers of clean air programs in the country.</Typography>
				</Column>
				<Column  columns={2} mobileFull mr={20} style={{marginBottom: mb}}>
					<Typography variant="h5">Site Links</Typography>
					<br />
					<nav>
						<ul>
							<li>
								<Link to="/our-work">Our Work</Link>
							</li>
							<li>
								<Link to="/initiatives">Initiatives</Link>
							</li>
							<li>
								<Link to="/resource-library">Resource Library</Link>
							</li>
							<li>
								<Link to="/press">Press</Link>
							</li>
							<li>
								<Link to="/aboutUs">About Us</Link>
							</li>
						</ul>
					</nav>
				</Column>
				<Column  columns={3} mobileFull>
					<Typography variant="h5">Contact Us</Typography>
					<br />
					<ul>
						<li>
							<a href="mailto:info@nescaum.org">
								<FontAwesomeIcon icon={faEnvelope} className="mr-1" />
								info@nescaum.org
							</a>
						</li>
						<li>
							<a href="tel:6172592000">
								<FontAwesomeIcon icon={faPhone} className="mr-1" />
								617-259-2000
							</a>
						</li>
					</ul>
				</Column>
			</Row>
		</StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
	padding: 4rem; 

	@media screen and (max-width: 768px) {
		padding: 20px 0;
		width: 100%;
	}
`

const Img = styled.img`
	max-width: 60vw; 
	margin-bottom: 40px;

	@media screen and (max-width: 768px) {
		margin: 40px auto; 
	}
`