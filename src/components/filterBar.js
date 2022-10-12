import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link } from "react-router-dom";
import { useState } from "react";

export const FilterBar = (props) => {
    const [year, setYear] = useState("");
    const [theme, setTheme] = useState("");

    const years = [...new Set(props.courses.map(course => course.yearOfDictation))];
    const themes = [...new Set(props.courses.map(course => course.theme))];

    const yearsList = getMenuItems(years);
    const themesList = getMenuItems(themes);

    function getMenuItems(elements) {
        return elements.map(element => (
            <MenuItem key={element} value={element}>
                {element}
            </MenuItem>))
    }

    const handleChange = (property, event, setProperty) => {
        let value = event.target.value;
        props.onSearch({[property]: value});
        setProperty(value);
    }

    const cleanSearch = (event) => {
        props.onClean();
        setTheme("");
        setYear("");
    }

    return (
        <Grid
            container
            direction="row"
            columnSpacing={20}
            alignItems="center">
            <Grid
                item>
                <Button component={Link} to='/'>
                    <ArrowBackOutlinedIcon />
                    Volver
                </Button>
            </Grid>
            <Grid
                item>
                <FormControl sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-label">Filtrar tema</InputLabel>
                    <Select
                        label='Filtrar tema'
                        onChange={(e) => handleChange("theme", e, setTheme)}
                        value={theme}>
                        {themesList}
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-label">Filtrar año</InputLabel>
                    <Select
                        label='Filtrar año'
                        onChange={(e) => handleChange("yearOfDictation", e, setYear)}
                        value={year}>
                        {yearsList}
                    </Select>
                </FormControl>
            </Grid>
            <Grid
                item>
                <Button
                    border="0"
                    size="small"
                    onClick={cleanSearch}>
                    <CloseIcon />
                    Borrar búsqueda
                </Button>
            </Grid>
        </Grid>

    )
}
