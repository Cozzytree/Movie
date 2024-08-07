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
         <div className="w-full h-full gap-2 sm:w-80 sm:h-96 grid grid-rows-[1fr_auto_auto] justify-center items-center min-h-64 min-w-40 cursor-pointer p-2">
            {movie.poster.length >= 0 ? (
               <Image
                  width={300}
                  alt={movie.title}
                  src={"https://imgs.search.brave.com/atvfvw05GFhdH60YdfZIPmqw1GSgsT83jG173uquvco/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzF4L2Rw/M18xc2h0X2RpZ2l0/YWxfc3JnYl9rYV9z/d29yZHNfdjVfcmVz/aXplZC5qcGc"}
                  className="aspect-square object-contain"
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
