import * as React from 'react';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from "@mui/material/Box";

const businessTypes = ['cosmetics', 'nails', 'barber', 'hair', 'sport', 'art', 'lifestyle', 'music']

export default function BusinessTypesSelection({businesses_types}) {
    const [formats, setFormats] = React.useState(() => []);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <Box sx={{maxWidth: 600, bgcolor: "primary.main", borderColor: "secondary.main", border: 2, borderRadius: 2}}>
        <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="business types"
            style={{display: "flex", flexWrap: "wrap", margin: "1rem", justifyContent: "center"}}
        >
            {businesses_types.map((btype) => (
                <ToggleButton value={btype} aria-label={btype} style={{margin: "1rem", width: 100, background: "white", borderRadius: 6, boxShadow: "1px 2px 4px #000000"}}
                >
                    {btype}
                </ToggleButton>))}

            {/*<ToggleButton value="bold" aria-label="bold">*/}
            {/*    <FormatBoldIcon />*/}
            {/*</ToggleButton>*/}
            {/*<ToggleButton value="italic" aria-label="italic">*/}
            {/*    <FormatItalicIcon />*/}
            {/*</ToggleButton>*/}
            {/*<ToggleButton value="underlined" aria-label="underlined">*/}
            {/*    <FormatUnderlinedIcon />*/}
            {/*</ToggleButton>*/}
            {/*<ToggleButton value="color" aria-label="color" disabled>*/}
            {/*    <FormatColorFillIcon />*/}
            {/*    <ArrowDropDownIcon />*/}
            {/*</ToggleButton>*/}
        </ToggleButtonGroup>
        </Box>
    );
}