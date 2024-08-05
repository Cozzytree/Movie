import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { BiStar } from "react-icons/bi";
import { BsImage } from "react-icons/bs";

const MovieCard = ({ clickHander, movie }) => {
   return (
      <Card className="min-h-80 min-w-48 bg-zinc-900 cursor-pointer">
         <CardBody className="relative" onClick={clickHander}>
            {movie.poster ? (
               <Image width={100} alt={movie.title} src={movie.poster} />
            ) : (
               <div className="">
                  <BsImage />
               </div>
            )}

            <div className="absolute bottom-0 flex flex-col justify-start items-start left-0 bg-secondary-900 w-full p-2">
               <p className="flex text-xs gap-3 items-center justify-center">
                  <BiStar /> {movie.stars} / 10
               </p>
               <p className="text-xs font-normal">
                  {new Intl.NumberFormat("en-Us", {
                     localeMatcher: "best fit",
                     compactDisplay: "short",
                  }).format(movie.votes)}{" "}
                  votes
               </p>
            </div>
         </CardBody>

         <CardFooter className="flex flex-col gap-2 items-start">
            <h4 className="text-lg">{movie.title}</h4>
            <p className="text-xs font-normal text-foreground-200">
               {movie.genre}
            </p>
         </CardFooter>
      </Card>
   );
};

export default MovieCard;
