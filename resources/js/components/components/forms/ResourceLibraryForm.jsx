import Column from "../utility/Column";
import Row from "../utility/Row";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import Button from "../utility/Button";
import Heading from "../utility/Heading";
import { useState } from "react";
import Calendar from "react-calendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import FixedOverlayHandleClick from "../utility/FixedOverlayHandleClick";
import "react-calendar/dist/Calendar.css";
import { DateTime } from "luxon";
import ResourceLibraryDatePicker from "./ResourceLibraryDatePicker";

const ResourceLibraryForm = ({
    onSubmit,
    handleSubmit,
    register,
    setValue,
}) => {
    return (
        <>
            <Column width="45%">
                <ContainerWithBorder>
                    <Heading text="Filter By:" size={28} mb="0" />
                    <ButtonContainer>
                        <Button
                            text="APPLY"
                            noMarginTop
                            style={{ marginRight: 10, marginBottom: 10 }}
                            type="submit"
                            id="resource-form"
                            onClick={() => handleSubmit(onSubmit)()}
                            // https://github.com/react-hook-form/react-hook-form/issues/2321
                            // submit button outside of form
                        />
                        <Button
                            text="CLEAR"
                            noMarginTop
                            style={{ marginBottom: 10 }}
                            bgColor="#003354"
                        />
                    </ButtonContainer>
                </ContainerWithBorder>

                <Form id="resource-form" onSubmit={handleSubmit(onSubmit)}>
                    <CategoryBoxTitle style={{ marginTop: 40 }}>
                        {" "}
                        KEYWORD SEARCH{" "}
                    </CategoryBoxTitle>
                    <Input
                        id="keyword"
                        name="keyword"
                        {...register("keyword")}
                        placeholder="Enter Search Term..."
                    />

                    {/* <ResourceLibraryDatePicker
                        register={register}
                        setValue={setValue}
                    /> */}

                    {/* Need to turn into it's own component */}
                    <CategoryBoxTitle> DOCUMENT TYPE </CategoryBoxTitle>
                    <Column>
                        <Row align="center">
                            <input
                                className="hover-pointer"
                                type="checkbox"
                                id="comments"
                                {...register("comments")}
                            />
                            <Label className="hover-pointer" htmlFor="comments">
                                {" "}
                                Comments{" "}
                            </Label>
                        </Row>
                        <Row align="center">
                            <input
                                className="hover-pointer"
                                type="checkbox"
                                id="letters"
                                {...register("letters")}
                            />
                            <Label className="hover-pointer" htmlFor="letters">
                                {" "}
                                Letters{" "}
                            </Label>
                        </Row>
                        <Row align="center">
                            <input
                                className="hover-pointer"
                                type="checkbox"
                                id="reports"
                                {...register("reports")}
                            />
                            <Label className="hover-pointer" htmlFor="reports">
                                {" "}
                                Reports{" "}
                            </Label>
                        </Row>
                    </Column>

                    {/* <CategoryBoxTitle> TOPIC </CategoryBoxTitle> */}
                </Form>
            </Column>
        </>
    );
};

export default ResourceLibraryForm;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const CategoryBoxTitle = styled.div`
    width: 100%;
    background-color: #546fa8;
    padding: 5px 10px;
    color: white;
    font-weight: bold;
    margin: 15px 0;

    &:first-child {
        margin-top: 40px;
    }
`;

const Input = styled.input`
    width: 80%;
    border-radius: 20px;
    margin: 15px 0;
    min-height: 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    padding: 5px 5px 5px 30px;
    font-size: 16px;
    color: #222;
`;

const ButtonContainer = styled.div`
    display: flex;
    margin-left: auto;
`;

const ContainerWithBorder = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: flex-start;
    height: 50px;
    align-items: center;
`;

const Label = styled.label`
    margin-left: 20px;
    font-family: Roboto, sans-serif;
`;

const CheckboxInput = styled.input``;
