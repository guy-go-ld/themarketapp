import {Stack, Typography} from "@mui/material";
import {
    StyledAvatarUserFeed,
    StyledBusinessFeed, StyledButtonGray,
    StyledRating,
    StyledSmallCirclesButton,
    StyledTypographyReview
} from "./styledComponents";
import StyledGrayButtonFullReview from "./StyledGrayButtonFullReview";
import StyledGrayButtonVisitBusiness from "./StyledGrayButtonVisitBusiness";

export default function StyledFeedItem() {
    return (
        <box>
            <Stack direction="column" spacing={2} sx={{padding:"0.4rem", boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', borderBottom: '0.1rem solid #C3ED5B'}}>
                <item>
                    <Stack direction="row" spacing={1}>
                        <item>
                            <StyledAvatarUserFeed/>
                        </item>
                        <item>
                            <Stack direction="column" justifyContent="center" alignItems="flex-start">
                                <Typography variant="h4">Static Name</Typography>
                                <Typography variant="h5">24hr</Typography>
                            </Stack>
                        </item>
                        <item>
                            <StyledSmallCirclesButton/>
                        </item>
                    </Stack>
                </item>
                <item>
                    <Stack direction = "column" spacing={2}>
                        <Stack direction = "row" spacing={1} justifyContent="flex-start" alignItems="center">
                            <Typography variant="h3" textAlign="left">Static  Name</Typography>
                            <StyledRating/>
                        </Stack>
                        <Stack direction = "row" spacing={1} justifyContent="flex-start" alignItems="center">
                            <StyledBusinessFeed/>
                            <Stack direction = "column" justifyContent="flex-start" spacing={1}>
                                <item>
                                    <StyledTypographyReview>
                                        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, conse
                                    </StyledTypographyReview>
                                </item>
                                <item>
                                    <Stack direction = "row" spacing = {0.5}>
                                        <StyledGrayButtonFullReview/>
                                        <StyledGrayButtonVisitBusiness/>
                                    </Stack>
                                </item>
                            </Stack>
                        </Stack>

                    </Stack>
                </item>
            </Stack>

        </box>
    )
}