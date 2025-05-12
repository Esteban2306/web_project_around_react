import '../../index.css'
import  ProfileDefault  from '../../assets/image/profile.jpg'
import profilePencilHover from '../../assets/image/pencil_img.svg'

function Main (){
    return(
        <>
            <main className="content">
                <section className="profile">
                    <div className="profile__image-container"  > 
                        <img src={ProfileDefault} alt="profile of a men" className="profile__image" role="button" tabindex="0" aria-label="Editar imagen de perfil"/>
                        <img src={profilePencilHover} alt="pencil" className="profile__image-pencil"/>
                    </div>
                    <div className="profile__info">
                        <ul className="profile__info-list">
                            <li><h1 className="profile__info-name" id="name">Esteban Castañeda</h1></li>
                            <li><p className="profile__info-description" id="description">Web development</p></li>
                        </ul>
                        <button className="profile__edit-button" type="button">.</button>
                    </div>
                    <button className="profile__add-button" type="button">.</button>
                </section>
          </main>
        </>
    )
}

export default Main