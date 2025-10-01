// Dependencies
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { getUsers, login } from "../services/api";

// Stylesheets
import styles from "./Login.module.scss";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", pass: "" });
  const [registerData, setRegisterData] = useState({ username: "", email: "", pass: "", phone: "" });
  const [message, setMessage] = useState("");

	// Tudo o que estiver aqui dentro só será executado na construção do componente
	useEffect(() => {}, []);

	const handleLogin = async (e) => {
		// "e" significa o elemento que chamou a função
		e.preventDefault();

    // Verificando se as credenciais estão corretas
    const auth = await login(loginData)
    
    // Se estiverem corretas:
    if (auth.success) {
      // Pegando o usuário
      const user = auth?.user
      setMessage(`Bem-vindo, ${user.username}!`)
    } else {
      setMessage("Email ou senha incorretos")
    }
	};

	const handleSignup = (e) => {
		// "e" significa o elemento que chamou a função
		console.log("oi")
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
        {message ? <p>{message}</p> : ''}
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
