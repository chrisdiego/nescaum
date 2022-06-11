import React, {useState} from "react";
import styled from "styled-components";

const Staff = styled.div`
    width: 280px;
    height: 280px;
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

const StaffMember = ({ staff: { image, title, description, position } }) => {
    const [collapsed, setCollapsed] = useState(false);
    const shortDesc = description ? description?.substring(0, 30) + '...' : null;

    return (    
        <StaffCard onClick={() => setCollapsed(!collapsed)}>
            <Staff src={image?.permalink}>{title}</Staff>
                <StaffName>
                    {title}
                    <br />
                    <i>{position}</i>
                </StaffName>
                <StaffDescription>
                    {collapsed ?  description : shortDesc}
                </StaffDescription>
        </StaffCard>
    );
};

export default StaffMember;


