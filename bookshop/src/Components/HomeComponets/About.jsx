import styles from "../../Styles/HomePgS/AboutUs.module.css";
function AboutUS(params) {
  return (
     
      <div className={styles.About_Subcontainer}>
        <div className={styles.About_text}>
          <h2>Sobre <span>Nosotros</span></h2>
          <br />
          <p>
            Fundada en una pasión por la precisión y una reverencia por la
            historia, ChronoVault es más que un mercado: es un santuario para
            los mejores relojes del mundo.
            <br /> <br />
            Nos dedicamos a curar una colección que representa la cúspide de la
            artesanía, desde icónicas piezas de herencia hasta maravillas
            modernas de la ingeniería. Nuestra misión es conectar a los
            conocedores con relojes que no son solo accesorios, sino legados.
          </p>
        </div>

        <div className={styles.DivCarts_Container_}>
          <div>
            <i className="fa-regular fa-clock"></i>

            <h4>Tradición</h4>
            <p>Más de 50 años de experiencia en relojería de lujo</p>
          </div>

          <div>
            <i className="fa-solid fa-medal"></i>
            <h4>Calidad</h4>
            <p>Certificaciones internacionales y garantía de por vida</p>
          </div>

          <div>
           <i className="fa-solid fa-people-group"></i>
            <h4>Artesanos</h4>
            <p>Equipo especializado en reparación y mantenimiento</p>
          </div>

          <div>
            <i className="fa-regular fa-star"></i>
            <h4>Exclusividad</h4>
            <p>Piezas únicas y ediciones limitadas</p>{" "}
          </div>
        </div>
      </div>
   
  );
}
export default AboutUS;
