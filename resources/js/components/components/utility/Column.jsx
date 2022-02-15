import styled from 'styled-components';

const Column = ({ 
	children, 
	width, 
	justify, 
	align, 
	pt, 
	pb, 
	pl, 
	center, 
	mt, 
	mb, 
	mr,
	ml, 
	margin, 
	mobileProps,
	mobileFull,
	classNames,
	style,
	columns, 
}) => {
	return (
		<Container {
			...{ 
				width, 
				justify, 
				align, 
				pt, 
				pb, 
				pl,
				center, 
				mt, 
				mb, 
				mr,
				ml,
				mobileProps,
				mobileFull, 
				columns,
				style, 
				margin, 
			}}
			className={classNames ? classNames : 'column'}
		>
			{ children }
		</Container>
	)
}

export default Column; 

const Container = styled.div`
	display: flex; 
	flex-direction: column; 
	max-width: 1200px;
	width: 100%;
	width: ${ props => {
		if (props.width === 'half') return '50%'; 
		if (props.width === 'al-fu') return '90%'; //almost-full which I treat as 90% with margin 0 auto
		if (props.columns) return `${props.columns * 8.3}%`; // 100 / 12 = 8.3inf
		if (props.width) return props.width;
		return '100%';
	}};
	justify-content: ${ props => props.justify ? props.justify : 'flex-start' }; 
	align-items: ${ props => props.align ? props.align : 'flex-start' };
	padding-top: ${ props => props.pt ? props.pt + 'px' : null };
	padding-bottom: ${ props => props.pb ? props.pb + 'px' : null };
	padding-left: ${ props => props.pl ? props.pl + 'px' : null};
	margin: ${ props => {
		if (props.center) return '0 auto';
		if (props.margin) return props.margin; 

		return 0;
	}};
	margin-top: ${ props => props.mt ? props.mt + 'px' : null};
	margin-bottom: ${ props => props.mb ? props.mb + 'px' : null};
	margin-right: ${ props => props.mr ? props.mr + 'px' : null};
	margin-right: ${ props => props.ml ? props.ml + 'px' : null};

	@media screen and (max-width: 768px) {
		width: ${props => props.mobileFull ? '100%' : '90%'}; 
		margin: 0 auto; 
	}
`