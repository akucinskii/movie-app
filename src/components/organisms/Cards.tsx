import Card from "../molecules/Card";

const Cards = ({ movies }: any) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 relative gap-4">
      {movies &&
        movies.movies.map((data: any, index: number) => (
          <Card data={data} key={index} />
        ))}
    </div>
  );
};

export default Cards;
