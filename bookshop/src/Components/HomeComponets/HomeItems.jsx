import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemsData from "../../../Backend/ItemsData.js";
import styles from "../../Styles/HomePgS/HomeItems.module.css";

function HomeItems() {
  const [DataItems, SetDataItems] = useState([]);

  function GetRandomItems() {
    const randomIndexes = [];
    const max = ItemsData.length;

    // Generar 3 números aleatorios únicos con for
    for (let i = 0; i < 4; ) {
      const random = Math.floor(Math.random() * max);

      // Verificar si ya existe en el array
      let exists = false;
      for (let j = 0; j < randomIndexes.length; j++) {
        if (randomIndexes[j] === random) {
          exists = true;
          break;
        }
      }

      // Si no existe, agregarlo
      if (!exists) {
        randomIndexes.push(random);
        i++; // Solo aumentar si se agregó
      }
    }

    // Ahora usamos los índices para buscar los ítems
    const selectedItems = [];
    for (let i = 0; i < randomIndexes.length; i++) {
      const index = randomIndexes[i];
      selectedItems.push(ItemsData[index]);
    }

    // Guardamos los 3 ítems en el estado
    SetDataItems(selectedItems);
  }

  useEffect(() => {
    GetRandomItems();
  }, []);

  return (
    <div className={styles.HomeItems_Container}>
      <h2>Relojes Destacados</h2>

      <div className={styles.SubHome_Container}>
        {DataItems && DataItems.length > 0 ? (
          DataItems.map((item, index) => (

              <div className={styles.DIvHome_text} key={index}>
                <div className={styles.DivImg_HomeItems}>
                  <p>{item.categoria}</p>

                  <img
                    src={item.img || item.NotFound_Img}
                    alt={item.name || "Imagen"}
                  />
                </div>
                <div className={styles.DivText}>
                  <h5>{item.type}</h5>
                  <h3>{item.produto}</h3>
                  <p>{item.description || "Sin descripción"}</p>
                </div>

                <div className={styles.DivAdd_button}>
                  <h3>$ {item.precio}</h3>
                  <button>
                    <Link to={"/catalogo"} className={styles.Links}>
                      <i className="fa-solid fa-shop"></i>Ver mas detalles
                    </Link>
                  </button>
                </div>
              </div>
        
          ))
        ) : (
          <h2>No hay productos</h2>
        )}
      </div>
    </div>
  );
}

export default HomeItems;
