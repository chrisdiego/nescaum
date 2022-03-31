import styled from 'styled-components';
import ColorUnderlineText from '../../content/ColorUnderlinedText';
import ExternalLink from '../../links/ExternalLink';
import PageScaffold from '../../scaffold/PageScaffold';
import Column from '../../utility/Column';
import Paragraph from '../../utility/Paragraph';
import Heading from '../../utility/Heading';
import DocumentLinks from "../../documents-links/DocumentLinks";

const ListosPage = () => {
  return (
    <>
      <PageScaffold 
        heroImage='/assets/images/stock/listos.jpg'
        headline='Listos'
        sideImage='/assets/images/maps/listos-map.png'
        mainText='While air pollution levels have dropped markedly over the years across much of the United States, the New York City (NYC) metropolitan area (comprised of portions of New Jersey, New York, and Connecticut in and around NYC) continues to persistently violate both past and recently revised federal health-based air quality standards for ground-level ozone. '
        subText='This air quality problem afflicts not only the health and well-being of over 20 million people living in the NYC metro area, but also millions of people living downwind in Connecticut, Rhode Island, Massachusetts, and beyond.'
      />
      <Column width='al-fu' center pb={40}>
        <ColorUnderlineText text='ABOUT LISTOS'/>
        <Column>
          <Paragraph>
            A unique feature of this chronic ozone problem is pollution transported in a northeast direction out of NYC over Long Island Sound. The relatively cool waters of Long Island Sound confine the pollutants in a shallow and stable marine boundary layer. Afternoon heating over coastal land creates a sea breeze that carries the air pollution inland from the confined marine layer, resulting in high ozone concentrations in Connecticut and at times farther east into Rhode Island and Massachusetts. The following map shows a recent example of this from May 18, 2017, with high ozone levels seen along the entire Connecticut shoreline and farther downwind along the Rhode Island/Massachusetts border.
          </Paragraph>
          <Column width='half'>
            <Paragraph>
              A key research problem in addressing this regional pollution problem is understanding the sources and temporal emission profiles of the ozone precursors nitrogen oxides (NOx) and volatile organic compounds (VOCs). The NYC metropolitan area has a large concentration of emission sources, including cars and trucks, ships, industrial boilers, stationary diesel engines, consumer products, power plants, and vegetation. The multitude of these and other source types and their temporally varying emission profiles throughout a day and across a multi-day ozone episode creates a complex and dynamic atmospheric mixture. Underlying the emissions are diverse weather patterns that can promote, or dampen, the evolution and transport of a polluted air mass across the region.          
            </Paragraph>
            <Paragraph>
              To investigate the evolving nature of ozone formation and transport in the NYC region and downwind, NESCAUM has launched the Long Island Sound Tropospheric Ozone Study (LISTOS). LISTOS involves a large group of researchers with state and federal agencies and academia that bring a diverse set of resources, expertise, and instrumentation skills. These encompass satellite, aircraft, balloon (ozone sondes), marine, and ground-based data collection and analysis methods to probe the New York City pollution plume and its evolution over and around Long Island Sound. Initial aircraft studies began in May 2017, with expanded activities and planning efforts during 2018 and beyond.   
            </Paragraph>     
          </Column>
        </Column>
      <ColorUnderlineText text='DATA ACCESS'/>
      <Paragraph>
        After performing QA/QC, LISTOS researchers will be posting publicly available data sets on the LISTOS data archive site maintained by NASA: <ExternalLink href='https://www-air.larc.nasa.gov/missions/listos/index.html.'>https://www-air.larc.nasa.gov/missions/listos/index.html. </ExternalLink>
      </Paragraph>
      <Paragraph>
        Below are lists of the LISTOS research organizations and supporting funders. For more information on LISTOS, contact Dr. Paul Miller, NESCAUM Executive Director, pmiller @ nescaum.org.
      </Paragraph>

      <Heading text='LISTOS PARTICIPANTS' mb='40px' mt='20px'/>

      {participants.map((p) => {
        return (
          <UnderlinedAnchor key={ p.href } href={ p.href } target='_blank' rel='noreferrer noopener'>
            { p.text }
          </UnderlinedAnchor>
        )
      })}

      <Heading text='LISTOS SUPPORTERS' mb='40px' mt='40px'/>
        {supporters.map((s) => {
          return (
            <UnderlinedAnchor key={ s.href } href={ s.href } target='_blank' rel='noreferrer noopener'>
              { s.text }
            </UnderlinedAnchor>
          )
        })}
      </Column>
      <DocumentLinks docFilter="listos"/>
    </>
  )
}

const UnderlinedAnchor = styled.a`
  color: #222; 
  text-decoration: underline; 
  font-family: Roboto, sans-serif; 
`

const participants = [
  {href: 'https://www.noaacrest.org/', text: 'The City College of New York / NOAA-CREST Center'},
  {href: 'http://www.ct.gov/deep/site/default.asp', text: 'Connecticut Department of Energy and Environmental Protection'},
  {href: 'http://www.maine.gov/dep/', text: 'Maine Department of Environmental Protection'},
  {href: 'https://www.nasa.gov/langley/science', text: 'National Aeronautics and Space Administration Langley Research Center'},
  {href: 'https://www.arl.noaa.gov/', text: 'National Oceanic and Atmospheric Administration Air Resources Laboratory'},
  {href: 'http://www.nj.gov/dep/', text: 'New Jersey Department of Environmental Protection'},
  {href: 'https://www.dec.ny.gov/', text: 'New York State Department of Environmental Conservation'},
  {href: 'http://www.somas.stonybrook.edu/', text: 'Stony Brook University School of Marine and Atmospheric Sciences'},
  {href: 'https://www.albany.edu/asrc/', text: 'University at Albany Atmospheric Sciences Research Center'},
  {href: 'https://cires.colorado.edu/', text: 'University of Colorado, Cooperative Institute for Research in Environmental Sciences'},
  {href: 'http://www.atmos.umd.edu/~rammpp/', text: 'University of Maryland, College Park RAMMPP'},
  {href: 'https://www.epa.gov/aboutepa/about-office-research-and-development-ord', text: 'U.S. Environmental Protection Agency Office of Research and Development'},
  {href: 'https://www.epa.gov/aboutepa/epa-region-1-new-england', text: 'U.S. Environmental Protection Agency Region 1 (New England)'},
  {href: 'http://www.gentner.yale.edu/', text: 'Yale University Department of Chemical &amp; Environmental Engineering and Peabody Museum'},
]

const supporters = [
  {href: 'https://www.nasa.gov/', text: 'National Aeronautics and Space Administration'},
  {href: 'http://www.nfwf.org/', text: 'National Fish and Wildlife Foundation'},
  {href: 'http://www.noaa.gov/', text: 'National Oceanic and Atmospheric Administration'},
  {href: 'http://www.nj.gov/dep/', text: 'New Jersey Department of Environmental Protection'},
  {href: 'https://www.dec.ny.gov/', text: 'New York State Department of Environmental Conservation'},
  {href: 'https://www.nyserda.ny.gov/', text: 'New York State Department of Environmental Conservation'},
  {
    href: 'https://www.epa.gov/aboutepa/about-office-research-and-development-ord', 
    text: 'U.S. Environmental Protection Agency Region 1 (New England)'
  },
]

export default ListosPage; 