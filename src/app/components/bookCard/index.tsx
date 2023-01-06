import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Marginer } from "../marginer";
import { Button } from "../button";

import Calendar from "react-calendar";
import  "react-calendar/dist/Calendar.css";
import { SCREENS } from "../responsive";

const CardContainer = styled.div`
box-shadow: 0 1.3px 12px -3px rgba(0,0,0,0.4);
min-height:4.3em;
${tw`
    flex 
    justify-center
    items-center 
    rounded-md 
    bg-white 
    pt-2
    pb-2
    pr-5
    pl-5
    md:pt-2 
    md:pb-2 
    md:pl-9
    md:pr-9

`};

`;

const ItemContainer = styled.div`
    ${tw`
        flex 
        relative
    `};
`;

const Icon = styled.span`
    ${tw`
        text-red-500
        fill-current 
        text-xs 
        md:text-base 
        mr-1 
        md:mr-3 


    `};
`;

const SmallIcon = styled.span`
    ${tw`
        text-gray-500
        fill-current 
        text-xs 
        md:text-base 
        ml-1 

    `}
`

const Name = styled.span`
    ${tw`
        text-gray-600 
        text-xs 
        md:text-sm 
        cursor-pointer 
        select-none

    `};
`;

const LineSeperator = styled.span`
    width:2px;
    height:45%;
    ${tw`
        bg-gray-300
        mr-2 
        ml-2 
        md:mr-5 
        md:ml-5 
    `};
`;


const DateCalendar = styled(Calendar)`
    position:absolute;
    max-width:none;
    top: 2em;
    left:0em;

    ${({offset}: any)=> offset && css`
        left:-5.5em;
    `}

    @media(min-width: ${SCREENS.md}){
        top: 3.5em;
        left:-2em;
    }
` as any;

export function BookCard(){

    const [startDate, setStartDate] = useState();
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
    
    const [returnDate, setReturnDate] = useState();
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);
    
    
    const toggleStartDateCalendar = () =>{
        setStartCalendarOpen(!isStartCalendarOpen);
        if(isReturnCalendarOpen) setReturnCalendarOpen(false);
    }

    const toggleReturnDateCalendar = () =>{
        setReturnCalendarOpen(!isReturnCalendarOpen);
        if(isStartCalendarOpen) setStartCalendarOpen(false);
    }

    return <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name onClick={toggleStartDateCalendar}>Pick Up date</Name>
            {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate as any} /> }
            <SmallIcon>
                <FontAwesomeIcon icon={isStartCalendarOpen  ? faCaretUp : faCaretDown } />
            </SmallIcon>
        </ItemContainer>
        <LineSeperator />
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt} />
            </Icon>
            <Name onClick={toggleReturnDateCalendar}>Return Date</Name>
            {isReturnCalendarOpen && <DateCalendar offset  value={returnDate} onChange={setReturnDate as any} /> }
            <SmallIcon>
                <FontAwesomeIcon icon={isReturnCalendarOpen  ? faCaretUp : faCaretDown } />
            </SmallIcon>
        </ItemContainer>
        <Marginer direction="horizontal" margin="2em" />
        <Button text="Book Your Ride" />
    </CardContainer>
}