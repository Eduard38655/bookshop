import { useState } from "react";
import ReactPaginate from "react-paginate";



function PaginationCart (params) {
      const [data, setData] = useState(ItemsData);
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10;
 
  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

    return(<>
    
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
    </>)
}

export default PaginationCart;