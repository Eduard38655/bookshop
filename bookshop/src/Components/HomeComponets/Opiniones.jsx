import { useState } from "react";
import OpinionesData from "../../../Backend/Opiniones.js";
import styles from "../../Styles/HomePgS/Opiniones.module.css";
function Opiniones(params) {
  const [Opiniones] = useState(OpinionesData);

  return (
    <div className={styles.Opiniones_Container}>
      <h3>Nuestros Clientes</h3>

      <div className={styles.SubConatiner_Opinion}>
        {Opiniones.map((opinion, index) => (
          <div key={index} className={styles.opinion_Carts}>
            <span> "" {opinion.opinion} ""</span>
            <div>
              <img src={opinion.img} alt="" />

              <p>
                {opinion.nombre_completo} <br />{" "}
                <span>
                  {opinion.ocupacion} - {opinion.year}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Opiniones;
