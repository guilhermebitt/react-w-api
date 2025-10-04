import { useState } from "react";
import styles from "./UpdateProfile.module.scss";

function UpdateProfile({ user, onUpdate }) {
	const [formData, setFormData] = useState({
		username: user.username || "",
		email: user.email || "",
    phone: user.phone || "",
		profile_pic: user.profile_pic || "",
	});

	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
      console.log(formData)
			await onUpdate(formData);
			setMessage("✅ Perfil atualizado com sucesso!");
		} catch {
			setMessage("❌ Falha ao atualizar perfil.");
		}
	};

	return (
		<main className={styles.updateMain}>
			{message && <p className={styles.feedback}>{message}</p>}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Nome"
					value={formData.username}
					onChange={(e) =>
						setFormData({ ...formData, username: e.target.value })
					}
					required
				/>
				<input
					type="email"
					placeholder="Email"
					value={formData.email}
					onChange={(e) =>
						setFormData({ ...formData, email: e.target.value })
					}
					required
				/>{/* 
				<input
					type="password"
					placeholder="Senha"
					value={formData.pass}
					onChange={(e) =>
						setFormData({ ...formData, pass: e.target.value })
					}
				/> */}
				{/* <input
					type="text"
					placeholder="URL da foto de perfil"
					value={formData.profile_picture}
					onChange={(e) =>
						setFormData({
							...formData,
							profile_picture: e.target.value,
						})
					}
				/> */}
				<button type="submit">Atualizar Perfil</button>
			</form>
		</main>
	);
}

export default UpdateProfile;
