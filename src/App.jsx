// App.jsx
import { Route, Routes } from "react-router-dom"; // Import Routes
import "./App.css";
import MainMenu from "./components/MainMenu";
import WarningMenu from "./components/WarningMenu";
import AboutMe from "./components/AboutMe";
import TechnologiesView from "./components/TechnologiesView";
import WorkExperienceView from "./components/WorkExperienceView";

function App() {
    return (
        <Routes>
            <Route path="/main-menu" element={<MainMenu />} />
            <Route path="/" element={<WarningMenu />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/technologies-view" element={<TechnologiesView />} />
            <Route path="/work-experience" element={<WorkExperienceView />} />
        </Routes>
    );
}

export default App;
