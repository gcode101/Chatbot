import { AppBar, Toolbar } from "@mui/material";

const Header = () => {
    return (
        <AppBar sx={{
            bgcolor: "transparent",
            position: "static",
        }}>
            <Toolbar sx={{display: "flex"}}>  </Toolbar>
        </AppBar>
    );
}

export default Header;