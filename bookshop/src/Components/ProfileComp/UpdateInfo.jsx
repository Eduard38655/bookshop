import styles from "../../Styles/ProfilePageStyles/InputsStyles.module.css";
function UpdateInfo(params) {
  return (
    <aside className={styles.UpdateContainer}>
     
      <div>
        <label htmlFor="">Full Name</label>
        <br />
        <input type="text" />
      </div>

      <div>
        <label htmlFor="">Email Address</label>
        <br />
        <input type="email" />
      </div>

      <div>
        <label htmlFor="">Address</label>
        <br />
        <input type="text" />
      </div>

      <div>
        <label htmlFor="">Phone</label>
        <br />
        <input type="tel" name="" id="" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <br />
        <input type="password" name="" id="" />
      </div>

    
    </aside>
  );
}

export default UpdateInfo;
