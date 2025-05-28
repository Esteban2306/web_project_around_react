import '../../index.css'
import  ProfileDefault  from '../../assets/image/profile.jpg'
import profilePencilHover from '../../assets/image/pencil_img.svg'
import { useContext, useEffect, useState } from 'react'
import NewCard from './Popup/form/NewCard/NewCard'
import EditAvatar from './Popup/form/EditAvatar/EditAvatar.jsx'
import EditProfile from './Popup/form/EditProfile/EditProfile.jsx'
import Popup from './Popup/Popup.jsx'
import Card from './components/Card.jsx'
import api from '../../utils/Api.js'
import CurrentUserContext from '../../contexts/CurrentUserContext.js'

function Main (){

    const [popup, setPopup] = useState(null)
    const [cards, setCards] = useState([])

    // Fetch cards from the API when the component mounts
    // and set the state with the fetched data.

    useEffect(() =>{
        api.getCards()
            .then((data) => {
                setCards(data);
            })
            .catch((error) => {
                console.error('Error fetching cards:', error);
            });
    }, [])

    const profileContext = useContext(CurrentUserContext);

    const newCardPopup = {title: 'Nuevo Lugar', children: <NewCard/>}
    const editAvatarPopup = {title: 'Cambiar imagen de perfil', children: <EditAvatar/>}
    const editProfilePopup = {title: 'Editar perfil', children: <EditProfile/>}

    function handleOpenPopup(popup) {
        setPopup(popup);
      }
      function handleClosePopup() {
        setPopup(null);
      }

    async function handleCardLike(card) {
    const isLiked = card.isLiked;
    
    await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
    }).catch((error) => console.error(error));
}

    function handleCardDelete(card) {
    api.deleteCard(card._id)
        .then(() => {
            setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
        })
        .catch((error) => console.error('Error deleting card:', error));
    }
    return(
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__image-container"  > 
                        <img 
                        src={profileContext?.avatar || ProfileDefault} 
                        alt="profile of a men" 
                        className="profile__image" 
                        role="button" 
                        tabIndex="0" 
                        aria-label="Editar imagen de perfil"
                        onClick={() => handleOpenPopup(editAvatarPopup)}/>
                        <img 
                        src={profilePencilHover} 
                        alt="pencil" 
                        className="profile__image-pencil"/>
                    </div>
                    <div className="profile__info">
                        <ul className="profile__info-list">
                            <li><h1 className="profile__info-name" id="name">{profileContext?.name}</h1></li>
                            <li><p className="profile__info-description" id="description">{profileContext?.about}</p></li>
                        </ul>
                        <button 
                        className="profile__edit-button" 
                        type="button" 
                        onClick={() => handleOpenPopup(editProfilePopup)}>.</button>
                    </div>
                    <button 
                    className="profile__add-button" 
                    type="button" 
                    onClick={() => handleOpenPopup(newCardPopup)}>.</button>
                </section>
                <ul className="galery__list" id='galery__content'>
                    {cards.map((card) => (
                        <Card 
                        key={card._id} 
                        card={card} 
                        onLikeCard={handleCardLike} 
                        onCardDelete={handleCardDelete}
                        />
                    ))}
                </ul>
                {popup && (
                    <Popup onClose={handleClosePopup} title={popup.title}>
                        {popup.children}
                    </Popup>
                    
                )} 
          </main>
        </>
    )
}

export default Main