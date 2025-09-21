import { useEffect, useState } from "react";
import ItemsData from "../../../Backend/ItemsData.js";
import styles from "../../Styles/HomePgS/Brans.module.css";
function Brans(params) {
  const [DataMarcas, SetMarcas] = useState(ItemsData);

  useEffect(() => {
    SetMarcas(ItemsData);
  }, [ItemsData]);

  return (
    <>
      <div className={styles.Brand_Container}>
        <a href="#Marcas"></a>
        <h3>Nuestras Marcas Premium</h3>
 

          <div className={styles.Brands}>
 
             {DataMarcas.map((marcas, index) => (
              <div key={index}  className={styles.MainInfo_Marcas}>
                <img src={marcas.marcasImg || "No hay imagen"} alt="" />
                <p>{marcas.marca}</p>
              </div>
            ))}
 

         
        </div>
      </div>
    </>
  );
}

export default Brans;
