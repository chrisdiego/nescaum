import DescriptionWithPhotoSideBySide from "../content/DescriptionWithPhotoSideBySide"
import Heading from "../utility/Heading"
import Row from "../utility/Row"

const InitiativesPage = () => {

  const colorSchemes = [
    { bgColor: '#003354', color: 'white' }, 
    { bgColor: '#F2F2F2', color: '006CB3' },
    { bgColor: '#669935', color: 'white' }, 
    { bgColor: '#F2F2F2', color: '006CB3' },
    { bgColor: '#006CB3', color: 'white' },
  ]

  return (
    <>
      <Row width='al-fu' center>
        <Heading text='Initiatives' mb='20px' mt='60px'/> 
      </Row>
      <div>
        {
          data.map((data, index) => (
            <DescriptionWithPhotoSideBySide
              key={ index }
              data={ data }
              index={ index }
              inverse={ index % 2 !== 0 }
              nullBorderBottom={ index === data.length - 1 }
              customColorScheme={colorSchemes[index]}
            />
          ))
        }
      </div>
    </>
  )
}

export default InitiativesPage

const data = [
	{
		title: 'CAMNET', 
		content: 'CAMNET is a network of web cameras intended to raise public awareness about the effects of air pollution on visibility. Typical visual range in the eastern U.S. is 15 to 30 miles, one-third of what it would be without manmade air pollution.', 
		imageSrc: '/images/electricbus.jpg',
		href: 'https://hazecam.net/', 
    external: true
	}, 
	{
		title: 'NESCAUMS Clean Air Academy', 
		content: 'NESCAUM’s Clean Air Academy provides air pollution training for staff in our member state air quality agencies. Courses are provided by EPA’s National Air Quality Training Program through EPA’s Learning Management System (LMS) or by private training contractors. NESCAUM operates the program with federal funding.', 
		imageSrc: '/images/wood-on-fire-pexels.jpg',
	}, 
	{
		title: 'Long Island Sound Tropospheric Ozone Study (LISTOS)', 
		content: 'While air pollution levels have dropped markedly over the years across much of the United States, the New York City (NYC) metropolitan area (comprised of portions of New Jersey, New York, and Connecticut in and around NYC) continues to persistently violate both past and recently revised federal health-based air quality standards for ground-level ozone.', 
		imageSrc: '/images/listos.jpg',
	}, 
	{
		title: 'MHD ZEV Initiatives', 
		content: 'In the United States, greenhouse gas emissions from the movement of goods are growing faster than any other segment of the transportation sector. As more and more consumers turn to online shopping, truck volumes are expected to increase by 36% over the next decade. ', 
		imageSrc: '/images/listos.jpg',
	}, 
	{
		title: 'Test Method Development', 
		content: 'NYSERDA Integrated Duty Cycle Test Method for Certification of Wood-Fired Stoves Using Cordwood: Measurement of Particulate Matter (PM) and Carbon Monoxide (CO) Emissions and Heating Efficiency', 
		imageSrc: '/images/wood-burning.jpg',
	}, 
]