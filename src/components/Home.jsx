const Home = () => {
    return ( <> 
    <div >
        <h1> Welcome to My Website</h1>
        
        <div ><p>Would you like to hear a Joke ?</p>
        <button type="button" className="btn btn-primary" onClick={() => {
            fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                document.getElementById('setup').innerHTML = data.setup;
                document.getElementById('punchline').innerHTML = data.punchline;
            })
        }}>Yes</button>
        <p id="setup"></p>
        <p id = "punchline"></p></div>
        
        
        
        <div ><p>Would you like to view my LinkedIn Profile ? </p>
        
        <button type="button" className="btn btn-primary" onClick={() => {
            window.location.href = "https://www.linkedin.com/in/sidharth-prabhakaran-72a021119/";
        }}>Yes</button></div>
    </div>
    <footer>Sidharth Prabhakaran - 300346502</footer>
    
    
    </> );
}
 
export default Home;