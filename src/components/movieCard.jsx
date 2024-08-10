import { Image } from "@nextui-org/image";
import { ImageOff } from "lucide-react";
import { BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
   return (
      <Link
         className="w-full flex items-center flex-col"
         // to={`/buy_tickets/${movie.title}-location/${movie.id}/${Date.now()}`}
         to={`/explore/movies/moviename/movieId`}
      >
         <div className="w-48 min-h-80 grid grid-rows-[1fr_auto_auto] relative bg-background">
            {movie.poster ? <Image
               radius="sm"
               alt={movie.title}
               src={"https://imgs.search.brave.com/atvfvw05GFhdH60YdfZIPmqw1GSgsT83jG173uquvco/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bWFydmVsLmNvbS9j/b250ZW50LzF4L2Rw/M18xc2h0X2RpZ2l0/YWxfc3JnYl9rYV9z/d29yZHNfdjVfcmVz/aXplZC5qcGc"}
               className="w-full object-contain"
            /> : <ImageOff size={260} />}


            <div className="w-full flex items-center justify-between z-10 p-2 bg-background">
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

            <h4 className="">{movie.title}</h4>

            <p className="text-xs text-foreground-400">
               {movie.languages && movie.languages.map((l, i) => <span key={l}>{l} {i !== movie.languages.length - 1 && ", "} </span>)}
            </p>
         </div>
      </Link>
   );
};

export default MovieCard;
