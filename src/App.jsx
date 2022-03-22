import { Outlet } from "react-router-dom";

//CSS
import "./App.css";
import TopNavigation from "./components/navigation/TopNavigation";

//Components
//import Smiley from "./components/smiley/Smiley"

function App() {
    return (
        <div className="App" style={{ padding: "24px" }}>
            <TopNavigation />
            <Outlet />
        </div>
    );
}

export default App;
