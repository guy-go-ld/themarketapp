import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BusinessSocialSelect() {
    const [social, setSocial] = React.useState('');

    const handleChange = (event) => {
        setSocial(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120, minHeight: 100 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">select social media</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={social}
                    label="social"
                    onChange={handleChange}
                >
                    <MenuItem value='Facebook'>Facebook</MenuItem>
                    <MenuItem value='Instagram'>Instagram</MenuItem>
                    <MenuItem value='TikTok'>TikTok</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}