import React, {useState} from "react";
import styled from "styled-components";

const Staff = styled.div`
    width: 280px;
    height: 280px;
    max-width: 100%;
    background: url(${(props) => props.src}) no-repeat;
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
    margin-bottom: 40px;
    width: 33%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const StaffName = styled.h6`
    font-weight: bold;
    margin: 20px 60px 0 60px;
    text-align: center;
`;

const StaffDescription = styled.p`
    margin: 10px 40px 0 40px;
    font-size: 13px;
`;

const StaffDescriptionButton = styled.button`
    color: #003354;
    background: transparent;
    border: 0;
    width: 100%;
    text-align: center;
    font-weight: bold;
`;

const StaffMember = ({ staff: { image, title, description, position } }) => {
    const [collapsed, setCollapsed] = useState(false);
    
    const safeEmptyDesc = description ? description : 'No description found.';

    return (    
        <StaffCard onClick={() => setCollapsed(!collapsed)}>
            <Staff src={image?.permalink}>{title}</Staff>
                <StaffName>
                    {title}
                    <br />
                    <i>{position}</i>
                </StaffName>
                <StaffDescription>
                    <StaffDescriptionButton onClick={() => setCollapsed(!collapsed)}>{collapsed ? 'Hide' : 'Show'} Description</StaffDescriptionButton>
                    {collapsed ?  <p>{safeEmptyDesc}</p> : null}
                </StaffDescription>
        </StaffCard>
    );
};

export default StaffMember;


