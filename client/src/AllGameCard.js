function AllGameCard({game}  ) {

  return (
    <div>
        <h1>{game.title} </h1>
        <h3>{game.year} </h3>
        <h3>{game.genre} </h3>
    </div>
  );
}
export default AllGameCard;