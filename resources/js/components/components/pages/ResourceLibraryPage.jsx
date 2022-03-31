import Column from "../utility/Column";
import Heading from "../utility/Heading";
import Row from "../utility/Row";
import React from "react";
import { useState, useEffect } from "react";
import { API_URL } from "../../../constants/constants";
import styled from "styled-components";
import ExternalLink from "../links/ExternalLink";

const documentTypes = [
    {
        key: "announcement",
        name: "Announcement"
    },
    {
        key: "article",
        name: "Article"
    },
    {
        key: "comments",
        name: "Comments"
    },
    {
        key: "excel",
        name: "Excel File"
    },
    {
        key: "fact_sheet",
        name: "Fact Sheet"
    },
    {
        key: "fr_notice",
        name: "FR Notice"
    },
    {
        key: "legal",
        name: "Letter"
    },
    {
        key: "map",
        name: "Map"
    },
    {
        key: "meeting_materials",
        name: "Meeting Materials"
    },
    {
        key: "memorandum",
        name: "Memorandum"
    },
    {
        key: "notes",
        name: "Notes"
    },
    {
        key: "presentation",
        name: "Presentation"
    },
    {
        key: "press_release",
        name: "Press Release"
    },
    {
        key: "protocol",
        name: "Protocol"
    },
    {
        key: "recommendations",
        name: "Recommendations"
    },
    {
        key: "report",
        name: "Report"
    },
    {
        key: "statement",
        name: "Statement"
    },
    {
        key: "mou",
        name: "MOU"
    },
    {
        key: "testimony",
        name: "Testimony"
    },
    {
        key: "video",
        name: "Video"
    }
];

const topics = [
    {
        key: "air_toxics",
        name: "Air Toxics"
    },
    {
        key: "area_sources",
        name: "Area Sources"
    },
    {
        key: "attainment_planning",
        name: "Attainment Planning"
    },
    {
        key: "climate_energy",
        name: "Climate and Energy"
    },
    {
        key: "env_justice",
        name: "Env. Justice"
    },
    {
        key: "mobile_sources",
        name: "Mobile Sources"
    },
    {
        key: "stationary_sources",
        name: "Stationary Sources"
    },
    {
        key: "training",
        name: "Training/Clean Air Academy"
    },
    {
        key: "interstate_transport",
        name: "Interstate Transport"
    },
    {
        key: "mercury",
        name: "Mercury"
    },
    {
        key: "naaqs_development",
        name: "NAAQS Development"
    },
    {
        key: "naaqs_implementation",
        name: "NAAQS Implementation"
    },
    {
        key: "neshaps",
        name: "NESHAPS"
    },
    {
        key: "visibility",
        name: "Regional Haze/Visibility"
    },
];

