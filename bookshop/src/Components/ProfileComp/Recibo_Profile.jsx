import { useContext, useEffect, useState } from "react";
import DataItems from "../../../Backend/ItemsData.js";
import { ContextHistoryID } from "../../Contex/HistoryContext.jsx";
import { UserContext } from "../../Contex/UserContext.jsx";
import watch_icon from "../../Images/watch-time-heart-svgrepo-com.svg";
import styles from "../../Styles/ProfilePageStyles/ReciboPage.module.css";

function ReciboPdf(params) {
  const { UserData, SetUserData } = useContext(UserContext);
  const { HistoryItemsID, SetHistoryID } = useContext(ContextHistoryID);
  const [Amount, SetAmout] = useState(0);
  const [DataInv, SetDataInv] = useState([]);
  const [LocalData, SetLocalData] = useState(DataItems);
  const [Inv, SetInv] = useState([]);

  useEffect(() => {
    const GetData = localStorage.getItem("DataHistory");

    const GetDataBase = JSON.parse(GetData);

    GetDataBase.filter((e) => e.HistoryID == HistoryItemsID).map((inv) => {
      const datos = inv.items.map((z) => {
        const LocalDataInfo = LocalData.map((itemID) => {
          if (itemID.id == z.ID) {
            return { ...itemID, count: z.Cantidad };
          }
        });

        return LocalDataInfo;
      });
      SetDataInv(datos);
    });
     
  }, []);

  useEffect(() => {
    DataInv.map((itemID) => {
      itemID.map((info) => {
        if (info) {
          SetInv((prev) => [...prev, info]);
        }
      });
    });
  }, [DataInv]);
  useEffect(() => {
    let Result = 0;
    let Filter = Inv.map((e) => {
      Result += e.precio * e.count;
    });

    SetAmout(Result);
  }, [Inv]);
  return (
    <article className={styles.Container_Recibo}>
      <h2>Recibo</h2>
      <div className={styles.SubContainer_Recibo}>
        <div className={styles.Div_Logo}>
          <div>
            <img src={watch_icon} alt="" />
            <h3>ChronoVault</h3>
          </div>

          <p>Fecha: {new Date().toLocaleDateString()}</p>
        </div>

        <div className={styles.Main_container_Info}>
          <div className={styles.Main_container_part1}>
            <h3>BILLED TO</h3>
            {UserData.map((invoice, index) => (
              <div key={index}>
                <span>{invoice.Name}</span>
                <span>{invoice.Address}</span>
                <span>{invoice.User}</span>
              </div>
            ))}
          </div>

          <div className={styles.Main_container_part2}>
            <span>PAYMENT METHOD</span>

            <span>Credit Card</span>

            <span>Ending in **** 1234</span>
          </div>
        </div>

        <aside className={styles.Container_Items}>
          <div className={styles.DivItems}>
            {Inv.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt="" />
                <p>{item.produto}</p>

                <span>$ {item.precio}</span>
              </div>
            ))}
          </div>
        </aside>

        <div className={styles.Div_Prices}>
          <div>
            <span>Subtotal</span>$ {Amount}
          </div>
          <br />
          <div>
            <span>Taxes (Est.) (10%)</span>$ {Amount * 0.1}
          </div>
          <br />
          <div>
            <span> Total Paid</span>$ {Amount * 0.1 + Amount}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ReciboPdf;
