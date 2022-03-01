import ResourceLibraryForm from "../forms/ResourceLibraryForm";
import Column from "../utility/Column";
import Heading from "../utility/Heading";
import Row from "../utility/Row";
import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getResourceByTitle } from "../../../requests/formRequest";
import ResourceLibraryLinks from "../documents-links/ResourceLibraryLinks";
import ReactPaginate from "react-paginate";
import { PageParams } from "../../../constants/constants";

const ResourceLibraryPage = () => {
    const [title, setTitle] = useState("");
    const [documents, setDocuments] = useState([]);
    const [meta, setMeta] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { handleSubmit, register, setValue } = useForm();

    const onSubmit = async (data) => {
        const response = await getResourceByTitle({
            title: data.keyword,
            limit: PageParams.PER_PAGE,
            page: currentPage,
        });
        setFormSubmitted(true);
        setTitle(data.keyword);
        setDocuments(response.data);
        setMeta(response.meta);
    };

    const handlePageSelect = (event) => {
        const selectedPage = event.selected + 1;
        setCurrentPage(selectedPage);
    };

    useEffect(() => {
        const handlePageChange = async () => {
            const response = await getResourceByTitle({
                title,
                limit: PageParams.PER_PAGE,
                page: currentPage,
            });
            setDocuments(response.data);
            setMeta(response.meta);
        };

        if (formSubmitted) {
            handlePageChange();
        }
    }, [currentPage]);

    return (
        <>
            <Column center width="al-fu" pt={80} mb={60}>
                <Heading text="RESOURCE LIBRARY" bold />
                <h1 style={{ color: "orange", fontWeight: "bold" }}>
                    Under development
                </h1>

                <Row justify="space-between" mt={40}>
                    <ResourceLibraryLinks documents={documents} />

                    <ResourceLibraryForm
                        onSubmit={onSubmit}
                        handleSubmit={handleSubmit}
                        register={register}
                        setValue={setValue}
                    />
                </Row>

                {meta.total && (
                    <Row center justify="center" mt={30}>
                        <ReactPaginate
                            pageCount={Math.ceil(
                                meta.total / PageParams.PER_PAGE
                            )}
                            className="flex"
                            previousClassName="prev-btn"
                            nextClassName="next-btn"
                            pageLinkClassName="page-link"
                            pageClassName="page-link"
                            breakClassName="page-link"
                            breakLinkClassName="page-link"
                            pageRangeDisplayed={2}
                            activeLinkClassName="active-page-link"
                            onPageChange={handlePageSelect}
                        />
                    </Row>
                )}
            </Column>
        </>
    );
};

export default ResourceLibraryPage;