const ResourceLibraryPage = () => {
    const [documents, setDocuments] = useState([]);
    const [filters, setFilters] = useState({
        document_type: [],
        topic: [],
        input: ''
    })
    const [page, setPage] = useState({
        start: 0,
        end: 24,
    })

    useEffect(async () => {
        if (!documents.length) {
            let url = `${API_URL}/assets/documents?limit=999999999`;
            const response = await fetch(url);
            const results = await response.json();
            setDocuments(results.data);
        }
    }, [documents]);

    const filteredDocuments = documents?.filter(doc => {
        let filterable = true;

        if (doc.archive)
            return false;
        
        //clean up arrays
        const formattedDocTypes = doc?.document_type?.map(doc => doc["key"]) || [];
        const formattedTopics = doc?.topic?.map(topic => topic["key"]) || [];

        //filter test cases
        if (filters.document_type?.length)
            filterable = filters.document_type.every(filter => formattedDocTypes.includes(filter))
        if (filterable && filters.topic?.length)
            filterable = filters.topic.every(filter => formattedTopics.includes(filter))
        if (filterable && filters.input?.length) {
            filterable = doc?.key_words?.toLowerCase().includes(filters.input) || doc?.formatted_title?.toLowerCase().includes(filters.input)
        }
        return filterable;
    })
    
    const paginatedDocuments = filteredDocuments.slice(page.start, page.end)

    return (
        <Column center width="al-fu" pt={80} mb={60}>
            <Heading text="RESOURCE LIBRARY" bold />

            <Row justify="space-between" mt={40}>
                <Column width="70%">
                    <ContainerWithBorder>
                        <Heading text="Your Search Results" size={28} mb="0" />
                    </ContainerWithBorder>

                    {paginatedDocuments?.map((document, index) => {
                        return (
                            <StyledLinkContainer
                                key={document.id}
                                isOdd={index % 2 === 1}
                            >
                                <ExternalLink href={document.permalink}>
                                        {document.formatted_title || document.title}
                                </ExternalLink>
                            </StyledLinkContainer>
                        );
                    })}

                    {!filteredDocuments.length && (filters.document_type.length || filters.topic.length || filters.input.length) && <NoResultsMessage>No results found</NoResultsMessage>}
                    <Pagination>
                        <PageButton onClick={() => setPage({start: page.start - 24 < 0 ? 0 : page.start - 24 , end: page.end - 24 == 0 ? 24 : page.end - 24})}>back</PageButton>
                        <h3>{`Page ${(page.start / 24) + 1}`}</h3>
                        <PageButton onClick={() => {if (page.end + 24 <= filteredDocuments.length) setPage({start: page.start + 24 , end: page.end + 24})}}>next</PageButton>
                    </Pagination>
                </Column>
                <Column width="28%">
                    <ContainerWithBorder>
                        <Heading text="Filter By" size={28} mb="0" />
                    </ContainerWithBorder>
                    <ResetButton onClick={() => setFilters({
                        document_type: [],
                        topic: [],
                        input: ''
                    })}>Reset</ResetButton>
                    <StyledSearch type="text" value={filters.input} placeholder="Enter Search Term" onChange={(e) => setFilters({...filters, input: e.target.value})}></StyledSearch>
                    <CheckboxHeading>Document Type</CheckboxHeading>
                    <ul style={{marginLeft: '15px'}}>
                        {documentTypes.map(type => {
                            const checked = filters.document_type.includes(type.key)
                            return (
                                <li>
                                    <input name={type.key} type="checkbox" checked={filters.document_type.includes(type.key)} onChange={(e) => setFilters(
                                        {
                                            ...filters, 
                                            document_type: checked ? filters.document_type.filter(filterType => filterType !== type.key) : filters.document_type.concat(type.key)
                                        })
                                    }></input>
                                    <CheckboxLabel>{type.name}</CheckboxLabel>
                                </li>
                            )
                        })}
                    </ul>
                    <CheckboxHeading>Topic</CheckboxHeading>
                    <ul style={{marginLeft: '15px'}}>
                        {topics.map(topic => {
                            const checked = filters.topic.includes(topic.key)
                            return (
                                <li>
                                    <input name={topic.key} type="checkbox" checked={checked} onChange={(e) => setFilters(
                                        {
                                            ...filters, 
                                            topic: checked ? filters.topic.filter(filterTopic => filterTopic !== topic.key) : filters.topic.concat(topic.key)
                                        })
                                    }></input>
                                    <CheckboxLabel>{topic.name}</CheckboxLabel>
                                </li>
                            )
                        })}
                    </ul>
                </Column>
            </Row>
        </Column>
    );
};

export default ResourceLibraryPage;

const ContainerWithBorder = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: flex-start;
    height: 50px;
    align-items: center;
`;

const StyledLinkContainer = styled.div`
    width: 100%;
    padding: 10px 15px;
    background-color: ${(props) =>
        props.isOdd ? "rgba(0, 0, 0, .03)" : "inherit"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 50px;
`;

const StyledSearch = styled.input`
    width: 100%;
    border-radius: 5px;
    margin-top: 5px;
    height: 35px;
`;

const CheckboxHeading = styled.h3`
    margin-top: 20px;
    margin-bottom: 5px;
    padding: 5px 12px;
    width: 100%;
    background-color: #003354;
    color: white;
`;

const CheckboxLabel = styled.label`
    font-size: 12px;
    padding-left: 5px;
`;

const NoResultsMessage = styled.h2`
    color: #003354;
    font-weight: bold;
    margin-top: 30px;
`;

const ResetButton = styled.button`
    background-color: #669935;
    font-size: 14px;
    color: white;
    padding: 3px 5px;
    margin-top: 15px;
    border: none;
    margin-left: 1px;
`;

const Pagination = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 15px;
`;

const PageButton = styled.button`
    background-color: #669935;
    font-size: 14px;
    color: white;
    padding: 3px 5px;
    border: none;
    margin-left: 8px;
    margin-right: 8px;
`;