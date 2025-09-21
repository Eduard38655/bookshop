import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import watch_icon from "../../Images/watch-time-heart-svgrepo-com.svg";
import styles from "../../Styles/HomePgS/Header.module.css";

function Header() {
  const [isValidUser, setIsValidUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const raw = localStorage.getItem("UserData");
    if (!raw) {
      setIsValidUser(false);
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      const hasData =
        parsed !== null &&
        (Array.isArray(parsed) ? parsed.length > 0 : Object.keys(parsed).length > 0);
      setIsValidUser(Boolean(hasData));
    } catch (err) {
      console.error("Error parsing UserData from localStorage:", err);
      setIsValidUser(false);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("UserData");
    setIsValidUser(false);
    navigate("/"); // lo manda a home
  }

  return (
    <nav className={styles.Nav_Container} aria-label="Main navigation">
      <div className={styles.Nav_Subcontent}>
        <img src={watch_icon} alt="ChronoVault logo" />
        <h1>ChronoVault</h1>

        <div className={styles.Nav_Link_DIv}>
          <ul>
            <li>
              <NavLink className="NavLink" to={"/"} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to={"/catalogo"}>
                Catálogo
              </NavLink>
            </li>
            <li>
              <NavLink className="NavLink" to={"/contacto"}>
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.Nav_Buttons_}>
        {isValidUser ? (
          <>
            <NavLink to="/Shopping-Cart" aria-label="Ir al carrito">
              <button type="button">
                <i className="fa-solid fa-cart-shopping" />
              </button>
            </NavLink>

            <NavLink to="/Profile" aria-label="Ir al perfil">
              <button type="button">
                <i className="fa-solid fa-user" />
              </button>
            </NavLink>

            <button
              type="button"
              onClick={handleLogout}
              className={styles.Logout}
              aria-label="Cerrar sesión"
            >
              <i className="fa-solid fa-right-from-bracket" />  
            </button>
          </>
        ) : (
          <NavLink className={styles.Button_NavLinkLogin} to="/Login">
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;
