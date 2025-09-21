import styles from "../../Styles/ProfilePageStyles/ProfileMain.module.css";
import Footer from "../HomeComponets/Footer.jsx";
import Header from "../HomeComponets/Header.jsx";
import PersonalInfo from "../ProfileComp/PersonalInfo.jsx";
import History from "../ProfileComp/history.jsx";



function ProfilePage(params) {
  return (
    <article className={styles.MainContainer}>
      <Header />
      <h2>My Dashboard</h2>
      <p>
        Welcome back, Manage your profile and view your history.
      </p>
      <div className={styles.ContainerPersonal}>
        <PersonalInfo />
        <History />
      </div>

      <Footer />
    </article>
  );
}

export default ProfilePage;
