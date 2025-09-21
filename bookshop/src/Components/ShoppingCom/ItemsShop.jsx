import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import DataBase from "../../../Backend/ItemsData.js";
import styles from "../../Styles/ShopStyles/ItemsContent.module.css";

function ItemsShop({ SetRunlocal }) {
  const [items, SetItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [ItemInfo, SetItemInfo] = useState([]);

  const itemsPerPage = 5;

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    let valor = localStorage.getItem("ItemsInventory");
    let datos = [];
    try {
      datos = valor ? JSON.parse(valor) : [];
      datos = Array.isArray(datos) ? datos : [];
    } catch {
      datos = [];
    }
    SetItems(datos);
    SetRunlocal(true);
  }, []);

  useEffect(() => {
    // Si no hay artículos, limpiar ItemInfo
    if (!Array.isArray(items) || items.length === 0) {
      SetItemInfo([]);
      return;
    }
    // Calculamos los items de la página actual
    const offset = currentPage * itemsPerPage;
    const currentItems = items.slice(offset, offset + itemsPerPage);

    // Mapear los items con la información completa de DataBase
    const Filter = currentItems
      .map((valor) => {
        const itemData = DataBase.find((item) => item.id === valor.ID);
        return itemData ? { ...itemData, count: valor.Cantidad } : null;
      })
      .filter((e) => e !== null);

    SetItemInfo(Filter);
    SetRunlocal(true);
  }, [items, currentPage]);

  function Increase(ItemID) {
    const D = Array.isArray(items)
      ? items.map((x) =>
          x.ID === ItemID ? { ...x, Cantidad: x.Cantidad + 1 } : x
        )
      : [];
    SetItems(D);
    localStorage.setItem("ItemsInventory", JSON.stringify(D));
    SetRunlocal(true);
  }

  function Decrease(ItemID) {
    const D = Array.isArray(items)
      ? items.map((x) =>
          x.ID === ItemID ? { ...x, Cantidad: x.Cantidad - 1 } : x
        )
      : [];
    SetItems(D);
    localStorage.setItem("ItemsInventory", JSON.stringify(D));
    SetRunlocal(true);
  }

  function DeleteItems(productoID) {
    const Filter = Array.isArray(items)
      ? items.filter((e) => e.ID !== productoID)
      : [];
    SetItems(Filter);
    localStorage.setItem("ItemsInventory", JSON.stringify(Filter));
    SetRunlocal(true);
  }

  const pageCount = Array.isArray(items)
    ? Math.ceil(items.length / itemsPerPage)
    : 0;

  return (
    <aside className={styles.AsideDiv}>
      <div className={styles.SubAsideContainer}>
        {Array.isArray(ItemInfo) && ItemInfo.length > 0 ? (
          <>
            <h2>Shopping Cart</h2>
            <br />
            {ItemInfo.map((producto, index) => (
              <div className={styles.ContainerItems} key={index}>
                <div className={styles.ItemsContent}>
                  <div className={styles.Item}>
                    <img src={producto.img} alt="" />
                    <h3>
                      {producto.produto} <br />
                      <span>{producto.description}</span>
                    </h3>
                    <br />
                    <div className={styles.DivButtonsItems}>
                      <button
                        disabled={producto.count === 0}
                        onClick={() => Decrease(producto.id)}
                      >
                        -
                      </button>
                      <span>{producto.count}</span>
                      <button
                        disabled={producto.precio * producto.count >= 100000}
                        onClick={() => Increase(producto.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className={styles.ItemPrice}>
                    <span>${producto.precio * producto.count}</span>
                    <button onClick={() => DeleteItems(producto.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className={styles.EmpDiv}>
            <i className="fa-solid fa-cart-shopping"></i>
            <h3>Your Cart is Empty</h3>
            <p>Looks like you haven't added any exquisite timepieces yet.</p>
          </div>
        )}
      </div>

      {Array.isArray(ItemInfo) && ItemInfo.length > 0 ? (
        <>
          <div className={styles.PaginationDiv}>
            <ReactPaginate
              previousLabel={"← Anterior"}
              nextLabel={"Siguiente →"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={styles.pagination}
              activeClassName={styles.active}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </aside>
  );
}

export default ItemsShop;
