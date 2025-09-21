import { useState } from "react";
import styles from "../../Styles/ShopStyles/ContainerItems.module.css";
import Footer from "../HomeComponets/Footer.jsx";
import Header from "../HomeComponets/Header.jsx";
import ItemsShop from "../ShoppingCom/ItemsShop.jsx";
import MiniCartSide from "../ShoppingCom/MiniCartPrices.jsx";
function Shopping_Cart(params) {
  const [RunLocal, SetRunlocal] = useState(false);

  return (
    <article className={styles.ArticleContainer_Shop}>
      <Header />

      <div className={styles.SubContainer_Shop}>
        <ItemsShop RunLocal={RunLocal} SetRunlocal={SetRunlocal} />
        <MiniCartSide RunLocal={RunLocal} SetRunlocal={SetRunlocal} />
      </div>
      <Footer />
    </article>
  );
}

export default Shopping_Cart;
