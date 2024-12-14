import { createContext } from 'react';

export default authContext = createContext({
    isLoggedIn: false,
    setLoggedIn: () => {}
});