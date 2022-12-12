function NavBar ({setPage}) {
    // function onNav( event, target) {
    //    event.preventDefault();
    //    setPage(target);
    // }
    return(
        <div>
            <a 
            href="/ASDF"
            onClick={(e) =>onNav(e, 'Home')}
            >Home</a>
            <a 
            href="/ASDF"
            onClick={(e) =>onNav(e, 'Food')}
            >Food</a>
           
        </div>
    );
}

export default NavBar; 
//unuseful