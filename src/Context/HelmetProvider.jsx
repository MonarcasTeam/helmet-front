import {useState} from 'react';
import { HelmetContext } from './HelmetContext';

export const HelmetProvider = ({children}) => {

    const [user, setUser] = useState({
        username: '',
        role: '',
        active: false
      });


  return (
    <HelmetContext.Provider value={{user, setUser}}>
        {children}
    </HelmetContext.Provider>
  )
}