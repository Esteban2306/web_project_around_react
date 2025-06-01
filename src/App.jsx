import './index.css'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import Footer from './components/Footer/Footer.jsx'
import api from './utils/Api.js'
import { useEffect, useState } from 'react';
import CurrentUserContext from './contexts/CurrentUserContext.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null)
  const [cards, setCards] = useState([])

  useEffect(() =>{
    api.getUserInfo()
      .then((data) => { 
        setCurrentUser(data);
      })
      .catch((error) => {
        console.error('Error fetching user info:', error);
      });
  },[]);

  useEffect(() => {
      api.getCards()
          .then((data) => {
              setCards(data);
          })
          .catch((error) => {
              console.error('Error fetching cards:', error);
            });
      }, []);


  function handleOpenPopup(popup) {
        setPopup(popup);
      };

  function handleClosePopup() {
        setPopup(null);
      }

  async function handleCardLike(card) {
          const isLiked = card.isLiked;
  
          await api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
              setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
          }).catch((error) => console.error(error));
      }
  
  async function handleCardDelete(card) {
      await api.deleteCard(card._id)
          .then(() => {
              setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
          })
            .catch((error) => console.error('Error deleting card:', error));
      }

  const handleUpdateUser = (data) => {
    (async () => {
      await api.changeUserInfo(data).then((newData) => {
        setCurrentUser(newData),
        handleClosePopup();
      });
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.updateProfile(data).then((newData) => {
        setCurrentUser(newData),
        handleClosePopup();
      });
    })();
  }
  
  const handleAddPlaceSubmit = (data) => {
    (async () => {
      await api.createNewCard(data).then((newCard) => {
        setCards([newCard, ...cards]),
        handleClosePopup();
      });
    })();
  };


  return (
    <CurrentUserContext.Provider 
    value={{
      currentUser, 
      handleUpdateUser, 
      handleUpdateAvatar,
      handleOpenPopup, 
      handleClosePopup,
      popup, 
      handleCardLike, 
      handleCardDelete, 
      cards,
      handleAddPlaceSubmit,
      }}>
      <div className='page'>
        <Header/>
        <Main 
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
        />
        <Footer/>
      </div>
    </CurrentUserContext.Provider>
  )
}

export default App
