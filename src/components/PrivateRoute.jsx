// Dependencies
import { useState, useEffect, cloneElement } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Navigate } from "react-router-dom";
import { auth } from "../services/api";

function PrivateRoute({ children }) {
	const [token] = useLocalStorage("token", null);
	const [isAuth, setIsAuth] = useState(null);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		// Realiza a verificação com o banco de dados
		const authenticate = async () => {
			// Verifica com o backend
			const result = await auth(token);

			// Se estiver incorreto, retorna para a tela de login
			if (!result) {
				setIsAuth(false);
			} else if (result.user) {
				// só como proteção extra, adicionei esse result.user
				setUserData(result.user);
				setIsAuth(true);
			}
		};

		// Se não tiver token → manda para login
		if (!token) {
			setIsAuth(false);
		} else {
			authenticate();
		}
	}, []);

	// Se não tiver → renderiza uma tela de carregamento
	if (isAuth === null) return <p>Verificando autenticação...</p>;
	// Se tiver → renderiza a tela protegida
	return isAuth ? cloneElement(children, { user: userData }) : <Navigate to="/" />;
}

export default PrivateRoute;
