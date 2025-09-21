import { useEffect, useState } from "react";
import styles from "../../Styles/InventoryPgS/Search.module.css";
import Categorias from "../Inventory/Categorias.jsx";
import DateItemsSearch from "../Inventory/DateItemsSearch.jsx";
import PriceItemsRange from "../Inventory/ItemsPriceRange.jsx";

function Search({ ItemsData, setData }) {
  const [search, Setsearch] = useState("");
  const [Reset] = useState(ItemsData);

  useEffect(() => {
    if (search === "") {
      setData(Reset);
      return;
    }
    let Filter = Reset.filter(
      (Item) =>
        Item.produto.toLowerCase().startsWith(search.toLowerCase()) ||
        Item.marca.toLowerCase().startsWith(search.toLowerCase())
    );

    setData(Filter);
  }, [search]);

  return (
    <div className={styles.Search_Container}>
      <div className={styles.Search_Container_Div}>
        <h3>Filters</h3>
        <div className={styles.Div_Input_Search}>
          <i className="fa-solid fa-magnifying-glass"></i>

          <input
            type="text"
            placeholder="Search por nombre o marca"
            onChange={(e) => {
              Setsearch(e.target.value);
            }}
          />
        </div>

        <Categorias DataBase={ItemsData} SetDataBase={setData} />
        <PriceItemsRange DataBase={ItemsData} SetDataBase={setData} />
        <DateItemsSearch DataBase={ItemsData} SetDataBase={setData} />
      </div>
    </div>
  );
}

export default Search;
