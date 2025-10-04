// Dependencies
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

// Stylesheets
import styles from "./Profile.module.scss";

function Profile({ user }) {
	const { logout, deleteUser } = useAuth();
	const navigate = useNavigate();

	return (
		<main id={styles.profileMain}>
			<section className={styles.card}>
				{/* Imagem de perfil */}
				<div className={styles.avatar}>
					<img
						src={
							user.profile_pic ||
							"https://via.placeholder.com/100"
						}
						alt="Foto de perfil"
					/>
				</div>

				{/* Nome e dados */}
				<h2>{user.username}</h2>
				<p>{user.email}</p>

				{/* Ações do usuário */}
				<div className={styles.actions}>
					<button onClick={() => navigate("/update-profile")}>
						Atualizar
					</button>
					<button onClick={deleteUser} className={styles.danger}>
						Deletar
					</button>
					<button onClick={logout} className={styles.secondary}>
						Sair
					</button>
				</div>
			</section>
		</main>
	);
}

export default Profile;
