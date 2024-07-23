import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DarkThemeProvider from "./theme/DarkThemeProvider";

function App() {
    return (
        <DarkThemeProvider>
            <Stack spacing={2} direction="column" m={2}>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Link
                </Button>
            </Stack>
        </DarkThemeProvider>
    );
}

export default App;
