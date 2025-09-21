import { useEffect, useState } from "react";
import styles from "../../Styles/InventoryPgS/Search.module.css";
function PriceItemsRange({ DataBase, SetDataBase }) {
  const [AmountRange, SetDataRange] = useState("0");
  const [ResetDataBase, SetResetDataBase] = useState([]);
  const [MaxAmout, SetMaxAmout] = useState("0");
  const [valor, Setvalor] = useState([]);

  /*Buscar el precio mayor */
  let init = 0;
  useEffect(() => {
    SetResetDataBase(DataBase);

    for (let i = 0; i < DataBase.length; i++) {
      if (DataBase[i].precio > init) {
        init += DataBase[i].precio;
      }
    }

    SetMaxAmout(init);
  }, []);

  /*Buscar Items por precios */
  async function SearchByAmount(Amount) {
    SetDataBase(ResetDataBase);

    let FilterData = await DataBase.filter((Item) => Item.precio <= Amount);
    Setvalor(FilterData);
  }

  useEffect(() => {
    SetDataBase(valor);
  }, [valor]);

  
  return (
    <>
      <div className={styles.DivRange_Container}>
        <h4>Price Range</h4>
        <input
          onChange={(e) => {
            (SetDataRange(e.target.value), SearchByAmount(e.target.value));
          }}
          type="range"
          max={MaxAmout}
          min={"0"}
        />
        <small>
          $0 <span>$ {AmountRange} </span>
        </small>
      </div>
    </>
  );
}

export default PriceItemsRange;
