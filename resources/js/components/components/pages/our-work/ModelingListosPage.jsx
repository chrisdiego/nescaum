import PageHeading from "../../content/PageHeading";
import React from "react";
import Row from "../../utility/Row";
import Paragraph from "../../utility/Paragraph";
import { Link } from "react-router-dom";

const ModelingListosPage = () => {
    return (
        <div style={{ margin: "30px 0" }}>
            <Row width="al-fu" center direction="column">
                <PageHeading
                    title="Long Island Sound Tropospheric Ozone Study (LISTOS)"
                />
                <br />
                <Paragraph>
                    The Long Island Sound Tropospheric Ozone Study investigates how interactions between land masses and water bodies impact ozone formation in and around Long Island Sound. Using the coupled meteorology-chemistry model WRF-CMAQ at a high resolution of 1.33 km by 1.33 km, NESCAUM is leveraging observations gathered during the summer 2018 LISTOS field campaign to conduct model performance evaluation and optimization. Sensitivity simulations are being used to test meteorology parameterizations and develop emissions reductions scenarios based on an improved understanding of formaldehyde to NOX ratios in the New York City/Long Island area. 
                </Paragraph>
                <br />
                <Link to="/initiatives/listos">
                    Learn More
                </Link>
                
            </Row>
        </div>
    );
};

export default ModelingListosPage;
