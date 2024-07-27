// #region Import Externals
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// #endregion
// #region Import Internals
import "./App.css";
import DarkThemeProvider from "./core/DarkThemeProvider";
import Navbar from "./core/Navbar";
import Root from "./routes/root";
// #endregion
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
]);

const App = (): JSX.Element => {
    return (
        <DarkThemeProvider>
            <RouterProvider router={router} />
            <Navbar />
        </DarkThemeProvider>
    );
};

export default App;
