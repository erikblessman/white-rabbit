// #region Import Externals
import { BrowserRouter } from "react-router-dom";
// #endregion
// #region Import Internals
import "./App.css";
import DarkThemeProvider from "./core/DarkThemeProvider";
import Navbar from "./core/Navbar";
import Root from "./routes/Root";
// #endregion

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <DarkThemeProvider>
                <h1>App 1/2</h1>
                <Navbar />
            </DarkThemeProvider>
        </BrowserRouter>
    );
};

export default App;
