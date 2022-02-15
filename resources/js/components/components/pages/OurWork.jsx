import React from "react";
import Row from "../utility/Row";
import Heading from "../utility/Heading";
import Paragraph from "../utility/Paragraph";
import {ourWorkData} from "../../mock-data/ourWork";
import styled from "styled-components";
import Column from "../utility/Column";
import { Link } from 'react-router-dom';

const ImageThumbnailWithLabel = styled.div`
    & a {
      padding: 15px;
      height: 300px;
      width: 300px;
      background: url(${(props) => props.img}) no-repeat;
      background-size: cover;
      color: white;
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative
    }
    &:hover {
      color: white;
      cursor: pointer;
      background-color: black;
      box-shadow: 1px 2px 10px black;
      opacity: 0.9;
    }
  &:hover:before {
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    
  }
`;

const OurWork = () => {

    return (
        <>
            <Row width='al-fu' center>
                <Heading text='Our Work' mb='20px' mt='60px'/>
                <Paragraph>
                </Paragraph>
            </Row>
                <Row width='al-fu' center wrap>
                {ourWorkData.map(work => {
                    return (
                        <Column style={{margin: '30px'}} width="initial">
                            <ImageThumbnailWithLabel img={work.imageSrc} target="_blank">
                                <Link to={work.href}>{work.title}</Link>
                            </ImageThumbnailWithLabel>
                        </Column>
                    );
                })}
                </Row>

        </>
    );
}

export default OurWork;