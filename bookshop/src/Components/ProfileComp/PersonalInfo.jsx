import { useEffect, useState } from "react";
import UpdateInfoInputs from "../../Components/ProfileComp/UpdateInfo.jsx";
import styles from "../../Styles/ProfilePageStyles/PersonalInfo.module.css";
function PersonalInfo(params) {
  const [UserData, SetUserData] = useState([]);
  const [isValid, SetIsValid] = useState(false);
  useEffect(() => {
    const GetData = localStorage.getItem("UserData");
    SetUserData(JSON.parse(GetData));
  }, []);

  return (
    <>
      {!isValid ? (
        <>
          <aside className={styles.Container_Main_Info}>
            <div className={styles.Edit_Sections}>
              <p>
                <i className="fa-solid fa-user"></i>Profile Information
              </p>

              <button
                onClick={(e) => {
                  SetIsValid(true);
                }}
              >
                 
                <i className="fa-solid fa-pen-to-square"></i>Edit profile
              </button>
            </div>

            {UserData.map((user, index) => (
              <div className={styles.Show_Personal_Info} key={index}>
                <p>
                  Full Name
                  <br />
                  <span> {user.Name} </span>
                </p>
                <p>
                  Email Address
                  <br />
                  <span> {user.User} </span>
                </p>
                <p>
                  Address
                  <br />
                  <span>{user.Address} </span>
                </p>
                <p>
                  Phone
                  <br />
                  <span> {user.tel} </span>
                </p>
                <p>
                  Password
                  <br />
                  <span>{user.password ? "*********" : ""} </span>
                </p>
              </div>
            ))}
          </aside>
        </>
      ) : (
        <div className={styles.ContainerInputs}>
          <div className={styles.SubContainerInputs}>
            <div className={styles.Edit_Sections}>
              <p>
                <i className="fa-solid fa-user"></i>Profile Information
              </p>
            </div>
            <UpdateInfoInputs />
          </div>
          <div className={styles.Update_ButtonsOp}>
            <button>Guardar</button>
            <button
              onClick={(e) => {
                SetIsValid(false);
              }}
            >
              <i className="fa-solid fa-xmark"></i> Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PersonalInfo;
