import PageScaffold from '../../scaffold/PageScaffold';
import React from 'react'; 


const CleanTransportationPage = () => {
  const {
    heroImage, 
    headline, 
    sideImage, 
    mainText, 
    subText, 
    subArticles, 
    subHeader
  } = data; 

  return (
    <>
      <PageScaffold
        {...{
          heroImage, 
          headline, 
          sideImage, 
          mainText, 
          subText, 
          subArticles, 
          subHeader
        }}
      />
    </>
  )
}

export default CleanTransportationPage;

const data = {
  heroImage: "https://images.unsplash.com/photo-1567409378873-888d6fa7debc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80",
  "sideImage": "https://images.unsplash.com/photo-1473042904451-00171c69419d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80",
  headline: "Clean Transportation",
  mainText: "Transportation is the largest source of greenhouse gas emissions nationally and accounts for more than 40 percent of greenhouse emissions in the Northeast. On-road and off-road vehicles also emit smog-forming pollutants, particulate matter, and airborne toxic chemicals that are harmful to human health, especially for people who live near busy roads.",
  subText: "NESCAUM is working to help its member states accelerate the transition to clean transportation by providing advice and information about effective policies and programs and by facilitating regional collaboration that enables states to achieve more by working together.",
  subHeader: "NESCAUM'S MULTI-STATE INITIATIVES TO DRIVE CLEAN VEHICLE ADOPTION",
  subArticles: [
    {
      title: "Supporting Regulatory Programs",
      content: "NESCAUM facilitates regional coordination on regulating mobile sources of air pollution, supports collaboration among states that have adoped California's motor vehicle emissions standards, and helps states assess emissions and health benefits of regulations.",
      imageSrc: "https://images.unsplash.com/photo-1605257638792-9d0e2197fb0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "href": "/our-work/clean-transportation/supporting-regulatory-programs"
    },
    {
      title: "Driving the Adoption of Electric Cars",
      content: "NESCAUM leads the Multi-State Zero Emission Vehicle (ZEV) Task Force, which provides a forum for Northeast states that have adopted California's ZEV regulation to work together on policies and programs to accelerate widespread consumer adoption of electric cars.",
      imageSrc: "https://images.unsplash.com/photo-1623596240012-63ab3432fa1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGVsZWN0cmljJTIwY2FyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
      "href": "/our-work/clean-transportation/adoption-of-electric-cars"
    },
    {
      title: "Growing the Market for Electric Trucks and Vehicles",
      content: "NESCAUM is leading a multi-state effort to reduce emissions from trucks and buses and improve air quality in disadvantaged communities by spurring early demand for new zero-emission trucks and buses.",
      imageSrc: "https://images.unsplash.com/photo-1485575301924-6891ef935dcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80",
      "href": "/our-work/clean-transportation/growing-market-for-electric-vehicles"
    }
  ]
}
