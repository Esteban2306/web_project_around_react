import '../../../../../index.css';

export default function EditAvatar(){
    return(
        <>
            <form  className="modal__image-form form" noValidate>
            <input 
            type="url" 
            id="avatar"  
            name="avatar" 
            placeholder="Inagresa URL" 
            className="modal__image_url modal__input" 
            required/>
            <span className="avatar-error modal__error"></span>
            <button type="submit" className="modal__image_button form__submit">Guardar</button>
            </form>
        </>
    )
}