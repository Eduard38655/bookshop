import { createContext, useEffect, useState } from "react";
export const UserContext = createContext();

function UserContextData({ children }) {
  const [UserData, SetUserData] = useState(null);
 
useEffect(()=>{
const UserData=localStorage.getItem("UserData")
if (!UserData) {
    return 
}
let v=JSON.parse(UserData)
SetUserData(v)

},[])
  return (
    <UserContext.Provider value={{UserData, SetUserData}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextData
