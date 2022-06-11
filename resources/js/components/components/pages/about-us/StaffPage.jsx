import React, {useEffect, useState} from "react";
import Row from "../../utility/Row";
import StaffMember from "./StaffMember.jsx";
import styled from "styled-components";
import {API_URL} from "../../../../constants/constants";

const PageHeading = styled.h1`
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 40px;
    color: #003354;
    width: 100%;
`;

const StaffPage = () => {
    const [staff, setStaff] = useState([]);

    useEffect(async () => {
        if (!staff.length) {
            let url = `${API_URL}/collections/staff/entries?limit=999999999`;
            const response = await fetch(url);
            const results = await response.json();
            setStaff(results.data);
        }
    }, [staff]);
    //TODO MOVE STAFF CARD TO SEPARATE COMPONENT AND CREATE COLLAPSIBLE DESC
    return (
        <Row width="al-fu" center wrap="true" justify="space-between">
            <PageHeading>Staff</PageHeading>
            {staff?.map((staff) =>  <StaffMember staff={staff} />
            )}
        </Row>
    );
};

export default StaffPage;
