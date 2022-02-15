import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkUnderlineEffect = ({ text, hrefFormatted, color }) => {

	return (
		<P color={ color } >
			<Link href={`${hrefFormatted}`} >{ text }</Link>
		</P>
	)
}

export default LinkUnderlineEffect;

const P = styled.p`
	margin: 0; 
	padding: 0; 
	font-size: inherit;
	height: 35px;

	a {
		text-decoration: none;
		font-size: 22px;
		margin-bottom: 3px;
		color: #222;
		display: inline-block;
		padding-bottom: 2px;
		background-image: linear-gradient(#000, #000);
		background-position: 0 100%; /*OR bottom left*/
		background-size: 0% 2px;
		background-repeat: no-repeat;
		transition:
		background-size 0.3s,
		background-position 0s 0.3s; /*change after the size immediately*/

	}

	a:hover {
		background-position: 100% 100%; /*OR bottom right*/
		background-size: 100% 2px;
		color: #222;
	}

	a:visited {
		color: #222;
	}
`

