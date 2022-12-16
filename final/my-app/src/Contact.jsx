import './Contact.css';



function Contact(){
    return(
        <main id="main" className="main">
        <div className="contactPanel">
          
            <div className='contactHelp'>
            <div className='picture1'>
            <img
                src="http://placekitten.com/100/100?image=2" 
                className="panel__pic" 
                alt="Feline Overlords Logo" /> </div>
                <div className='contactText'>
                    <h2>We want to hear from you!</h2>
            <p>
We are eager for your feedback, thoughts, comments, ideas, and suggestions. So, if you have something you would like to share with us, or want to discuss ways that your business and  we can work together to help animals, please get in touch at example@gmail.com or phone number 8572224582.

Angela Marcus, Co-founder
“Pet-Lover-In-Chief”
</p><br/>
            <p>
            If you have technical questions, or questions about the way we works with Adopters and Guardians, we invite you to visit our Help Center.
            </p>

            </div>
            </div>
            </div>
       </main>
        
        
    );
}




export default Contact;