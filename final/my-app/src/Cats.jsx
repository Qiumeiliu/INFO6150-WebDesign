import './Cats.css';


function Cats({onNav}){
    return(
        <main id="main" className="main">
        <div className='cats_cards'>
            <span className='cats_card'>
                <div className='cats_pic'>
                <h2 className='cats_title'>
                    Mini
                </h2>
                <img
                src="http://placekitten.com/100/100?image=5" 
                className="panel__pic" 
                alt="Feline Overlords Logo" /> 
                </div>
                <div class="card__text"><p>
                If you want a very affectionate kitten, then Mimi is your girl! Mimi is all about getting attention from her human. Mimi is 1 month old and would do best with another playful kitty so she can get some of her energy out. Mimi has been around dogs and has done well!
                </p>
                </div>
              
   
                <a href = "/" className='linkLink' onClick={onNav}>
                    Home
                </a>
            

            </span>
            
            <span className='cats_card'>
                <div className='cats_pic'>
                <h2 className='cats_title'>
                Tess
                </h2>
                <img
                src="http://placekitten.com/100/100?image=20" 
                className="panel__pic" 
                alt="Feline Overlords Logo" /> 
                </div>
                <div class="card__text"><p>
                Tess is such a sweet and playful young cat. She is a year old and can't enough of all the scratches and love from her human. She loves belly scratches. Isabella also isn’t shy, she loves all humans, especially her human! :) , and she gets along with dogs and cats, with proper introduction.
                </p>
                </div>
               
                
                <a href = '/feeding.html' className='linkLink'  onClick={onNav}>
                    Feeding
                </a>
              


            </span>

            <span className='cats_card'>
                <div className='cats_pic'>
                <h2 className='cats_title'>
                Manny
                </h2>
                <img
                src="http://placekitten.com/100/100?image=9" 
                className="panel__pic" 
                alt="Feline Overlords Logo" /> 
                </div>
                <div class="card__text"><p>
                Manny is 1 month old. This sweet boy is very affectionate and yearning for his human to love him. He can be a bit shy at first but he quickly warm up to you and he will love all the scratches and love. His favorite things in life include a feathered wand, rotisserie chicken and wet food.
                </p>
                </div>
               
                <a href = "/account.html"  className='linkLink' onClick={onNav}>
                   Account
                </a>
                


            </span>

            <span className='cats_card'>
                <div className='cats_pic'>
                <h2 className='cats_title'>
                Sugar
                </h2>
                <img
                src="http://placekitten.com/100/100?image=3" 
                className="panel__pic" 
                alt="Feline Overlords Logo" /> 
                </div>
                <div class="card__text"><p>
                Sugar is a one year old sweet kitty that is very laid back and well behaved. Sugar is such a beautiful girl inside and out so she is worth a little patience. Sugar’s favorite things to do in life is get scratches from his human, catnip toys, and rotisserie chicken!
                </p>
                </div>
               
                <a href = "/gallery.html" className='linkLink'  onClick={onNav}>
                   Picture Gallery
                </a>
               


            </span>
            
            
           
        </div>
        </main>
    );
}

export default Cats;