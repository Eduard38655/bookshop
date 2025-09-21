import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContextHistoryID } from "../../Contex/HistoryContext";
import styles from "../../Styles/ProfilePageStyles/HistoryStyles.module.css";
function History(params) {
  const [DataHistory, SetDataHistory] = useState([]);
  const { HistoryID, SetHistoryID } = useContext(ContextHistoryID);
  const navigate = useNavigate();
  useEffect(() => {
    const GetData = localStorage.getItem("DataHistory");

    SetDataHistory(JSON.parse(GetData));
  }, []);

  function Datos(HistoryID, event) {
    SetHistoryID(HistoryID);
    navigate("/Recibo");
  }
  return (
    <article className={styles.Container_History}>
      <p className={styles.Tittle}>
        <i className="fa-solid fa-receipt"></i> Purchase History{" "}
      </p>
      <div className={styles.Container_Info_History}>
        {DataHistory && DataHistory.length > 0 ? (
          <>
            {DataHistory.map((data, index) => (
              <div key={index} className={styles.SubContainer_History}>
                <p>Fecha: {new Date(data.date).toLocaleDateString()} Estado: Pago completo, Tipo: Tarjeta de credito </p>
                <button
                  onClick={(e) => {
                    Datos(data.HistoryID);
                  }}
                >
                  <i className="fa-solid fa-circle-down"></i> Descargar
                </button>
              </div>
            ))}
          </>
        ) : (
          <h2>No hay nada que mostrar</h2>
        )}
      </div>
    </article>
  );
}

export default History;
