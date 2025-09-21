import styles from "../../Styles/ContactUstyles/ContactPage.module.css";
import ContentContact from "../Contact/Content.jsx";
import Footer from "../HomeComponets/Footer.jsx";
import Header from "../HomeComponets/Header.jsx";
function ContactPage(params) {
  return (
    <article className={styles.ArticlePages}>
      <Header />
      <ContentContact />
      <Footer />
      
    </article>
  );
}

export default ContactPage;
