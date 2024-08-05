import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { BiSearch, BiStar } from "react-icons/bi";
import { GiTomato } from "react-icons/gi";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import lines from "../assets/lines.svg";
import AppLayout from "../components/AppLayout";
import Brand from "../components/brand";

const LandingPage = () => {
   return (
      <AppLayout>
         <div className="w-full flex flex-col py-2 px-10 gap-4 mb-20">
            <div className="fixed w-screen h-[100dvh] top-0 left-0">
               <img src={lines} className="h-full w-full object-cover" />
            </div>

            <div className="w-full flex justify-between z-10">
               <div className="flex items-center gap-1">
                  <Link to={"/"} unstable_viewTransition>
                     <Brand />
                  </Link>
               </div>
               <Button variant="shadow" color="primary" radius="sm" size="sm">
                  <Link to={"/sign_in"}>SIGN IN</Link>
               </Button>
            </div>

            <div className="w-full flex flex-col gap-3 justify-center items-center mt-24 z-10">
               <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold font-mono text-center">
                  GET <span className="text-secondary-500">MOVIE</span> TICKETS
               </h1>
               <p className="font-sans text-center">
                  Buy movie tickets in advance, find movie items, watch
                  trailers,
                  <br />
                  read movie reviews and much more{" "}
               </p>
               <Link to={"/sign_up"}>
                  <Button
                     className="w-fit font-semibold"
                     endContent={<HiArrowSmRight />}
                  >
                     Get Started
                  </Button>
               </Link>
            </div>

            <div className="w-full flex justify-center">
               <Input
                  startContent={<BiSearch />}
                  className="w-1/2"
                  size="md"
                  type="text"
                  placeholder="What are you looking for"
                  radius="full"
                  color="primary"
                  variant="bordered"
               />
            </div>

            <div className="z-10 sm:container mx-auto flex flex-col gap-4 font-semibold">
               <h1 className="font-sans text-md">Top Movies</h1>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {Array.from({ length: 4 }).map((_, i) => (
                     <Link
                        key={i}
                        to={"/explore/movies/IronMan/1"}
                        className=""
                     >
                        <Card
                           radius="sm"
                           className="hover:scale-105 cursor-pointer bg-secondary-900 h-fit border-2 hover:border-secondary-200"
                        >
                           <CardBody>
                              <img
                                 src="/ironman.webp"
                                 className="w-full h-full object-scale-down aspect-square"
                                 loading="lazy"
                              />
                           </CardBody>
                           <CardFooter className="flex flex-col items-start">
                              <h3 className="font-sans">Iron man</h3>
                              <div>
                                 <Button
                                    isIconOnly
                                    aria-label="Tomato"
                                    size="sm"
                                    color="light"
                                 >
                                    <GiTomato fill="red" size={30} />
                                 </Button>
                                 <Button
                                    isIconOnly
                                    aria-label="Tomato"
                                    size="sm"
                                    color="light"
                                 >
                                    <BiStar fill="yellow" size={30} />
                                 </Button>
                              </div>
                           </CardFooter>
                        </Card>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </AppLayout>
   );
};

export default LandingPage;
