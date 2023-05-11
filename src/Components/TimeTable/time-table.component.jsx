import {useState} from "react";
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import * as React from "react";


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
/**
 * In charge of showing and opening the TimeTable
 * @returns {JSX.Element}
 * @constructor
 */
export default function TimeTable({business}) {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const time_table = days.map((day)=>
        <ListItemButton sx={{pl: 4}}>
            <ListItemIcon>
                <StarBorder/>
            </ListItemIcon>
            <ListItemText>
                <Typography variant="body1">
                    {day} {business.opening_hours[day]}
                </Typography>
            </ListItemText>
        </ListItemButton>);
    return (
        <div>
            {(business.opening_hours === "none") ?
                (<div>Not mentioned.</div>)
                :
                (<List
                    sx={{width: '100%', maxWidth: 360, bgcolor: 'primary.light', padding: 0, marginTop: 1}}
                    component="nav"
                    aria-labelledby="nested-list-subheader">
                    <ListItemButton onClick={handleClick} sx={{padding: 0}}>
                        <AccessTimeIcon/>
                        <ListItemText sx={{pl: 1, pr: 1}}>
                            <Typography variant="h5">
                                Opening Hours
                            </Typography>
                        </ListItemText>
                        {open ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {(business.opening_hours === "open 24/7") ?
                                (<ListItemButton sx={{pl: 4}}>
                                    <ListItemIcon>
                                        <StarBorder/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant="body1">
                                            24/7 All Day and All Night!
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>)
                                :
                                (time_table)
                        }

                </List>
                </Collapse>
                </List>
                )}

        </div>
    );
}