import { DockOutlined } from "@mui/icons-material";
import { Button, MenuItem, Select } from "@mui/material";


export const FilterBar = (props) => {
    const years = props.courses.map(course => course.yearOfDictation);
    const themes = props.courses.map(course => course.theme);

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
    }

    return (
        <div>
            <Select className = "selector" labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => handleChange("theme", e)}>
                {themesList}
            </Select>
            <Select className = "selector" labelId="demo-simple-select-label"
                id="demo-simple-select"
                onChange={(e) => handleChange("yearOfDictation", e)}>
                {yearsList}
            </Select>
            <Button onClick = {cleanSearch}>
                X
            </Button>
        </div>

    )
}
