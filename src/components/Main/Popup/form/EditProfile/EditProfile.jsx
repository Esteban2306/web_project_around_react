import '../../../../../index.css';

export default function EditProfile() {
    return (
        <>
            <form className="modal__form form" noValidate>
                <input 
                type="text" 
                id="nombre"  
                name="nombre" 
                placeholder="Nombre" 
                className="modal__form_name modal__input" 
                minLength="2" 
                maxLength="40" 
                required />
                <span className="nombre-error modal__error"></span>
                <input 
                type="text" 
                id="descripcion" 
                name="descripcion" 
                placeholder="Acerca de mí" 
                className="modal__form_description modal__input" 
                minLength="2" 
                maxLength="200" 
                required />
                <span className="descripcion-error modal__error"></span>
                <button type="submit" className="modal__content_button form__submit">Guardar</button>
            </form>
        </>
    )
}