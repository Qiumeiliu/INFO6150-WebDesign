//import {useState} from 'react';
import './Home.css';


function Home(){
    // const[count, setCount] = useState(0);
    return(
        <div className="homehome">
            <div className='home_text'>
            <p> Text</p>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

            {/* <button
        onClick={()=>{
            const delay = Math.floor(Math.random()*2000);
            //called affter 1-2 seconds
            setTimeout(()=> setCount( count+1),delay);
        }}
        >{count}</button> */}
        </div>



        </div>
    );
}

export default Home;