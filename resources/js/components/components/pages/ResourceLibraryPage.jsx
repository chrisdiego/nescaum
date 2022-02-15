import ResourceLibraryForm from '../forms/ResourceLibraryForm';
import Column from '../utility/Column';
import Heading from '../utility/Heading';
import Paragraph from '../utility/Paragraph';
import Row from '../utility/Row';
import React from 'react';
import styled from 'styled-components';

const ResourceLibraryPage = () => {

	return (
		<>
			<Column center width='al-fu' pt={80} mb={60}>
				<Heading text='RESOURCE LIBRARY' bold/>
				<h1 style={{color: 'orange', fontWeight: "bold"}}>
					Under development
				</h1>

				<Row justify='space-between' mt={40}>
					<Column width='50%'>
						<ContainerWithBorder>
							<Heading text='Your Search Results' size={28} mb='0'/>
						</ContainerWithBorder>
					</Column>

					<ResourceLibraryForm />
				</Row>

			</Column>	
		</>
	);
}

export default ResourceLibraryPage;

const ContainerWithBorder = styled.div`
	width: 100%;
	border-bottom: 1px solid rgba(0, 0, 0, .4);
	display: flex; 
	align-items: flex-start;
	height: 50px;
	align-items: center;
`
