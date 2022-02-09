function AllGameCard({ game }  ) {
    return (
      <div>
          <h1>{game.title} </h1>
          <h2>{game.release_year} </h2>
          <h2>{game.genre} </h2>
          <h1>{console.log(game)}</h1>
      </div>
    );
  }
  export default AllGameCard;