// Dependencies
import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { createUser } from "../services/api";
import { useAuth } from "../hooks/useAuth.js";

// Stylesheets
import styles from "./Login.module.scss";

function Login() {
	const [loginData, setLoginData] = useState({ email: "", pass: "" });
	const [registerData, setRegisterData] = useState({
		username: "",
		email: "",
		pass: "",
		phone: "",
	});
	const [message, setMessage] = useState("");
	const [token] = useLocalStorage("token", null);
	const navigate = useNavigate();
	const { login, logout } = useAuth();

	// Verifica se o usuário já possui um token e redireciona para a tela de perfil
	useEffect(() => {
		if (token) {
			navigate("/profile");
		}
	}, []);

	// Função responsável por efetuar o login do usuário
	const handleLogin = async (e) => {
		// "e" significa o elemento que chamou a função
		e.preventDefault();

		// Realiza a tentativa de login
		const result = await login(loginData);

		// Verifica o resultado da operação
		if (result && result.token) {
			// Renderiza a mensagem e atualiza o token no local storage
			setMessage("✅ Login realizado com sucesso!");

			// Envia o usuário para tela de perfil
			navigate("/profile");
		} else {
			setMessage("❌ Email ou senha incorretos.");
		}
	};

	// Função responsável por criar um novo usuário
	const handleSignup = async (e) => {
		// "e" significa o elemento que chamou a função
		e.preventDefault();

		// Realiza a tentativa de criação de um novo usuário
		const result = await createUser(registerData);

		console.log(result);

		// Verifica o resultado da operação
		if (result && result.message) {
			setMessage(result.message);

			if (result && result.success) {
				// Envia o usuário para tela de perfil
				navigate("/profile");
			}
		} else {
			setMessage("❌ Algo deu errado, tente novamente mais tarde.");
		}
	};

	/*

    USUÁRIO FICTÍCIO DE TESTE DE LOGIN:
    username: Teste
    email: test@email.com
    pass: 123

  */

	return (
		<>
			<main id={styles.loginMain}>
				{/* Apenas para testes: */}
				{message ? <p>{message}</p> : ""}
				<Routes>
					{/* FORMULÁRIO DE LOGIN */}
					<Route
						path="/"
						element={
							<>
								<h2>Login</h2>
								<form onSubmit={handleLogin}>
									{/* Input do e-mail */}
									<input
										type="email"
										placeholder="Email"
										value={loginData.email}
										onChange={(e) =>
											setLoginData({
												...loginData,
												email: e.target.value,
											})
										}
										required
									/>
									{/* Input da senha */}
									<input
										type="password"
										placeholder="Senha"
										value={loginData.pass}
										onChange={(e) =>
											setLoginData({
												...loginData,
												pass: e.target.value,
											})
										}
										required
									/>
									<button type="submit">Entrar</button>
								</form>
								<Link to="/sign-up">Não possui conta?</Link>
							</>
						}
					/>
					{/* FORMULÁRIO DE CADASTRO */}
					<Route
						path="/sign-up"
						element={
							<>
								<h2>Cadastro</h2>
								<form onSubmit={handleSignup}>
									{/* Input do nome de usuário */}
									<input
										type="text"
										placeholder="Nome"
										value={registerData.username}
										onChange={(e) =>
											setRegisterData({
												...registerData,
												username: e.target.value,
											})
										}
										required
									/>
									{/* Input do e-mail */}
									<input
										type="email"
										placeholder="Email"
										value={registerData.email}
										onChange={(e) =>
											setRegisterData({
												...registerData,
												email: e.target.value,
											})
										}
										required
									/>
									{/* Input do senha */}
									<input
										type="password"
										placeholder="Senha"
										value={registerData.pass}
										onChange={(e) =>
											setRegisterData({
												...registerData,
												pass: e.target.value,
											})
										}
										required
									/>
									{/* Input do telefone */}
									<input
										type="tel"
										placeholder="Telefone"
										value={registerData.phone}
										onChange={(e) =>
											setRegisterData({
												...registerData,
												phone: e.target.value,
											})
										}
									/>
									<button type="submit">Cadastrar</button>
								</form>
								<Link to="/">Já possui uma conta?</Link>
							</>
						}
					/>
				</Routes>
			</main>
		</>
	);
}

export default Login;
