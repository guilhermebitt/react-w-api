// Dependencies
import { useState, useEffect, cloneElement } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Navigate } from "react-router-dom";
import { auth, getUserById } from "../services/api";

function PrivateRoute({ children }) {
	const [token, setToken] = useLocalStorage("token", null);
	const [isAuth, setIsAuth] = useState(null);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		// Realiza a verificação com o banco de dados
		const authenticate = async () => {
			// Verifica com o backend
			const result = await auth(token);

			// Se estiver incorreto, retorna para a tela de login
			if (!result) {
				setToken(null);
				setIsAuth(false);
			} else if (result.userId) {
				// Só como proteção extra, adicionei esse result.userId.
				// Se a response tiver um userId, ele pega o usuário no
				// banco de dados.
				const user = await getUserById(result.userId);

				if (user.id) {  // Se o resultado da operação tiver um ID, é porque retornou o usuário
					setUserData(user);
					setIsAuth(true);
				}
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
	return isAuth ? (
		cloneElement(children, { user: userData })
	) : (
		<Navigate to="/" />
	);
}

export default PrivateRoute;
