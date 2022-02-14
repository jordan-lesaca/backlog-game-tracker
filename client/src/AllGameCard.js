function AllGameCard({ game }) {

  return (
    <div>
        <h1>Title: {game.title} </h1>
        <h3>Year Released: {game.year} </h3>
        <h3>Genre: {game.genre} </h3>
        <h4>Posted By: {game.user.username}</h4>
    </div>
  );
}

export default AllGameCard;