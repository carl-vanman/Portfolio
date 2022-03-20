import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

//CSS
import "./index.css";

//Components
import App from "./App";
import About from "./routes/About";
import Contact from "./routes/Contact"

/* 
Gjort: Basic react router setup

forts. läsa: https://reactrouter.com/docs/en/v6/getting-started/tutorial#search-params 
*/

ReactDOM.render(
    <React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route
						index
						element={
							<main>
								<p>dafault child route for parent</p>
							</main>
						}
					/>
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route
						path="*"
						element={
							<main>
								<p>There's nothing here! No matching rout found</p>
							</main>
						}
					/>
				</Route>
			</Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
