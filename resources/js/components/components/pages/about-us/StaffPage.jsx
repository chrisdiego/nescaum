import React from "react";
import {staffPage} from "../../../mock-data/staffPage";
import Row from '../../utility/Row';
import styled from "styled-components";

const Staff = styled.div`
  width: 280px;
  height: 280px;
  background: url(${props => props.src}) no-repeat;
  background-size: cover;
  border-radius: 350px;
  color: transparent;
  }
  & img {
    max-height: 150px;
    border-radius: 65px;
  }
`;

const StaffCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StaffName = styled.h5`
  font-weight: bold;
  margin: 60px;
`;

const PageHeading = styled.h1`
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #003354;
  width: 100%;
`;

const StaffPage = () => {

    return (
        <Row width="al-fu" center wrap justify="space-between">
            <PageHeading>
                Staff
            </PageHeading>
            {
                staffPage.map(staff => {
                    return(
                        <StaffCard>
                        <Staff src={staff.src}>
                            {staff.name}
                        </Staff>
                            <StaffName>
                                {staff.name}
                                <br />
                                <i>{staff.title}</i>
                            </StaffName>
                        </StaffCard>

                            );
                })
            }
        </Row>
    );
}

export default StaffPage;