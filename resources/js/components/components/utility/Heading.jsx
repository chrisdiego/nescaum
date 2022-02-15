import styled from 'styled-components';

const Heading = ({ 
	size = 36, 
	color, 
	bold, 
	text, 
	mt = '60px', 
	mb = '20px', 
	align, 
	width,
	...props
}) => {
	return (
		<H2 {...{ size, color, bold, mt, mb, align, width }} {...props}>
			{ text }
		</H2>
	)
}

export default Heading; 

Heading.defaultProps = {
	size: 36, 
	color: '#003354', 
	bold: false, 
	mt: 0, 
	mb: 0, 
	align: 'left',
}

const H2 = styled.h2`
	color: ${ props => props.color }; 
	font-weight: ${ props => props.bold ? 700 : 400 };
	font-size: ${ props => props.size }px; 
	margin-top: ${ props => props.mt }; 
	margin-bottom: ${ props => props.mb ? props.mb : '20px' }; 
	text-align: ${ props => props.align }; 
	max-width: 100%; 
	width: ${props => props.width ? props.width : null };

	@media screen and (max-width: 768px) {
		font-size: ${props => props.size - 12}px;
		padding-right: 20px;
		width: 100%; 
	}
`