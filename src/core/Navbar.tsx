// #region Import Externals
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
// #endregion
// #region Import Internals
import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import Add from "@mui/icons-material/Add";
import ListAlt from "@mui/icons-material/ListAlt";
// #endregion

export default function Navbar() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    }, [value]);
    return (
        <Box sx={{ pb: 7 }} ref={ref}>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/list" element={<h1>List</h1>} />
            </Routes>
            <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Add" icon={<Add />} component={Link} to="/" />
                    <BottomNavigationAction label="List" icon={<ListAlt />} component={Link} to="/list" />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
