import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import datos from "../../../Backend/ItemsData.js";
import styles from "../../Styles/ShopStyles/MiniCartPrices.module.css";
function MiniCartPrices({ RunLocal, SetRunlocal }) {
  const [DataBase, SetDataBase] = useState([]);
  const [Data] = useState(Array.isArray(datos) ? datos : []);
  const navigate = useNavigate();
  const [LocalDatos, SetLocalDatos] = useState(() => {
    try {
      const raw = localStorage.getItem("ItemsInventory");
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });
  const [isValid, SetValid] = useState(
    Array.isArray(LocalDatos) && LocalDatos.length > 0
  );
  const [Amount, SetResultAmount] = useState(0);

  // Load cart data from localStorage
  useEffect(() => {
    let parsed = [];
    try {
      const raw = localStorage.getItem("ItemsInventory");
      parsed = raw ? JSON.parse(raw) : [];
      parsed = Array.isArray(parsed) ? parsed : [];
    } catch {
      parsed = [];
    }
    SetLocalDatos(parsed);
    SetValid(Array.isArray(parsed) && parsed.length > 0);
    if (RunLocal) SetRunlocal(false);
  }, [RunLocal, SetRunlocal]);

  // Calculate subtotal using real product prices from Data
  useEffect(() => {
    if (!Array.isArray(LocalDatos) || !Array.isArray(Data)) {
      SetResultAmount(0);
      SetValid(false);
      return;
    }
    const total = LocalDatos.reduce((acc, local) => {
      if (
        !local ||
        typeof local.ID === "undefined" ||
        typeof local.Cantidad === "undefined"
      )
        return acc;
      const producto = Data.find((item) => item.id === local.ID);
      const precio = producto ? Number(producto.precio) : 0;
      const cantidad = Number(local.Cantidad) || 0;
      return acc + precio * cantidad;
    }, 0);
    SetResultAmount(total);
    SetValid(LocalDatos.length > 0);
  }, [LocalDatos, Data]);

  function Checkout(event) {
     
    let history = [];
    try {
      const raw = localStorage.getItem("DataHistory");
      history = raw ? JSON.parse(raw) : [];
      history = Array.isArray(history) ? history : [];
    } catch {
      history = [];
    }
    const newEntry = {
      HistoryID: history.length + 1,
      items: LocalDatos,
      subtotal: Amount,
      date: new Date().toISOString(),
    };
    const updatedHistory = [...history, newEntry];
    localStorage.setItem("DataHistory", JSON.stringify(updatedHistory));
    localStorage.removeItem("ItemsInventory");
    SetLocalDatos([]);
    SetValid(false);
    SetResultAmount(0);
 alert("Thank you for your purchase! Your order has been placed successfully.");
    
    navigate("/Profile");
  }

  return (
    <>
      {isValid && (
        <aside className={styles.AsideMiniCart}>
          <div className={styles.MiniCart}>
            <div className={styles.ContainerCart}>
              <h3>Order Summary</h3>
              <br />
              <div className={styles.MiniCart_Prices}>
                <p>Subtotal</p>
                <span>${Amount.toFixed(2)}</span>
              </div>
              <div className={styles.MiniCart_Prices}>
                <p>Taxes (12%)</p>
                <span>${(Amount * 0.12).toFixed(2)}</span>
              </div>
              <br />
              <div className={styles.MiniCart_PricesTotal}>
                <p>Total</p>
                <span>${(Amount * 1.12).toFixed(2)}</span>
              </div>
              <br />
              <button onClick={Checkout}>
                Proceed to Checkout <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}

export default MiniCartPrices;
