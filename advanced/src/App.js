import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import { AuthContext } from './store/authContext';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const loginDetails = localStorage.getItem('loggedIn')
  //   if (loginDetails === '1') setIsLoggedIn(true)
  // }, [])

  // const loginHandler = (email, password) => {

  //   localStorage.setItem('loggedIn', '1')
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('loggedIn')
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext)


  return (

    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIN && <Login />}
        {ctx.isLoggedIN && <Home />}
      </main>
    </>
  );
}

export default App;
