import { createContext, useEffect, useState } from "react";
export const ContextHistoryID = createContext();

function HistoryContext({ children }) {
  const [HistoryItemsID, SetHistoryID] = useState(0);
   useEffect(() => {
    console.log(HistoryItemsID);
  }, [HistoryItemsID]);

  return (
    <ContextHistoryID.Provider value={{ HistoryItemsID, SetHistoryID }}>
      {children}
    </ContextHistoryID.Provider>
  );
}

export default HistoryContext;
