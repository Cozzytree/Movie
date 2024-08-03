import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { BiStar } from "react-icons/bi";
import MovieFilter from "../components/MovieFilter";

const recommended = [
   {
      title: "DeadPool",
      stars: 6.9,
      votes: 1500,
      genre: "Action",
      poster: "https://example.com/posters/deadpool.jpg",
   },
   {
      title: "Inception",
      stars: 8.8,
      votes: 2500,
      genre: "Sci-Fi",
      poster: "https://example.com/posters/inception.jpg",
   },
   {
      title: "The Matrix",
      stars: 8.7,
      votes: 3000,
      genre: "Action",
      poster: "https://example.com/posters/the_matrix.jpg",
   },
   {
      title: "The Grand Budapest Hotel",
      stars: 8.1,
      votes: 1800,
      genre: "Comedy",
      poster: "https://example.com/posters/grand_budapest_hotel.jpg",
   },
   {
      title: "Parasite",
      stars: 8.6,
      votes: 2200,
      genre: "Thriller",
      poster: "https://example.com/posters/parasite.jpg",
   },
];

const MoviePage = () => {
   return (
      <div className="w-full space-y-4 mb-12 px-4">
         <div className="flex w-full justify-between">
            <h1 className="text-start text-xl">Recommended Movies</h1>

            <MovieFilter />
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
            {recommended.map((movie) => (
               <Card className="min-h-80 bg-zinc-900 hover:translate-y-2 hover:z-50 hover:scale-[1.03]">
                  <CardBody className="relative">
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
            ))}
         </div>
      </div>
   );
};

export default MoviePage;
