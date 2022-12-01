import './Cats.css';


function Cats({onNav}){
    return(
        <div className='cats_cards'>
            <div className='cats_card'>
                <div className='cats_pic'>
                <img
                src="http://placekitten.com/100/100?image=1" 
                className="panel__pic" 
                alt="Feline Overlords Logo" /> 
                </div>
                <div className='cats_text'>
                    Cat1
                </div>
                <div className='linklink'>
                <a href = "/"  onClick={onNav}>
                    Home
                </a>
                </div>

            </div>
            
            <div className='cats_card'>
                <div className='cats_pic'>
                <img
                src="http://placekitten.com/100/100?image=1" 
                className="panel__pic" 
                alt="Feline Overlords Logo" /> 
                </div>
                <div className='cats_text'>
                    Cat2
                </div>
                {/* <a href = "/about.html"  onClick={onNav}>
                    Home
                </a> */}


            </div>

            <div className='cats_card'>
                <div className='cats_pic'>
                <img
                src="http://placekitten.com/100/100?image=1" 
                className="panel__pic" 
                alt="Feline Overlords Logo" /> 
                </div>
                <div className='cats_text'>
                    Cat3
                </div>
                {/* <a href = "/about.html"  onClick={onNav}>
                    Cats
                </a> */}


            </div>
        </div>
    );
}

export default Cats;