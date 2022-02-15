import Arrow from '../..//utility/Arrow';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ExternalLink from '../../links/ExternalLink';

const ArrowWithBox = ({ 
	position, 
	color, 
	href, 
	openNewTab, 
}) => {
	console.log('openNewTab::', openNewTab)
	return (
		<>
			{openNewTab && (
				<Container>
					<ExternalLink
						href={href} 
						to={href} 
					>
						<Box {...{ position, color }}>
							<Arrow fill={ color }/>
						</Box>
					</ExternalLink>
				</Container>
			)}

			{href && !openNewTab &&(
				<Container>
					<Link 
						href={href} 
						to={href} 
						target={openNewTab ? '_blank' : '_self'}
						rel={openNewTab ? 'noopener noreferrer' : null}
					>
						<Box {...{ position, color }}>
							<Arrow fill={ color }/>
						</Box>
					</Link>
				</Container>
			)}

			{!href && (
				<Box {...{ position, color }}>
					<Arrow fill={ color }/>
				</Box>
			)}
		</>
	)
}

export default ArrowWithBox;

ArrowWithBox.defaultProps = {
	position: 'left', 
	color: 'white', 
	href: '#'
}

const Container = styled.div`
	max-width: 30px;
`

const Box = styled.div`
	max-width: 30px; 
	height: 30px; 
	display: flex; 
	align-items: center; 
	justify-content: center; 
	border: 1px solid ${ props => props.color }; 
	border-opacity: .5;
	margin: ${ props => {
		if (props.position === 'center') return '0 auto'; 
		return 0; 
	}};

	:hover {
		cursor: pointer; 
	}
`