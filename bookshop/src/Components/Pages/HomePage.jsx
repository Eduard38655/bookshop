import styles from "../../Styles/HomePgS/HomePgage.module.css";
import AboutUS from "../HomeComponets/About.jsx";
import Footer from "../HomeComponets/Footer.jsx";
import Header from "../HomeComponets/Header.jsx";
import HomeItems from "../HomeComponets/HomeItems.jsx";
import MainImg from "../HomeComponets/MainImg.jsx";
import Opiniones from "../HomeComponets/Opiniones.jsx";

function HomePage(params) {
  return (
    <article className={styles.HomePage_Container}>
      <Header />
      <MainImg />
      <HomeItems />
      <AboutUS />
      <Opiniones />
      <Footer />
    </article>
  );
}
/*
        
          */
export default HomePage;
