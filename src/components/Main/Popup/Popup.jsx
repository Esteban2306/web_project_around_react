import '../../../index.css'

export default function Popup(props) {
    const {title,children,onClose} = props
    return (
        <>
            <div className="modal" id="modal-edit-all">
                <div  className={`modal__content ${!title ? 'modal__content-untiteld' : ''}`}>
                    <button className="close popup__close" type="button" onClick={onClose}></button>
                    {title && <h3 className="modal__content_header">{title}</h3>}
                    {children}
                </div>
            </div>
        </>
    )
}