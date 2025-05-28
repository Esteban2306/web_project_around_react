import './index.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import api from './utils/Api.js'
import { useEffect, useState } from 'react';
import CurrentUserContext from './contexts/CurrentUserContext.js';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() =>{
    api.getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((error) => {
        console.error('Error fetching user info:', error);
      });
  },[]);
  
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header/>
        <Main />
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
