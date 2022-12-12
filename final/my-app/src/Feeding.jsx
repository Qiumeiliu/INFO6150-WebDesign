import './Feeding.css';



function Feeding(){
    return(
        <main id="main" className="main">
            <h2>Tips of Feeding Cats</h2>
        <div className="panel">
          <div className='panel1'>
            <div className='picpic'>
            <img
    src="http://placekitten.com/100/100?image=1" 
    className="panel__pic" 
    alt="Feline Overlords Logo" 
    /> </div>
     <div className='texttext'>
    <p>
    Kittens need bite-size meals that help build their growing muscles and immune systems. 
    </p>
    </div>
    </div>
    <div className='panel2'>
    <div className='picpic'>
            <img
    src="http://placekitten.com/100/100?image=15" 
    className="panel__pic" 
    alt="Feline Overlords Logo" 
    /></div>
 <div className='texttext'>
    <p>
    Older cats appreciate food that’s softer and easier to digest. 
    </p>
    </div>
    </div>
    <div className='panel1'>
            <div className='picpic'>
            <img
    src="http://placekitten.com/100/100?image=7" 
    className="panel__pic" 
    alt="Feline Overlords Logo" 
    /> </div>
     <div className='texttext'>
    <p>
    Overweight cats need food to help them manage their weight without sacrificing flavor or nutrition. 

    </p>
    </div>
    </div>
    <div className='panel1'>
            <div className='picpic'>
            <img
    src="http://placekitten.com/100/100?image=5" 
    className="panel__pic" 
    alt="Feline Overlords Logo" 
    /> </div>
     <div className='texttext'>
    <p>
    Some cats may need to take prescribed medication with food. 
   </p>
    </div>
    </div>
        </div>
    </main>
        
        
    );
}




export default Feeding;