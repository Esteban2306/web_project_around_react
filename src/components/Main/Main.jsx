import '../../index.css'
import  ProfileDefault  from '../../assets/image/profile.jpg'
import profilePencilHover from '../../assets/image/pencil_img.svg'
import { useState } from 'react'
import NewCard from './Popup/form/NewCard/NewCard'
import EditAvatar from './Popup/form/EditAvatar/EditAvatar.jsx'
import EditProfile from './Popup/form/EditProfile/EditProfile.jsx'
import Popup from './Popup/Popup.jsx'
import Card from './components/Card.jsx'

function Main (){

    const [popup, setPopup] = useState(null)

    const newCardPopup = {title: 'Nuevo Lugar', children: <NewCard/>}
    const editAvatarPopup = {title: 'Cambiar imagen de perfil', children: <EditAvatar/>}
    const editProfilePopup = {title: 'Editar perfil', children: <EditProfile/>}

    const cards =[
        {
            createdAt: "2025-04-29T21:24:19.731Z",
            isLiked: false,
            link: "https://plus.unsplash.com/premium_photo-1721268770804-f9db0ce102f8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Nex Mexico, Road",
            owner: "ae39fd31bd3cee58a6cc18c5",
            _id: "68114383a533c2001af97225"},

        {
            createdAt: "2025-04-29T14:47:06.133Z",
            isLiked: false,
            link: "https://resizer.glanacion.com/resizer/v2/cuanto-cuesta-irse-de-vacaciones-a-T36JYQWL5NCTXDLUIVBTKQFR4Y.JPG?auth=73c4badeafcd588bdf60de779d2c0d062da4e8790946df3b1eaa214f92fdd188&width=1280&height=854&quality=70&smart=true",
            name: "Bariloche",
            owner: "ae39fd31bd3cee58a6cc18c5",
            _id: "6810e66aa533c2001af96f20",
        },
        {
            createdAt: "2025-04-29T14:47:06.133Z",
            isLiked: false,
            link: "https://resizer.glanacion.com/resizer/v2/cuanto-cuesta-irse-de-vacaciones-a-T36JYQWL5NCTXDLUIVBTKQFR4Y.JPG?auth=73c4badeafcd588bdf60de779d2c0d062da4e8790946df3b1eaa214f92fdd188&width=1280&height=854&quality=70&smart=true",
            name: "Bariloche",
            owner: "ae39fd31bd3cee58a6cc18c5",
            _id: "6810e66aa533c2001af96f20",
        },
        {
            createdAt: "2025-04-29T14:47:06.133Z",
            isLiked: false,
            link: "https://resizer.glanacion.com/resizer/v2/cuanto-cuesta-irse-de-vacaciones-a-T36JYQWL5NCTXDLUIVBTKQFR4Y.JPG?auth=73c4badeafcd588bdf60de779d2c0d062da4e8790946df3b1eaa214f92fdd188&width=1280&height=854&quality=70&smart=true",
            name: "Bariloche",
            owner: "ae39fd31bd3cee58a6cc18c5",
            _id: "6810e66aa533c2001af96f20",
        },
        
    ]

    console.log(cards)

    function handleOpenPopup(popup) {
        setPopup(popup);
      }
      function handleClosePopup() {
        setPopup(null);
      }
    return(
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__image-container"  > 
                        <img 
                        src={ProfileDefault} 
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
                            <li><h1 className="profile__info-name" id="name">Esteban Castañeda</h1></li>
                            <li><p className="profile__info-description" id="description">Web development</p></li>
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
                        <Card key={card._id} card={card} />
                    ))}
                </ul>
                {popup && (
                    <Popup onClose={handleClosePopup} title={popup.title}>
                        {popup.children}
                        {console.log(popup)}
                    </Popup>
                    
                )} 
          </main>
        </>
    )
}

export default Main