import { createContext, useState } from 'react';

export const LogModalContext = createContext({
    logModalVisible: false,
    setLogModalVisible: ()=>{}
});

export function LogModalContextProvider({ children }) {
    const [logModalVisible, setLogModalVisible] = useState(false);
    
    return (
    <LogModalContext.Provider value={{ logModalVisible, setLogModalVisible }}>
        {children}
    </LogModalContext.Provider>
  );
}