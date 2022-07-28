//first create a data model
// heading with banner
//text or image/text or image rows
//import from statamic. do that by making a call to the pages collection on mount. pass the url as a prop to the template when it comes in

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../constants/constants";
import PageScaffold from "../scaffold/PageScaffold";
import Row from "../utility/Row";
import Column
    from "../utility/Column";
import styled from "styled-components";
import Heading from "../utility/Heading";
import NotFound from "./NotFound";

const PageBuilder = () => {
    const { url } = useParams();

    const [pageData, setPageData] = useState();


    useEffect(async () => {
        if (!pageData) {
            let urlF = `${API_URL}/collections/pages/entries`;
            const response = await fetch(urlF);
            const results = await response.json();
            const sortedResults = results.data.find(entry => entry.page_url === url)

            if (!sortedResults)
                setPageData('not found');
            else
                setPageData(sortedResults);
        }
    }, []);

    const renderLayout = ({ section_type: { key }, text, image, document }) => {

        const Header = () => (
            <Heading
                text={text}
                size="24px"
                mt="30px"
                mb="30px"
            />
        );

        const ImageAndText = () => {
            return (
                <>
                    <Row style={{ marginTop: "30px", marginBottom: "30px", flexDirection: "row" }}>
                        <P style={{ marginLeft: "15px" }}>
                            {text}
                            {
                                document?.map(({ document_link, document_title }) => (
                                    <Li>
                                        <a href={document_link?.url} target="_blank">{document_title}</a>
                                    </Li>
                                ))
                            }
                        </P>
                        <Column>
                            {image && <ImageStyled src={image.url} />}
                        </Column>
                    </Row>
                </>
            )
        };

        const ImageAndTextInverse = () => {
            return (
                <>
                    <Row style={{ marginTop: "30px", marginBottom: "30px", flexDirection: "row" }}>
                        <Column>
                            {image && <ImageStyled src={image.url} />}
                        </Column>
                        <P style={{ marginLeft: "15px" }}>
                            {text}
                            {
                                document?.map(({ document_link, document_title }) => (
                                    <Li>
                                        <a href={document_link?.url} target="_blank">{document_title}</a>
                                    </Li>
                                ))
                            }
                        </P>
                    </Row>
                </>
            )
        };

        const Text = () => {
            return (
                <Row style={{ margin: "30px", textAlign: "center" }}>
                    <P>
                        {text}
                        {
                            document?.map(({ document_link, document_title }) => (
                                <Li>
                                    <a href={document_link?.url} target="_blank">{document_title}</a>
                                </Li>
                            ))
                        }
                    </P>
                </Row>
            );
        };

        const Image = () => {
            return (
                <Row style={{ margin: "30px" }}>
                    <Column>
                        {image && <ImageStyledSolo src={image.url} />}
                    </Column>
                </Row>
            );
        };

        const sectionLayouts = {
            heading: <Header />,
            imageAndText: <ImageAndText />,
            imageAndTextInverse: <ImageAndTextInverse />,
            image: <Image />,
            text: <Text />,
        };

        return sectionLayouts[key];
    }

    if (pageData === 'not found')
        return <NotFound />

    return !pageData?.notFound ? (
        <>
            <PageScaffold
                heroImage={pageData?.banner?.url}
                headline={pageData?.title}
                sideImage={pageData?.intro_image?.url}
                mainText={pageData?.intro}
                subText={pageData?.introsubtext}
            />
            <Column width={"al-fu"} center>
                {pageData?.sections?.map(section => {
                    return (
                        <Row>
                            {renderLayout(section)}
                        </Row>
                    )
                })}
            </Column>
        </>
    ) : <NotFound />

}

export default PageBuilder;

const ImageStyled = styled.img`

`;

const ImageStyledSolo = styled.img`
  margin: 0 auto;
`;

const P = styled.div`
  font-weight: 400;
  font-size: 16px;

  a {
    color: blue;
    text-decoration: underline;
    font-family: inherit;
    font-size: 16px;
  }
`;

const Li = styled.li`
  color: #669935;
  margin-top: 8px;
  a {

  }
`;
