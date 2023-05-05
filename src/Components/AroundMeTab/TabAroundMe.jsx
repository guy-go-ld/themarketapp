import * as React from 'react';
import PropTypes from 'prop-types';
// import SwappableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ResizableMap from '../updatable-map/ResizableMap';
import BusinessNameCard from "../business-name-card/business-name-card.component";
// import BusinessCardTest from "../BusinessCardTest/BusinessCardTest";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Map" {...a11yProps(0)} />
                    <Tab label="List" {...a11yProps(1)} />
                    {/*<Tab label="Item Three" {...a11yProps(2)} />*/}
                </Tabs>
            </AppBar>
            {/*<SwappableViews*/}
            {/*    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}*/}
            {/*    index={value}*/}
            {/*    onChangeIndex={handleChangeIndex}*/}
            {/*>*/}
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <ResizableMap/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    {/*TODO: 1. create json file that connects to my friends/ community last activity shows the around me activity on map and as a cards list*/}
                    {/*<BusinessCardTest/>*/}
                    <BusinessNameCard business={{"id": 1, "name": "Ofra's lak-gel", "title": "lak gel"}}/>
                </TabPanel>
                {/*<TabPanel value={value} index={2} dir={theme.direction}>*/}
                {/*    Item Three*/}
                {/*</TabPanel>*/}
            {/*</SwappableViews>*/}
        </Box>
    );
}
