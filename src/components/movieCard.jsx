import { Image } from "@nextui-org/image";
import { BiStar } from "react-icons/bi";
import { BsImage } from "react-icons/bs";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
   return (
      <Link
         className="bg-background"
         // to={`/buy_tickets/${movie.title}-location/${movie.id}/${Date.now()}`}
         to={`/explore/movies/moviename/movieId`}
      >
         <div className="flex flex-col justify-center items-center min-h-64 min-w-40 cursor-pointer border-1 p-2 rounded-md">
            {movie.poster.length >= 0 ? (
               <Image
                  width={250}
                  height={250}
                  alt={movie.title}
                  src={"/vite.svg"}
               />
            ) : (
               <div className="h-[80%]">
                  <BsImage />
               </div>
            )}

            <div className="w-full flex items-center justify-between">
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

            <div className="w-full">
               <h4 className="font-medium text-start text-wrap">
                  {movie.title}
               </h4>
            </div>
         </div>
      </Link>
   );
};

export default MovieCard;
