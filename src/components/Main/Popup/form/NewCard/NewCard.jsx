import '../../../../../index.css';

export default function NewCard() {
    return (
        <>
            <form className="modal__add-form form" noValidate>
                <input 
                type="text" 
                id="nombreAdd" 
                name='title' 
                placeholder="Titulo" 
                className="modal__add-form-name modal__input " 
                minLength="2" 
                maxLength="30" 
                required/>
                <span className="nombreAdd-error modal__error"></span>
                <input 
                type="url" 
                id="imageAdd" 
                name="link" 
                placeholder="Enlace a la imagen" 
                className="modal__add-form-description modal__input" 
                required />
                <span className="imageAdd-error modal__error"></span>
                <button type="submit" className="modal__add-content-button form__submit">Crear</button>
            </form>
        </>
    )
}