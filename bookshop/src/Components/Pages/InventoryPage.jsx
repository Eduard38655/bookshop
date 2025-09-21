
import styles from "../../Styles/InventoryPgS/InventoryPage.module.css";
import Footer from "../HomeComponets/Footer.jsx";
import Header from "../HomeComponets/Header.jsx";
import InventoryContent from "../Inventory/InventoryContent.jsx";
function InventoryPage(params) {
    
    return(<article className={styles.InventoryPage}>
     <Header/>
    <InventoryContent/>
    <Footer/>
    </article>)
}
export default  InventoryPage