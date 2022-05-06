import React, {useEffect, useState} from 'react'
import './Search.css'
import {Button} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";

// The creators of react-date-range recommend importing these two css files
import "react-date-range/dist/styles.css"; 
import "react-date-range/dist/theme/default.css"
import {DateRangePicker} from "react-date-range";



function Search() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
    <div className='search'>
        <DateRangePicker ranges={
        [selectionRange]} onChange={
            handleSelect} />

        <h2>
            Number of guests
            <PeopleIcon />
        </h2>
        <input min={0}
        defaultValue={2}
        type="number" />
        <Button>Search AirBnB</Button>
    </div>
  )
}

export default Search