import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { BiShare, BiStar } from "react-icons/bi";
import { useParams } from "react-router-dom";
import CouraselBody from "../components/scrollCourasel";
import MovieCard from "../components/movieCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MovieInDetail = () => {
   const { id, name } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      navigate(`/explore/movies/${name}/${id}`, { replace: true });
      window.scrollTo(0, 0);
   }, [id, navigate]);

   return (
      <div className="flex w-full h-full flex-col gap-2">
         <div className="relative w-full min-h-80 flex justify-center items-center bg-gradient-to-r from-zinc-700/5 to-accent-800/10 overflow-hidden">
            {/* {image backhround} */}
            <div className="absolute top-0 left-0 opacity-20 w-full items-center flex justify-center h-full blur-sm">
               <Image
                  isBlurred
                  // height={700}
                  isZoomed
                  className="object-cover mt-3 w-full h-full"
                  src="https://as1.ftcdn.net/v2/jpg/08/16/58/92/1000_F_816589242_Gt1JYNB8xlV0j6j0Uzv6hNDrbcTMoEiR.jpg"
               />
            </div>

            <div className="container mx-auto px-5 flex flex-col md:grid md:grid-cols-[auto_1fr_auto] gap-3">
               <div className="flex w-full justify-between relative">
                  <Image
                     isBlurred
                     isZoomed
                     className="md:w-[400px] md:h-[350px] w-full h-full"
                     src="https://as1.ftcdn.net/v2/jpg/08/16/58/92/1000_F_816589242_Gt1JYNB8xlV0j6j0Uzv6hNDrbcTMoEiR.jpg"
                  />
                  <div className="flex md:hidden absolute right-2 top-2 z-10">
                     <Button
                        variant="shadow"
                        color="primary"
                        isIconOnly
                        size="sm"
                     >
                        <BiShare />
                     </Button>
                  </div>
               </div>

               <div className="z-10 py-1 space-y-2">
                  <h1 className="text-xl sm:text-3xl font-medium sm:font-semibold">
                     {name}
                  </h1>

                  <div className="flex items-center gap-2 bg-gradient-to-r from-secondary-50/5 to-accent w-fit p-1 sm:px-3 sm:py-2 rounded-xl">
                     <p className="flex items-center gap-2 text-xs sm:text-sm">
                        <BiStar /> 6/10
                        <span className="text-xs">10k votes</span>
                     </p>
                     <Button size="sm">Rate Now</Button>
                  </div>

                  <div className="flex gap-2 items-center justify-center w-fit">
                     <Chip size="sm">2D</Chip>
                     <Chip size="sm">English/Hindi</Chip>
                  </div>

                  <p className="text-xs sm:text-sm">
                     2hr - Sci/Fci, Drama - UA - 2021
                  </p>

                  <Button variant="shadow" color="secondary" size="xs">
                     Book Tickets
                  </Button>
               </div>

               <div className="hidden md:flex">
                  <Button size="sm" endContent={<BiShare />}>
                     Share
                  </Button>
               </div>
            </div>
         </div>

         <div className="sm:container mx-auto px-4 mb-7">
            <h3 className="text-xl font-semibold py-4">About the movie</h3>

            <p className="text-xs sm:text-sm text-wrap">
               nception is a 2010 science fiction action film written and
               directed by Christopher Nolan, who also produced it with Emma
               Thomas, his wife. The film stars Leonardo DiCaprio as a
               professional thief who steals information by infiltrating the
               subconscious of his targets.
            </p>
         </div>

         {/* {cast} */}
         <div className="sm:container mx-auto px-4 font-semibold overflow-hidden">
            <h3 className="text-xl mb-4">Cast</h3>
            <div className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-1">
               <CouraselBody>
                  {Array.from({ length: 5 }).map((_, i) => (
                     <div
                        key={i}
                        className="flex-shrink-0 w-28 h-28 flex flex-col items-center justify-center rounded-full snap-start"
                     >
                        <Image
                           isZoomed
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzqgIP-l8BphdUIPb4YQMF9PxO4FkrA94Xw&s"
                           className="rounded-full w-20 h-20"
                        />
                        <h4 className="text-xs font-medium">Name</h4>
                     </div>
                  ))}
               </CouraselBody>
            </div>
         </div>

         {/* {crew} */}
         <div className="sm:container mx-auto px-4 font-semibold overflow-hidden mt-9">
            <h3 className="text-xl mb-4">Crew</h3>
            <div className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-3">
               <CouraselBody>
                  {Array.from({ length: 40 }).map((_, i) => (
                     <div
                        key={i}
                        className="flex-shrink-0 w-28 h-28 flex flex-col items-center justify-center rounded-full overflow-hidden snap-start"
                     >
                        <Image
                           isZoomed
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzqgIP-l8BphdUIPb4YQMF9PxO4FkrA94Xw&s"
                           className="rounded-full w-20 h-20"
                        />
                        <h4 className="text-xs">Name</h4>
                     </div>
                  ))}
               </CouraselBody>
            </div>
         </div>

         {/* {you might also like} */}
         <div className="sm:container mx-auto px-4 font-semibold overflow-hidden mt-9">
            <h3 className="text-xl mb-4">You might also like</h3>
            <div className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-3">
               <CouraselBody>
                  {Array.from({ length: 10 }).map((_, i) => (
                     <MovieCard
                        movie={{
                           title: "Hobbit",
                           genre: "Fantasy/Adventure",
                           stars: 6,
                           poster: "",
                           votes: 5000,
                        }}
                        clickHander={() => {
                           navigate("/explore/movies/Hobbit/bhsidhasjdas");
                        }}
                     />
                  ))}
               </CouraselBody>
            </div>
         </div>
      </div>
   );
};

export default MovieInDetail;
