import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { CgArrowRight } from "react-icons/cg";
import { PiArrowLeftFill } from "react-icons/pi";

const CouraselBody = ({ children }) => {
   const scrollRef = useRef();
   const [start, setIsAtStart] = useState(false);
   const [end, setIsAtEnd] = useState(false);

   useEffect(() => {
      const s = scrollRef.current;
      checkPosition(s);
   }, []);

   const checkPosition = (slider) => {
      setIsAtStart(() => (slider.scrollLeft === 0 ? false : true));
      setIsAtEnd(() =>
         slider.scrollWidth - slider.scrollLeft === slider.clientWidth
            ? false
            : true,
      );
   };

   const handleScroll = (direction) => {
      if (!scrollRef.current) return;

      const s = scrollRef.current;
      if (direction === "left")
         s.scrollBy({
            top: 0,
            left: -400,
            behavior: "smooth",
         });
      else
         s.scrollBy({
            top: 0,
            left: 400,
            behavior: "smooth",
         });
      checkPosition(s);
   };

   return (
      <>
         <div className="flex items-center justify-center">
            {start && (
               <PiArrowLeftFill
                  cursor={"pointer"}
                  onClick={() => handleScroll("left")}
               />
            )}
         </div>
         <div
            ref={scrollRef}
            id="carousel-body"
            className="w-full flex gap-3 overflow-hidden snap-x snap-mandatory"
         >
            {children}
         </div>

         <div className="flex items-center justify-center">
            {end && (
               <CgArrowRight
                  cursor={"pointer"}
                  onClick={() => handleScroll("right")}
               />
            )}
         </div>
      </>
   );
};

export default CouraselBody;
