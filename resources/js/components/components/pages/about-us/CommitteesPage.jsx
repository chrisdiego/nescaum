import PageHeading from "../../content/PageHeading";
import React from "react";
import pages from "../../../mock-data/pages.json";
import Accordion from "react-bootstrap/Accordion";
import Row from "../../utility/Row";

const CommitteesPage = () => {
    return (
        <div style={{ margin: "30px 0" }}>
            <Row width="al-fu" center direction="column">
                <PageHeading
                    title={pages["aboutUs"].committees.title}
                    desc={pages["aboutUs"].committees.desc}
                />
                <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
                    {pages["aboutUs"].committees.committees.sort((a,b) => {
                        return a.title.localeCompare(b.title)
                    }).map(
                        (committee, i) => {
                            return (
                                <Accordion.Item key={i} eventKey={i}>
                                    <Accordion.Header>
                                        {committee.title}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        {committee.desc}
                                        {committee.list?.map((sub) => (
                                            <li>
                                                <b>{sub.title}:</b>
                                                <br />
                                                {sub.desc}
                                            </li>
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            );
                        }
                    )}
                </Accordion>
            </Row>
        </div>
    );
};

export default CommitteesPage;