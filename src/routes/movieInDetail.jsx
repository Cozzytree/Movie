import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import { useEffect } from "react";
import { BiShare, BiStar } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import MovieCard from "../components/movieCard";
import CouraselBody from "../components/scrollCourasel";

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
            <div className="absolute pointer-events-none top-0 left-0 opacity-20 w-full items-center flex justify-center h-full blur-sm">
               <Image
                  isBlurred
                  // height={700}
                  className="object-cover mt-3 w-full h-full"
                  src="https://as1.ftcdn.net/v2/jpg/08/16/58/92/1000_F_816589242_Gt1JYNB8xlV0j6j0Uzv6hNDrbcTMoEiR.jpg"
               />
            </div>

            {/* movie details*/}
            <div className="px-1 sm:container mx-auto flex flex-col md:grid md:grid-cols-[auto_1fr_auto] gap-3">
               <div className="flex w-full justify-between relative">
                  <div className="absolute left-0 top-0 z-20">
                     <Button size="sm" variant="flat" startContent={<FaPlay fill="red" size={16} />}>
                        <Link to={"#"} >
                           Watch trailer
                        </Link>
                     </Button>
                  </div>
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

               <div className="z-10 py-1 flex flex-col justify-start space-y-2 sm:space-y-3">
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

                  <p className="text-xs sm:text-sm tracking-wider space-x-2">
                     <span> 2hr - Sci/Fci, </span> <span> Drama - UA - 2021</span>
                  </p>

                  <Button variant="shadow" color="secondary" size="sm" className="w-fit">
                     <Link
                        to={`/buy_tickets/${name}-location/${id}/${Date.now()}`}
                     >
                        Book Tickets
                     </Link>
                  </Button>
               </div>

               <div className="hidden md:flex">
                  <Button size="sm" endContent={<BiShare />}>
                     Share
                  </Button>
               </div>
            </div>
         </div>

         {/* anout the movie */}
         <div className="sm:container mx-auto px-1 mb-7">
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
         <div className="sm:container mx-auto px-1 font-semibold overflow-hidden">
            <h3 className="text-xl mb-4">Cast</h3>
            <div className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-1">
               <CouraselBody>
                  {Array.from({ length: 5 }).map((_, i) => (
                     <div
                        key={i}
                        className="flex-shrink-0 w-fit h-fit py-2 px-3 flex flex-col items-center justify-center rounded-full snap-start"
                     >
                        <Image
                           isZoomed
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzqgIP-l8BphdUIPb4YQMF9PxO4FkrA94Xw&s"
                           className="rounded-full w-14 h-14"
                        />
                        <h4 className="text-xs font-medium">Name</h4>
                     </div>
                  ))}
               </CouraselBody>
            </div>
         </div>

         {/* {crew} */}
         <div className="sm:container mx-auto px-1 font-semibold overflow-hidden mt-9">
            <h3 className="text-xl mb-4">Crew</h3>
            <div className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-3">
               <CouraselBody>
                  {Array.from({ length: 40 }).map((_, i) => (
                     <div
                        key={i}
                        className="flex-shrink-0 w-fit h-fit py-2 px-3 flex flex-col items-center justify-center rounded-full snap-start"
                     >
                        <Image
                           isZoomed
                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQzqgIP-l8BphdUIPb4YQMF9PxO4FkrA94Xw&s"
                           className="rounded-full w-14 h-14"
                        />
                        <h4 className="text-xs">Name</h4>
                     </div>
                  ))}
               </CouraselBody>
            </div>
         </div>

         {/* {you might also like} */}
         <div className="sm:container mx-auto px-1 font-semibold mt-9">
            <h3 className="text-xl mb-4">You might also like</h3>
            <div className="w-full grid grid-cols-[auto_1fr_auto] items-center gap-3">
               <CouraselBody amount={800}>
                  {Array.from({ length: 10 }).map((_, i) => (
                     <MovieCard
                        movie={{
                           title: "Hobbit",
                           genre: "Fantasy/Adventure",
                           stars: 6,
                           poster: "",
                           votes: 5000,
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
