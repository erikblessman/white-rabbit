import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React from "react";
import Add from "@mui/icons-material/Add";
import ListAlt from "@mui/icons-material/ListAlt";

export default function Navbar() {
    const [value, setValue] = React.useState(0);
    return (
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Add" icon={<Add />} />
                <BottomNavigationAction label="List" icon={<ListAlt />} />
            </BottomNavigation>
        </Paper>
    );
}
