import { useEffect, useState } from "react";
import styles from "../../Styles/InventoryPgS/Search.module.css";
function Categorias({ DataBase, SetDataBase }) {
  const [DataCategory] = useState(DataBase);

  const [NewCategory, SetNewCategory] = useState([]);

  const [datos, Setdatos] = useState([]);
  const [valores, SetValores] = useState([]);
  const [check, Setchek] = useState([]);
  const [Valorcheck, SetValorchek] = useState([]);
  const [Refresh, SetRefresh] = useState(false);

  /*Recarga los datos del Database si el resultado es 0 */
  useEffect(() => {
    if (DataBase.length === 0 && Valorcheck.length > 0) {
      SetDataBase(Valorcheck);
    }

    if (DataBase.length > 0 && Valorcheck.length === 0) {
      SetValorchek(DataBase);
    }
    SetRefresh(false);
  }, [Refresh]);

  useEffect(() => {
    Setdatos(DataBase);
  }, []);

  /*Buscar y Eliminar las categorias duplicadas */
  let DataInv = [];
  useEffect(() => {
    let exist = false;
    let conteo = 0;

    for (let i = 0; i < DataCategory.length; i++) {
      for (let j = i + 1; j < DataCategory.length; j++) {
        if (DataCategory[i].categoria === DataCategory[j].categoria) {
          conteo++;

          if (conteo >= 1) {
            exist = true;
          }
        }
      }
      let FindItems = false;
      if (exist === false) {
        for (let w = 0; w < DataInv.length; w++) {
          if (DataInv[w] === DataCategory[i].categoria) {
            FindItems = true;
          }
        }
        if (FindItems === false) {
          DataInv.push(DataCategory[i].categoria);
          SetNewCategory((prev) => [...prev, DataCategory[i].categoria]);
        }
      }
      FindItems = false;
      exist = false;
      conteo = 0;
    }
  }, []);

  //*Buscar items por Categorias */

  function FindCategory(e) {
    if (e.target.checked === true) {
      let FilterData = datos.filter(
        (item) => item.categoria === e.target.value
      );

      SetValores((prev) => [...prev, ...FilterData]);
    } else {
      let FilterData = valores.filter(
        (item) => item.categoria !== e.target.value
      );

      SetValores(FilterData);
    }
    SetRefresh(true);
  }

  /*Elimina los duplicados */
  useEffect(() => {
    Setchek((prev) => {
      const combinado = [...prev, ...valores];
      return combinado.filter(
        (item, index, self) => index === self.findIndex((t) => t.id === item.id)
      );
    });
    SetDataBase(valores);
  }, [valores]);

  return (
    <>
      <div className={styles.Container_Div_Categoria_}>
        <h4>Category</h4>

        {NewCategory && NewCategory.length > 0 ? (
          <>
            {NewCategory.map((item, index) => (
              <div className={styles.checkbox_wrapper} key={index}>
                <label>
                  <input
                    value={item}
                    type="checkbox"
                    onClick={(e) => {
                      FindCategory(e);
                    }}
                  />
                  <span className={styles.checkmark}></span>
                  {item}
                </label>
              </div>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Categorias;
