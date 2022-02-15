import styled from 'styled-components';
import Column from '../utility/Column';

const ColorUnderlineText = ({ 
	text, 
	bgColor, 
	center = false, 
	padding
}) => {
	return (
		<Container {...{ bgColor, center, padding }}> 
			<Column {...{center}} align={ center ? 'center' : 'left' }>
				<P center={ center }> { text } </P>
				<Underline />
			</Column>
		</Container>
	)
}

export default ColorUnderlineText; 

const Container = styled.div`
	padding: ${ props => props.padding ? props.padding : "60px 0 40px 0"}; 
	width: 100%; 
	background-color: ${ props => props.bgColor };
	display: flex;
	align-items: ${ props => {
		if (props.center) return 'center'
		return 'flex-start';
	}};
	min-width: 100%; 
`

const P = styled.p`
	text-align: ${props => props.center ? 'center' : 'left'}; 
	font-size: 26px; 
`

const Underline = styled.div`
	width: 300px; 
	height: 5px; 
	background-color: #669935; 
`