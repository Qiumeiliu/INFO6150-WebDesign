//import {useState} from 'react';
import './Home.css';


function Home(){
    // const[count, setCount] = useState(0);
    return(
        <main id="main" className="main">
        <div className="homehome">
            <div className='home_text'>
            <h2> Pet adoption meaning</h2>
            <p>Pet adoption is the process of transferring responsibility for a pet that was previously owned by another party such as a person, shelter, or rescue organization. Common sources for adoptable pets are animal shelters and rescue groups.
            </p>
            <h2>Why we need cat adoption
            </h2>
            <p>
            According to the ASPCA, 3.2 million cats can be found in shelters every year and of these, about 860,000 are euthanized annually. Adopting a cat not only helps one of these many animals, looking for a home, but also opens a space for shelters and rescue groups to take in another cat.  
            </p>

            <h2>Why get your pet?
            </h2>
            <p>
            The best way to save a beloved pet is to keep them out of the shelter system. Rehoming a dog or cat is a better kind of pet adoption, in every way. 
            </p>
            <p>
            Pets go directly from one loving home to another. Pet adoption with less stress. Less chance of illness or death.
            </p>









            {/* <button
        onClick={()=>{
            const delay = Math.floor(Math.random()*2000);
            //called affter 1-2 seconds
            setTimeout(()=> setCount( count+1),delay);
        }}
        >{count}</button> */}
        </div>



        </div>
        </main>
    );
}

export default Home;