import { useState } from "react";
import ReactPaginate from "react-paginate";
import ItemsData from "../../../Backend/ItemsData.js";
import styles from "../../Styles/InventoryPgS/ContentInv.module.css";
import CartsContent from "../Inventory/InventoryCarts.jsx";
import Search from "./Search";

function InventoryContent() {
  const [data, setData] = useState(ItemsData);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10;

  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className={styles.Inventory_Container}>
      <Search ItemsData={data} setData={setData} />
 
      <div className={styles.ContainerCarts}>
        <small>
          Showing <span>{currentItems.length} </span> of{" "}
          <span>{ItemsData.length}</span> results
        </small>

        <CartsContent ItemsData={currentItems} />

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
    </div>
  );
}

export default InventoryContent;
