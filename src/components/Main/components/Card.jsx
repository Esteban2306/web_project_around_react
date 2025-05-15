import { useState } from 'react';
import '../../../index.css'
import ImagePopup from '../Popup/form/ImagePopup/ImagePopup.jsx'
import Popup from '../Popup/Popup.jsx';

export default function Card({card, handleOpenPopup}) {
    const { name, link, isLiked} = card;
    const [popup, setPopup] = useState(null)

    const newImagePopup = { children:<ImagePopup card={card}/>}

     function handleOpenPopup(popup) {
        setPopup(popup);
      }

   function handleClosePopup() {
        setPopup(null);
     }

    return(
        <> 
            <li className="galery" >
                <div className="galery__item">
                    <img 
                    src={link} 
                    onClick={() => handleOpenPopup(newImagePopup)} 
                    alt="landscape image" 
                    className="galery__item-image"/>
                    <button className="galery__item-delete-button" type="button"></button>
                    <div className="galery__item-content">
                        <p className="galery__item-name">{name}</p>
                        <button className="galery__item-like-button" type="button"></button>
                    </div>
                </div>
            </li>
            {popup && (
                    <Popup onClose={handleClosePopup} title={popup.title}>
                        {popup.children}
                        {console.log(popup)}
                    </Popup>
                    
                )} 
        </>
    )
}