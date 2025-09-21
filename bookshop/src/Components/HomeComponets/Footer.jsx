import watch_icon from "../../Images/watch-time-heart-svgrepo-com.svg";
import styles from "../../Styles/HomePgS/Footer.module.css";

function Footer(params) {
  return (
    <footer className={styles.Footer_componets}>
      <div className={styles.Sub_container_Footer}>
        <div>
          <img src={watch_icon} alt="" />
          <p>
            Discover a curated collection of the world's most exquisite
            timepieces, where legacy and craftsmanship meet.
          </p>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h5>Legal</h5>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms of service</li>
          </ul>
        </div>

        <div>
          <button>
            <i className="fa-brands fa-square-facebook"></i>
          </button>
          <button>
        <i className="fa-brands fa-twitter"></i>
          </button>
          <button>
            <i className="fa-brands fa-instagram"></i>
          </button>
          <button>
            <i className="fa-brands fa-youtube"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
