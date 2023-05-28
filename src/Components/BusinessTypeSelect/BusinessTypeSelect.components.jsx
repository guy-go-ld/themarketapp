import * as React from 'react';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function BusinessTypesSelection(businesses_types) {
    const [formats, setFormats] = React.useState(() => []);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };

    return (
        <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="business types"
        >
            {businesses_types.map(btype =>
                <ToggleButton value={btype} aria-label={btype}>
                    {btype}
            </ToggleButton>)}
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
    );
}