import PageScaffold from '../../scaffold/PageScaffold';
import React from 'react'; 
import ResourceLibraryLink from "../../documents-links/ResourceLibraryLink";
import DocumentLinks from "../../documents-links/DocumentLinks";


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
      <DocumentLinks docFilter="clean_transportation"/>
      <ResourceLibraryLink docFilter="clean_transportation"/>
    </>
  )
}

export default CleanTransportationPage;

const data = {
  heroImage: "https://images.unsplash.com/photo-1567409378873-888d6fa7debc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2200&q=80",
  "sideImage": "/assets/images/stock/clean_transportation_map.png",
  headline: "Clean Transportation",
  mainText: "Transportation is our nation’s largest source of greenhouse gas emissions and accounts for more than 40 percent of greenhouse gas emissions in the Northeast. On-road and off-road vehicles also emit smog-forming pollutants, particulate matter, and airborne toxic chemicals that are harmful to human health, especially for people who live near busy roads.",
  subText: "NESCAUM guides and supports efforts by state governments to accelerate the nation’s transition to clean transportation. We help states by advising them on effective policies and programs, and we facilitate multi-state collaboration that enables states to achieve more by working together.",
  subHeader: "NESCAUM'S MULTI-STATE INITIATIVES TO DRIVE CLEAN VEHICLE ADOPTION",
  subArticles: [
    {
        title: "Driving the Adoption of Electric Cars",
        content: "NESCAUM leads the Multi-State Zero-Emission Vehicle (ZEV) Task Force, a forum for states that have adopted California’s ZEV regulation to collaborate on complementary policies and programs to accelerate widespread consumer adoption of electric cars.",
        imageSrc: "/assets/images/stock/electric_adoption.jpg",
        "href": "/our-work/clean-transportation/adoption-of-electric-cars"
    },
    {
        title: "Growing the Market for Electric Trucks and Buses",
        content: "NESCAUM facilitates a multi-state collaboration aimed at electrifying trucks and buses to improve air quality in over-burdened communities and to combat climate change.",
        imageSrc: "/assets/images/stock/mhd.jpg",
        "href": "/our-work/clean-transportation/growing-market-for-electric-vehicles"
    },
    {
      title: "Supporting Regulatory Programs",
      content: "NESCAUM helps northeast states coordinate their regulation of mobile sources of air pollution and assists states across the country in adopting and implementing California’s motor vehicle emission standards.",
      imageSrc: "https://images.unsplash.com/photo-1605257638792-9d0e2197fb0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "href": "/our-work/clean-transportation/supporting-regulatory-programs"
    },
  ]
}
