// import {useState} from 'react';
import Home from './Home';
import Feeding from './Feeding';
import Cats from './Cats';
import Account from './Account';
import Contact from './Contact';
import Gallery from './Gallery'
// import NavBar from './NavBar';


function Main({page,onNav}) {
    // const [ page, setPage ] = useState('Home');
    // function onNav( event, target) {
    //    event.preventDefault();
    //     setPage(target);
    //  }
    return(
        <main>
            {/* <NavBar setPage={setPage}/> */}
            {(page === '/')&& <Home onNav={onNav}/>}
            {(page === '/feeding.html')&& <Feeding onNav={onNav}/>}
            {(page === '/cats.html')&& <Cats onNav={onNav}/>}
            {(page === '/account.html')&& <Account/>}
            {(page === '/gallery.html')&& <Gallery/>}
            {(page === '/contact.html') && <Contact/>}
        </main>


    );
}

export default Main;