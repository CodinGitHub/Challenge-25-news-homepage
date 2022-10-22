import './Header.css'
import imageLogo from '../assets/images/logow.svg'

const Header = (props) => {
  return (
    <header className='header'>
        <img src={imageLogo} alt="logo image" />
        {props.children}
    </header>
  )
}

export {Header}