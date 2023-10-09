import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

function Comp1() {
    const [text, setText] = useState("Title");
    const [inputText, setInputText] = useState("");
    const [values, setValues] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setValues(event.target.value as string);
    };
    function changeTxt() {
        setText(inputText);
    }

    return (
        <div>
            <h1>{text}</h1>
            <Button onClick={changeTxt} variant="contained">
                click to change Text
            </Button>
            <TextField
                label=' Enter new Title'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                sx={{ backgroundColor: 'red' }}
            />
            <br />
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Options</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Option 1"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="Option 1" control={<Radio sx={{ width: 45, height: 45 }} />} label="Option 1" />
                    <FormControlLabel value="Option 2" control={<Radio sx={{ width: 45, height: 45 }} />} label="Option 2" />
                    <FormControlLabel value="Option 3" control={<Radio sx={{ width: 45, height: 45 }} />} label="Other" />
                </RadioGroup>
            </FormControl>
            <br />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Value</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={values}
                    label="value"
                    onChange={handleChange}
                    sx={{ backgroundColor: 'red' }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <br />
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox defaultChecked sx={{ '&.Mui-checked': { background: 'orange' } }} />}
                    label="1"
                />
                <FormControlLabel
                    required
                    control={<Checkbox sx={{ '&.Mui-checked': { background: 'yellow' } }} />}
                    label="Required"
                />
                <FormControlLabel
                    disabled
                    control={<Checkbox sx={{ '&.Mui-checked': { background: 'pink' } }} />}
                    label="Disabled"
                />
            </FormGroup>
        </div>
    )
}

export default Comp1;
