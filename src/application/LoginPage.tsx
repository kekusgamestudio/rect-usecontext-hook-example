import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
  const { user, loginUser } = useContext(UserContext);

  return (
    <>
      <div>LoginPage</div>
      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>
      <button className='btn btn-primary'
        onClick={ () => loginUser( { id: 123, name: 'Kekus', email: 'kekus@kekus.com.ar' } ) }
      >
        Establecer usuario
      </button>
    </>
  )
}
