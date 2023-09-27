import './header.css'
import LOGO from "../../assets/logofoods-mb.png"

export const Header = () => {
// le tengo que subir el navbar 
    return(
        <div className='header'>
            <img src={LOGO} alt="logo" />
            <p>hola</p>
        </div>
    )

}