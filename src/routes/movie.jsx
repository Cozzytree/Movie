import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { BiStar } from "react-icons/bi";
import MovieFilter from "../components/MovieFilter";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/movieCard";

const recommended = [
   {
      id: 1,
      title: "DeadPool",
      stars: 6.9,
      votes: 1500,
      genre: "Action",
      poster: "https://example.com/posters/deadpool.jpg",
   },
   {
      id: 2,
      title: "Inception",
      stars: 8.8,
      votes: 2500,
      genre: "Sci-Fi",
      poster: "https://example.com/posters/inception.jpg",
   },
   {
      id: 3,
      title: "The Matrix",
      stars: 8.7,
      votes: 3000,
      genre: "Action",
      poster: "https://example.com/posters/the_matrix.jpg",
   },
   {
      id: 4,
      title: "The Grand Budapest Hotel",
      stars: 8.1,
      votes: 1800,
      genre: "Comedy",
      poster: "https://example.com/posters/grand_budapest_hotel.jpg",
   },
   {
      id: 5,
      title: "Parasite",
      stars: 8.6,
      votes: 2200,
      genre: "Thriller",
      poster: "https://example.com/posters/parasite.jpg",
   },
];

const MoviePage = () => {
   const navigate = useNavigate();

   const handleNav = (route) => {
      navigate(route);
   };

   return (
      <div className="w-full sm:container mx-auto space-y-4 mb-12 px-4">
         <div className="flex w-full justify-between">
            <h1 className="text-start text-xl">Recommended Movies</h1>

            <MovieFilter />
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
            {recommended.map((movie) => (
               <MovieCard
                  clickHander={() =>
                     handleNav(`/explore/movies/${movie.title}/${movie.id}`)
                  }
                  movie={movie}
               />
            ))}
         </div>
      </div>
   );
};

export default MoviePage;
