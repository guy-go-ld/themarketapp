import {Stack, Typography} from "@mui/material";
import {StyledAvatarUserFeed} from "./styledComponents";

export default function StyledFeedItem(){
    return(
        <box>
            <Stack direction="row">
                <item>
                    <StyledAvatarUserFeed/>
                </item>
                <item>
                    <Typography>Static Name</Typography>
                </item>

            </Stack>
        </box>
    )
}