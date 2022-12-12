import GlobalNav from './GlobalNav'; 
import './Header.css';
import ThemeSwitcher from './ThemeSwitcher';
// import Pic1 from '/image4.png';

function Header({ onNav, theme, toggleTheme }) {
    return (
        <header className="header">
            <img
    src="http://placekitten.com/100/100?image=1" 
    className="header__logo" 
    alt="Feline Overlords Logo" 
    />
    
            <h1 className="header__title">
                Cats for Adoption Near You, your cat, our passion
            </h1>
            <ThemeSwitcher className="header__theme-switcher" theme={theme} toggleTheme={toggleTheme}/>
            <GlobalNav onNav={onNav} className="header__nav"/>





        </header>
    );
}
      
    
    
    export default Header;