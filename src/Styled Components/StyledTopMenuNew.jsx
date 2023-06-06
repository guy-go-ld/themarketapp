import {Stack} from "@mui/material";
import {StyledAppBarTop, StyledHamburgerButton, StyledSearchBar} from "./styledComponents";
import logoNew from "../Icons/logo-all-white.png";

function StyledTopMenuNew(){
    return(
        <StyledAppBarTop>
            <Stack direction = "row" alignItems="center" spacing={1}   justifyContent="space-evenly">
                <item>
                    <StyledHamburgerButton/>
                </item>
                <item>
                    <StyledSearchBar
                        disabled
                        autoFocus={true}
                        className="search-box search-bar-business"
                        type='search'
                        // onChangeHandler={onSearchChange}
                        placeholder='search business..'
                        // onChange={onSearchChange}
                    />
                </item>
                <item>
                    <img src={logoNew} alt={logoNew} className="logo-icon"/>
                </item>
            </Stack>
        </StyledAppBarTop>
    );
}

export default StyledTopMenuNew;