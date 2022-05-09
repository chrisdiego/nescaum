import PageScaffold from "../../scaffold/PageScaffold";
import ListItems from "../../content/ListItems";
import ExternalLink from "../../links/ExternalLink";
import Column from "../../utility/Column";
import DocumentLinks from "../../documents-links/DocumentLinks";
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink";

const CriteriaPollutantsPage = () => {
    return (
        <>
            <PageScaffold
                headline='Criteria and Hazardous Air Pollutants'
            />
            <Column width="al-fu" center mt={20} mb={40}>
                <ListItems singular>
                <b>National Ambient Air Quality Standards (NAAQS)</b>. National Ambient Air Quality Standards (NAAQS). The Clean Air Act requires EPA to conduct periodic reviews of the NAAQS for the six criteria air pollutants. The NAAQS are the foundation of a wide range of air quality programs, so it is essential that those standards are protective of the public health and welfare of all communities.  NESCAUM reviews and comments on EPA proposals concerning NAAQS standard setting, including: 
                </ListItems>
                <ListItems singular>
                    Procedures that affect the derivation of the NAAQS,
                </ListItems>
                <ListItems singular>
                Planning, science, and policy assessments developed by EPA and its advisory committees during the mandated periodic reviews, and
                </ListItems>
                <ListItems singular>
                NAAQS proposed subsequent to the reviews.
                </ListItems>
                <ListItems singular>
                Recent NECAUM comments have addressed EPA proposals concerning{' '}
                <ExternalLink href='https://www.nescaum.org/documents/nescaum-transparency-snprm-comments-2020518-final.pdf/' >cost-benefit analyses, the use of scientific study data</ExternalLink>
                , and the NAAQS for fine particulate matter{' '}
                <ExternalLink href='https://www.nescaum.org/documents/nescaum-pm2-5-naaqs-comments-final-20200629.pdf/'>(PM<span style={{fontSize: 8}}>2.5</span>)</ExternalLink>{' '}
                and{' '}
                <ExternalLink href='https://www.nescaum.org/documents/nescaum-ozone-naaqs-comments-final-20201001.pdf/'>
                    ozone
                </ExternalLink>
                </ListItems>
                <ListItems singular>
                <b>Supporting state air quality planning efforts.</b> NESCAUM facilitates state discussions and information sharing to support the development of State Implementation Plans, which are designed to enable air quality to attain and maintain the NAAQS. Interstate coordination is particularly essential for ozone, particulate matter, and regional haze, which are highly impacted by regional and long-range pollutant transport. 
                </ListItems>
            </Column>
            <DocumentLinks docFilter="air_toxics"/>
            <ResourceLibraryLink docFilter="air_toxics"/>
        </>
    )
}

export default CriteriaPollutantsPage;