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

const ResourceLibraryDatePicker = ({ register, setValue }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showCalendar, setShowCalendar] = useState(false);
    const [showEndCalendar, setShowEndCalendar] = useState(false);

    const closeHandler = () => {
        setShowCalendar(false);
        setShowEndCalendar(false);
    };

    return (
        <>
            <CategoryBoxTitle> DATE RANGE </CategoryBoxTitle>
            <Row align="center" style={{ position: "relative" }}>
                <Input
                    placeholder="From:"
                    name="startDate"
                    {...register("startDate")}
                />
                <div onClick={() => setShowCalendar(true)}>
                    <FontAwesomeIcon
                        icon={faCalendar}
                        size="2x"
                        color="grey"
                        style={{ marginLeft: 20 }}
                        className="hover-pointer"
                    />
                </div>
                {showCalendar && (
                    <CalendarContainer>
                        <Calendar
                            onChange={(event) => {
                                setStartDate(event);
                                const d = DateTime.fromJSDate(event);
                                setValue(
                                    "startDate",
                                    d.toLocaleString(DateTime.DATE_MED)
                                );
                            }}
                            value={startDate}
                        />
                        <Button
                            text="APPLY"
                            style={{ marginTop: 0, minWidth: "100%" }}
                            onClick={() => {
                                setShowCalendar(false);
                            }}
                        />
                    </CalendarContainer>
                )}
            </Row>

            <Row align="center" style={{ position: "relative" }}>
                <Input
                    placeholder="To:"
                    name="endDate"
                    {...register("endDate")}
                />
                <div
                    onClick={() => setShowEndCalendar(true)}
                    style={{ display: "relative" }}
                >
                    <FontAwesomeIcon
                        icon={faCalendar}
                        size="2x"
                        color="grey"
                        style={{ marginLeft: 20 }}
                        className="hover-pointer"
                    />
                </div>

                {showEndCalendar && (
                    <CalendarContainer>
                        <Calendar
                            onChange={(event) => {
                                console.log("end date");
                                setEndDate(event);
                                const d = DateTime.fromJSDate(event);
                                setValue(
                                    "endDate",
                                    d.toLocaleString(DateTime.DATE_MED)
                                );
                            }}
                            value={endDate}
                        />
                        <Button
                            text="APPLY"
                            style={{ marginTop: 0, minWidth: "100%" }}
                            onClick={() => {
                                setShowEndCalendar(false);
                            }}
                        />
                    </CalendarContainer>
                )}
            </Row>

            {(showCalendar || showEndCalendar) && (
                <FixedOverlayHandleClick closeHandler={closeHandler} />
            )}
        </>
    );
};

export default ResourceLibraryDatePicker;

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

const CalendarContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    z-index: 10;
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
