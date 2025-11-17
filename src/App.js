import "./App.css";
import Home from "./Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Header/NavBar";
import Header from "./Header/header";
import Footer from "./Contact/footer";
import PropertyDetails from "./propertyDetails";
import Contact from "./Contact";
import Propertie from "./Propertie";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandr"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <NavBar />

        {/* Content will grow to push footer down */}
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Propertie/>} />
            <Route
              path="/property-details"
              element={<PropertyDetails/>}
            />
            <Route path="/contact-us" element={<Contact/>} />
          </Routes>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
