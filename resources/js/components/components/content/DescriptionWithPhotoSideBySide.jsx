import { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowWithBox from "../content/content-visuals/ArrowWithBox";
import Heading from "../utility/Heading";

const DescriptionWithPhotoSideBySide = ({
    inverse,
    nullBorderBottom,
    data,
    index,
    customColorScheme,
}) => {
    const [colorScheme, setColorScheme] = useState({
        bgcolor: "#003354",
        color: "white",
    });
    const { title, content, imageSrc, href, external } = data;
    const { bgColor, color } = colorScheme || {};

    useEffect(() => {
        if (customColorScheme) {
            setColorScheme(customColorScheme);
            return;
        }

        const colorSchemes = {
            0: {
                bgColor: "#003354",
                color: "white",
            },
            1: {
                bgColor: "#ececec",
                color: "#003354",
            },
            2: {
                bgColor: "#006CB3",
                color: "white",
            },
        };

        const key = index % 3;
        setColorScheme(colorSchemes[key]);
    }, [index, customColorScheme]);

    return (
        <Container
            {...{ bgColor, inverse, nullBorderBottom }}
            className="DescriptionWithPhotoSideBySide"
        >
            <CenterContainer>
                <TextContainer {...{ inverse }}>
                    <Heading text={title} color={color} mb={"20px"} size={32} />
                    <Span color={color}> {content} </Span>

                    {href && (
                        <ArrowWithBox
                            color={color}
                            href={href}
                            openNewTab={external}
                        />
                    )}
                </TextContainer>
            </CenterContainer>
            <PhotoContainer>
                <Img src={imageSrc} />
            </PhotoContainer>
        </Container>
    );
};

export default DescriptionWithPhotoSideBySide;

DescriptionWithPhotoSideBySide.defaultProps = {
    imageSrc: "",
    data: {},
};

const Container = styled.div`
    max-width: 100%;
    width: 100%;
    min-height: 400px;
    justify-content: center;
    display: flex;
    // overflow: hidden;
    background-color: ${(props) => props.bgColor};
    border-bottom: ${(props) =>
        props.nullBorderBottom ? 0 : "5px solid white"};
    flex-direction: ${(props) => (!props.inverse ? "row" : "row-reverse")};

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        max-width: 100%;
        height: auto;
        min-height: unset;
    }
`;

const CenterContainer = styled.div`
    max-width: 700px;
    justify-content: center;
    display: flex;
    min-width: 800px;

    @media screen and (max-width: 1000px) {
        max-width: 100%;
        border-bottom: 5px solid white;
        min-width: unset;
    }
`;

const TextContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 100%;
    padding: 50px 60px;
    display: flex;
    flex-direction: column;

    ${(props) => {
        if (props.inverse)
            return `
			border-left: 5px solid white; 
		`;
        return `
			border-right: 5px solid white; 
		`;
    }}

    @media screen and (max-width: 1000px) {
        border: 0;
        padding: 20px;
    }
`;

const PhotoContainer = styled.div`
    width: 100%;
    min-width: 300px;
    overflow: hidden;

    @media screen and (max-width: 1000px) {
        max-height: 400px;
    }
`;

const Img = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    min-width: 100%;
    max-height: 550px;
    @media screen and (max-width: 768px) {
        min-height: 200px;
        max-width: 100%;
        height: 400px;
    }
`;

const Span = styled.span`
    color: ${(props) => (props.color ? props.color : "inherit")};
    margin-bottom: 40px;
    width: 80%;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        width: 100%;
    }
`;
