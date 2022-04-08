import PageHeading from "../../content/PageHeading";
import React from "react";
import Row from "../../utility/Row";
import Paragraph from "../../utility/Paragraph";
import ExternalLink from "../../links/ExternalLink";

const OTCPage = () => {
    return (
        <div style={{ margin: "30px 0" }}>
            <Row width="al-fu" center direction="column">
                <PageHeading
                    title="OTC or Ozone Transport Commission"
                />
                <br />
                <Paragraph>
                    NESCAUM has managed the Ozone Transport Commission (OTC) since 2019. The OTC is a multi-state organization created under the Clean Air Act. It is responsible for advising EPA on transport issues and for developing and implementing regional solutions to the ground-level ozone problem in the Northeast and Mid-Atlantic regions.
                </Paragraph>
                <br />
                <ExternalLink href="https://otcair.org/">
                    Learn More
                </ExternalLink>
                
            </Row>
        </div>
    );
};

export default OTCPage;
