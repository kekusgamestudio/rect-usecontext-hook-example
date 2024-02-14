import { useState } from 'react';
import { UserContext } from './UserContext';

const user = {
  name: 'Kekus Martino',
  email: 'kekus@htomail.com',
}

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  const loginUser = (newUser) => {
    setUser(newUser);
  }

  return (
    <UserContext.Provider value={{ user, loginUser }}>
      { children }
    </UserContext.Provider>
  )
}

