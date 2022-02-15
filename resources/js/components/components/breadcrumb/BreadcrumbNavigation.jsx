import { useState, useEffect } from 'react'; 
import styled from 'styled-components'; 
import useGetRouterParams from "../../../hooks/useGetRouterParams";

const BreadcrumbNavigation = () => {

	const { path } = useGetRouterParams(); 
	const [ nav, setNav ] = useState('')

	useEffect(() => {
		const nav = path
			.substring(1)
			.replaceAll('/', ' > ')
			.replaceAll('-', ' ')
		
		setNav(`Home > ${nav}` );
	}, [path]); 

	return (
		<Span>
			{ nav }
		</Span>
	)
}

export default BreadcrumbNavigation; 

const Span = styled.span`
	font-size: 14px; 
	font-family: open-sans, sans-serif; 
	margin: 40px 0 30px 0;
`