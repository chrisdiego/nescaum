import FullWidthHeroImage from "../../content/content-visuals/FullWidthHeroImage";
import ListItems from "../../content/ListItems";
import ExternalLink from "../../links/ExternalLink";
import PageScaffold from "../../scaffold/PageScaffold";
import Column from "../../utility/Column";
import Heading from "../../utility/Heading";
import Paragraph from "../../utility/Paragraph";
import styled from 'styled-components';

const CamnetPage = () => {
    return (
        <>
            <PageScaffold
                heroImage='/images/camnet.jpg'
                headline='CAMNET'
                mainText='CAMNET is a network of web cameras intended to raise public awareness about the effects of air pollution on visibility. Typical visual range in the eastern U.S. is 15 to 30 miles, one-third of what it would be without man-made air pollution.'
            />

        </>
    )
}

export default CamnetPage;