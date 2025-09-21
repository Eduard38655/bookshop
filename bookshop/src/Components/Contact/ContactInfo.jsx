import styles from "../../Styles/ContactUstyles/ContentInfo.module.css";
function ContactInfo(params) {
  return (
    <div className={styles.DivContactInfo}>
      <h2>Contact Us</h2>
      <div className={styles.DivInputInfo}>
        <label htmlFor="">Your Name</label>
        <input type="text" />
      </div>

      <div className={styles.DivInputInfo}>
        <label htmlFor="">Your Email</label>
        <input type="email" />
      </div>

      <div className={styles.DivInputInfo}>
        <label htmlFor="">Your Message</label>
        <textarea name="" id=""></textarea>
      </div>
      <button>Send message</button>
    </div>
  );
}

export default ContactInfo;
