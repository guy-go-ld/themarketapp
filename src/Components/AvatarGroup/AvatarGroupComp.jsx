import * as React from 'react';
// import data_on_person from "../../databases/BusinessAllData.json";
import List from "@mui/material/List";
import data from "../../databases/BusinessAllData.json";
import './AvatarGroupComp.styles.css';
import CommunityCard from '../CommunityCard/community-card.component';


export default function AlignItemsList() {
    return (

        <List sx={{ width: '90%', maxWidth: 550, bgcolor: 'background.paper' }}>
            {data.map(businesses =>
                    <CommunityCard business={businesses}></CommunityCard>)
            }
        </List>
    );
}