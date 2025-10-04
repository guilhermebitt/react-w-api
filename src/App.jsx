// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components/Pages
import Login from "./pages/Login.jsx";
import Profile from "./pages/restricted/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

// Stylesheets
import "./css/index.scss";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/*" element={<Login />} />

				{/* Rotas protegidas (só acessa se tiver token válido) */}
				<Route
					path="/profile"
					element={
						<PrivateRoute>
							<Profile />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
