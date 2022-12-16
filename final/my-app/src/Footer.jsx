import './Footer.css';

function Footer({onNav}) {
    return(
        <footer className="footer">
            <ul className="footer__list footer__soical">
                <li><a href='/contact.html' onClick={onNav} >Contact</a></li>
            </ul>
           
        </footer>


    );
}

export default Footer;