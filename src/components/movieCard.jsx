import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { BiStar } from "react-icons/bi";

const MovieCard = ({ clickHander, movie }) => {
  return (
    <Card className="min-h-80 min-w-48 bg-zinc-900 cursor-pointer hover:scale-105 transition-all duration-250">
      <CardBody className="relative" onClick={clickHander}>
        <Image width={100} alt={movie.title} src={movie.poster} />
        <div className="absolute bottom-0 flex justify-start items-center left-0 bg-secondary-900 w-full p-2">
          <p className="flex items-center justify-center">
            <BiStar /> {movie.stars}/10
          </p>
          <p>
            {new Intl.NumberFormat("en-Us", {
              localeMatcher: "best fit",
              compactDisplay: "short",
            }).format(movie.votes)}
          </p>
        </div>
      </CardBody>

      <CardFooter className="flex flex-col gap-2 items-start">
        <h4>{movie.title}</h4>
        <p>{movie.genre}</p>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
