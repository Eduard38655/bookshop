import styles from "../../Styles/HomePgS/MainImg.module.css";
 
function MainImg(params) {
  return (
    <>
      <div className={styles.MainImg_Container}>
        <div className={styles.MainImg_Subcontent}>
          <div className={styles.backimg}>
            
          </div>


         </div>
        <div className={styles.MainImg_text}>
          <h3>El Arte de la Relojería</h3>
          <p>
           Relojes de lujo donde el legado se une a la artesanía
          </p>
        </div>
      </div>
    </>
  );
}
export default MainImg;
