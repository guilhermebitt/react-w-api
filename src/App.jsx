// Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components/Pages
import Login from "./pages/Login.jsx";
import Profile from "./pages/restricted/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import UpdateProfile from "./pages/restricted/UpdateProfile.jsx";

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
				<Route
					path="/update-profile"
					element={
						<PrivateRoute>
							<UpdateProfile />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
