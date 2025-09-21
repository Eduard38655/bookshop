import styles from "../../Styles/HomePgS/ContactUs.module.css";
function Contact(params) {
  return (
    <div className={styles.ContactUs_Container}>
      <h2>Contactanos</h2>
<div className={styles.Content_info}>

  
      <div>
        <label htmlFor="">
          Nombre <span>*</span>
        </label>
        <input type="text" />
        <label htmlFor="">
          Email <span>*</span>
        </label>
        <input type="email" />
        <label htmlFor="">
          Mensaje <span>*</span>
        </label>
        <textarea name="" id=""></textarea>
        <button>Submit</button>{" "}
      </div>
</div>
    </div>
  );
}

export default Contact;
