import styles from "../../Styles/ContactUstyles/Content.module.css";
import ContactInfo from "./ContactInfo.jsx";
function Content(params) {
  return (
    <div className={styles.DivContainer}>
    
      <div className={styles.DivInfoContact}>
        <div>
          <i className="fa-solid fa-location-dot"></i>

          <p>
            <span>Address</span> <br />
            123 Heritage Lane, Geneva, Switzerland
          </p>
        </div>
        <div>
          <i className="fa-solid fa-phone"></i>
          <p>
            <span>Phone</span>
            <br /> +41 22 123 45 67
          </p>

         
        </div>

        <div>
          <i className="fa-solid fa-envelope"></i>
          <p>
            <span>Email</span>
            <br /> concierge@chronovault.com{" "}
          </p>
        </div>
      </div>
      <ContactInfo />
    </div>
  );
}

export default Content;
