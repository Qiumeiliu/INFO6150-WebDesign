import './App.css';
import {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Skiplink from './Skiplink';

function App() {
  const [page, setPage] = useState('/');
   function onNav( event) {
     event.preventDefault();
    const target = event.target.getAttribute('href');
    // console.log(target);
      setPage(target);}
      
  const [theme, setTheme] = useState('light');
  function toggleTheme() {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
  }




 
  return ( 
    <div className={`app ${theme}`}>
      <Skiplink/>
      <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme}/>
      <Main page={page} onNav={onNav}/>
      <Footer  onNav={onNav}/>
    </div>
  );
}

export default App;
