import { useState } from "react";
import styles from "../../Styles/InventoryPgS/Search.module.css";

function DateItemsSearch({ DataBase, SetDataBase }) {
  const [Data] = useState(DataBase);

  /*Filtar por fecha */
  async function FindItems(e) {
    SetDataBase(Data);

    if (e.target.value === "Newest") {
      let valor = await Data.filter((a, b) => a.Fecha.anio >= 2025);
      SetDataBase(valor);
    } else {
      let valor = await Data.filter((a, b) => a.Fecha.anio < 2025);
      SetDataBase(valor);
    }
  }

  return (
    <>
      <div className={styles.DateDiv_Conatiner}>
        <h4>Date Added</h4>
        <br />

        <label className={styles.radio_container}>
          <input type="radio" name="date" value="Newest" onClick={FindItems} />
          <span className={styles.custom_radio}></span>
          Newest First
        </label>

        <label className={styles.radio_container}>
          <input type="radio" name="date" value="Oldest" onClick={FindItems}   />
          <span className={styles.custom_radio}></span>
          Oldest First
        </label>
      </div>
    </>
  );
}

export default DateItemsSearch;
