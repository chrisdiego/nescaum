import { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

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
	}, [ navOpen, handleClickOutside ]);



	return (
		<Container 
			className='slide-panel' 
			navOpen={ navOpen } 
			ref={ wrapperRef } 
			onClick={ (event) => handleClickOutside(event) }
		>
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
	left: ${ props => props.navOpen === false ? '-400px' : '0'}; 
	padding: 10px;
	transition: .4s ease-in-out;
	padding: 50px 20px;
	box-shadow: ${ props => props.navOpen ? '3px 15px 25px -4px rgba(156,156,156,1)' : 'none' } ; 
`

const BottomSection = styled.div`
	margin-top: 40px; 
`

const SectionHeader = styled.p`
	font-size: 34px;
	margin-bottom: 10px; 
	font-weight: 300;
	margin-top: 20px;
`