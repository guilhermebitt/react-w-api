// Stylesheets
import styles from "./Profile.module.scss";

// Componente da página de perfil
function Profile({user}) {
  return (
    <main id={styles.profileMain}>
      <p>Olá, {user.username}!</p>
    </main>
  );
}

// Exportando o componente
export default Profile;
