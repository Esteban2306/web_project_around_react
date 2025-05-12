import '../../index.css'
import logoHeader from '../../assets/image/header.svg'

function header (){
    return(
        <>
            <header className="header">
                <h1 className="header__title header__title_word"><img src={logoHeader} alt=""/></h1>
            </header>
        </>
    )
}

export default header