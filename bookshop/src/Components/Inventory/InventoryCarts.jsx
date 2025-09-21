import { useEffect, useState } from "react";
 

import styles from "../../Styles/InventoryPgS/CartsDiv.module.css";

function InventoryCarts({ ItemsData }) {
  const [CartsData, SetData] = useState([]);
  const [ItemID, SetItemID] = useState([]);
  const [InvID, SetInvID] = useState([]);
 
  useEffect(() => {
    SetData(ItemsData);
  }, [ItemsData]);

  /*Enviar datos al localStorage */
  function UpdateLocal(params) {
    let DatosLocal = localStorage.getItem("ItemsInventory");

    let valorLocal = JSON.parse(DatosLocal);
    if (!valorLocal || valorLocal.length === 0) {
      return;
    }

   const allIDs = ItemID.map((item) => item.ID);
    SetInvID(allIDs);
    SetItemID(valorLocal);
  }

  useEffect(() => {
    UpdateLocal();
  }, []);
 

  useEffect(() => {
    localStorage.setItem("ItemsInventory", JSON.stringify(ItemID));
    const allIDs = ItemID.map((item) => item.ID);
    SetInvID(allIDs);
  }, [ItemID]);

  return (
    <>
      {CartsData && CartsData.length > 0 ? (
        <div className={styles.Cartas}>
          {CartsData.map((item, index) => (
            <div key={item.id} id={item.id} className={styles.DivCarts}>
              <div className={styles.DivImg}>
                <p>{item.categoria}</p>
                <img src={item.img} alt="" />
              </div>

              <div className={styles.DivText}>
                <h5>{item.type}</h5>
                <h3>{item.produto}</h3>
                <p>{item.description || "Sin descripción"} </p>
              </div>

              <div className={styles.DivButttonAdd}>
                <h3>$ {item.precio}</h3>

                {InvID.includes(item.id) ? (
                  <>
                    <button>
                      <i className="fa-solid fa-circle-check"></i>
                      In cart
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={(e) => {
                        SetItemID((prev) => [
                          ...prev,
                          { ID: item.id, Cantidad: 1 },
                        ]);
                      }}
                    >
                      <i className="fa-solid fa-cart-shopping"></i> Add to card
                    </button>{" "}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.NotFounInv}>No Hay Items</div>
      )}
    </>
  );
}
export default InventoryCarts;
