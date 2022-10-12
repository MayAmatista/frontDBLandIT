import { Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link } from "react-router-dom";


export const FilterBar = (props) => {
    const years = [...new Set(props.courses.map(course => course.yearOfDictation))];
    const themes = [...new Set(props.courses.map(course => course.theme))];

    const yearsList = getMenuItems(years);
    const themesList = getMenuItems(themes);

    function getMenuItems(elements) {
        return elements.map(element => (
            <MenuItem value={element}>
                {element}
            </MenuItem>))
    }

    const handleChange = (property, event) => {
        let search = {};
        search[property] = event.target.value;
        props.onSearch(search);
    }

    const cleanSearch = (event) => {
        props.onClean();
        let selects = document.getElementsByClassName("selector");
        for (let select of selects) {
            //select.getElementsByTagName('div')[0].innerText = null;
            window.selector = select;
        }
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
                        onChange={(e) => handleChange("theme", e)}>
                        {themesList}
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 300 }}>
                    <InputLabel id="demo-simple-select-label">Filtrar año</InputLabel>
                    <Select
                        label='Filtrar año'
                        onChange={(e) => handleChange("yearOfDictation", e)}>
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
