import './Nav.css';
import closeIcon from '../assets/images/icon-menu-close.svg'

const Nav = () => {
  return (
    <>
        <div className='navbar-background'></div>
        <nav className="navbar">
            <img src={closeIcon} alt='close icon' />
            <ul>
                <li>Home</li>
                <li>New</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
    </>
    
  )
}

export {Nav}