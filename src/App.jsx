import { Routes, Route } from "react-router-dom";

import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Experiance from "./routes/Experiance";
import NoMatch from "./routes/NoMatch";
import TestProjectOne from "./routes/TestProjectOne";
import TestProjectTwo from "./routes/TestProjectTwo";
import TestProjectThree from "./routes/TestProjectThree";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="projectOne" element={<TestProjectOne />} />
                <Route path="projectTwo" element={<TestProjectTwo />} />
                <Route path="projectThree" element={<TestProjectThree />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Experiance />} />
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}

export default App;
