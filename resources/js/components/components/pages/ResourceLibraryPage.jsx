import ResourceLibraryForm from "../forms/ResourceLibraryForm";
import Column from "../utility/Column";
import Heading from "../utility/Heading";
import Row from "../utility/Row";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getResourceByTitle } from "../../../requests/formRequest";
import ResourceLibraryLinks from "../documents-links/ResourceLibraryLinks";

const ResourceLibraryPage = () => {
    const [documents, setDocuments] = useState([]);
    const { handleSubmit, register, setValue } = useForm();

    const onSubmit = async (data) => {
        const rd = await getResourceByTitle(data.keyword);
        setDocuments(rd.data);
    };

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
            </Column>
        </>
    );
};

export default ResourceLibraryPage;
