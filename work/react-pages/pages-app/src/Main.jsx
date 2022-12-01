// import {useState} from 'react';
import Home from './Home';
import About from './About';
import Cats from './Cats';
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
            {(page === '/about.html')&& <About />}
            {(page === '/cats.html')&& <Cats />}
        </main>


    );
}

export default Main;