import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function ProfileTabsBarComponent() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%',
                position:'absolute',
                left: 0,
                right: 0,
                display:'flex',
                marginBottom: '-50px'
                }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="Go-To's" label="Go-To's" />
                <Tab value="Trailback" label="Trailback" />
                <Tab value="Reviews" label="Reviews" />
                <Tab value="Circles" label="Circles" />
                <Tab value="Friends" label="Friends" />
            </Tabs>
        </Box>
    );
}