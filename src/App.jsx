import {
	NavLink,
	Outlet,
	/* Link */
} from "react-router-dom";

//CSS
import "./App.css";

//Components
//import Smiley from "./components/smiley/Smiley"

function App() {
	return (
		<div className="App" style={{padding: "24px"}}>
			<nav style={{display: "flex", alignItems:"baseline", gap: "48px"}}>
				<NavLink
					to="/About"
					className={ ({ isActive }) => isActive ? "red" : "blue" }
				>
					<h3>Projects</h3>
				</NavLink>
				<NavLink
					to="/About"
					className={ ({ isActive }) => isActive ? "red" : "blue" }
				>
					About
				</NavLink>
				<NavLink to="/Contact">Contact</NavLink>
			</nav>
			<Outlet />
		</div>
	)
}

export default App;
