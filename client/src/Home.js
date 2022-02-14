function Home({ user }){
    return(
        <div>     
            <h1> Welcome {user.username}! </h1>
            <h2> What games have you been playing? <br/> 
            Go ahead and share your list with your friends. <br/><br/>
            To get started, try going to the <a href="/games">Games</a> tab to view what your friends have been playing.<br/><br/>
            Or, you can get started on your own list by directly going to the <a href="/mygames">"MyGames"</a> link up above.<br/>
            </h2>
        </div>
    )}
export default Home