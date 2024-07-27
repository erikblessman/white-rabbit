import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

interface DarkThemeProviderProps {
    children: React.ReactNode;
}

export default function DarkThemeProvider({ children }: DarkThemeProviderProps) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
