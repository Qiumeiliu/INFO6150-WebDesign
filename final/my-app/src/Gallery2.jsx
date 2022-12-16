import {useState} from 'react';
import './Gallery.css';
import images from './images.js';

function Gallery() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if(currentIndex===0){
      setCurrentIndex(images.length-1);
    }else{
      setCurrentIndex(currentIndex-1);
    }
    
  };
  const handleNextClick = () => {
    if(currentIndex===images.length-1){
      setCurrentIndex(0);
    }else{
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handleClick = (event) =>{
    event.preventDefault();
    let id = event.currentTarget.getAttribute('index')
    setCurrentIndex(id*1);
  }

  const imagesHtml = images.map((item,index) =>
<a onClick={handleClick} key={item.id} index={item.id} className='image'>
<img className={currentIndex===index?"show":""}  src={item.src} alt={item.alt} />

</a>

)

  return (
    <main id="main" className="main">
      <div className='wholeContent'>
      <div className='includeButton'>
      <button onClick={handlePrevClick}>Previous</button>
      <img className='sepimg' src={images[currentIndex].src} alt={images[currentIndex].alt} />
      <button onClick={handleNextClick}>Next</button>
      <div className='allImages'>
        {imagesHtml}
      </div>
      </div>
      {/* <div className='text'><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like
        </p></div> */}
      </div>
    </main>
  );
}


export default Gallery;







