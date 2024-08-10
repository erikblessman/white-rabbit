// #region Import Externals
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@mui/material";
import Add from "@mui/icons-material/Add";
import ListAlt from "@mui/icons-material/ListAlt";
import Home from "@mui/icons-material/Home";
// #endregion
// #region Import Internals
import Root from "../routes/Root";
import List from "../routes/List";
import Form from "../routes/Form";
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
                <Route path="/" element={<Root />} />
                <Route path="/list" element={<List />} />
                <Route path="/form/:id?" element={<Form />} />
            </Routes>
            <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<Home />} component={Link} to="/" />
                    <BottomNavigationAction label="Add" icon={<Add />} component={Link} to="/form" />
                    <BottomNavigationAction label="List" icon={<ListAlt />} component={Link} to="/list" />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
