import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";
import {
   Modal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalHeader,
   useDisclosure,
} from "@nextui-org/modal";
import { Ticket } from "lucide-react";
import { useState } from "react";
import screen from "../assets/screen.svg";
import AppLayout from "../components/AppLayout";
import Brand from "../components/brand";
import { ScrollShadow } from "@nextui-org/scroll-shadow";

const days = {
   day: new Date("2024-08-01").getTime(), // August 1, 2024
   time: ["9:00", "11:30", "14:00"],
};

const seatDetails = ["Sold", "Available", "Selected"];

const cinemaSeats = [
   {
      group: "A",
      price: 450,
      maxInRow: 2,
      s: [
         { row: 1, seat: 1, isAvailable: true, id: 1 },
         { row: 1, seat: 2, isAvailable: false, id: 2 },
         { row: 1, seat: 3, isAvailable: true, id: 3 },
         { row: 1, seat: 4, isAvailable: true, id: 4 },
      ],
   },
   {
      group: "B",
      price: 310,
      maxInRow: 4,
      s: [
         { row: 2, seat: 1, isAvailable: true, id: 5 },
         { row: 2, seat: 2, isAvailable: true, id: 6 },
         { row: 2, seat: 3, isAvailable: false, id: 7 },
         { row: 2, seat: 4, isAvailable: true, id: 8 },
      ],
   },
   {
      group: "C",
      price: 250,
      maxInRow: 2,
      s: [
         { row: 3, seat: 1, isAvailable: false, id: 9 },
         { row: 3, seat: 2, isAvailable: true, id: 10 },
         { row: 3, seat: 3, isAvailable: true, id: 11 },
         { row: 3, seat: 4, isAvailable: false, id: 12 },
      ],
   },
   {
      group: "D",
      price: 200,
      maxInRow: 2,
      s: [
         { row: 4, seat: 1, isAvailable: true, id: 13 },
         { row: 4, seat: 2, isAvailable: true, id: 14 },
         { row: 4, seat: 4, isAvailable: true, id: 16 },
         { row: 4, seat: 3, isAvailable: true, id: 15 },
         { row: 4, seat: 5, isAvailable: true, id: "dsdas" },
      ],
   },
   {
      group: "E",
      price: 120,
      maxInRow: 4,
      s: [
         { row: 5, seat: 1, isAvailable: false, id: 17 },
         { row: 5, seat: 2, isAvailable: true, id: 18 },
         { row: 5, seat: 3, isAvailable: true, id: 19 },
         { row: 5, seat: 4, isAvailable: false, id: 20 },
         { row: 5, seat: 5, isAvailable: false, id: 21 },
         { row: 5, seat: 6, isAvailable: false, id: 22 },
         { row: 5, seat: 7, isAvailable: false, id: 23 },
      ],
   },
   {
      group: "F",
      price: 100,
      maxInRow: 4,
      s: [
         { row: 6, seat: 1, isAvailable: false, id: 18 },
         { row: 6, seat: 2, isAvailable: true, id: 19 },
         { row: 6, seat: 3, isAvailable: true, id: 20 },
         { row: 6, seat: 4, isAvailable: false, id: 21 },
         { row: 6, seat: 5, isAvailable: false, id: 22 },
         { row: 6, seat: 6, isAvailable: false, id: 23 },
         { row: 6, seat: 7, isAvailable: false, id: 24 },
      ],
   },
   {
      group: "F",
      price: 100,
      maxInRow: 4,
      s: [
         { row: 7, seat: 1, isAvailable: false, id: 25 },
         { row: 7, seat: 2, isAvailable: true, id: 26 },
         { row: 7, seat: 3, isAvailable: true, id: 27 },
         { row: 7, seat: 4, isAvailable: false, id: 28 },
         { row: 7, seat: 5, isAvailable: false, id: 29 },
         { row: 7, seat: 6, isAvailable: false, id: 30 },
         { row: 7, seat: 7, isAvailable: false, id: 31 },
      ],
   },
];

// {
//    day: new Date("2024-08-02").getTime(), // August 2, 2024
//    time: ["10:00", "12:30", "15:00"],
// },
// {
//    day: new Date("2024-08-03").getTime(), // August 3, 2024
//    time: ["8:30", "13:00", "16:00"],
// },

const SeatSelection = () => {
   const { isOpen, onOpen, onOpenChange } = useDisclosure();
   const [numOfSeats, setNumOfSeats] = useState(1);
   const {
      isOpen: openTickets,
      onOpen: onOpenTickets,
      onOpenChange: tickestChange,
      onClose: ticketsClose,
   } = useDisclosure();
   const [curTime, setCurTime] = useState(days.time[0]);
   const [bookId, setBookId] = useState([]);

   const handleClick = (seatId) => {
      if (seatId.isAvailable) {
         setBookId((prevId) => {
            // Create a new array based on the previous state
            const newBookId = prevId.includes(seatId)
               ? prevId.filter((id) => id !== seatId) // Remove the ID if it exists
               : [...prevId, seatId]; // Add the ID if it doesn't exist

            if (newBookId.length > numOfSeats) {
               newBookId.shift();
            }
            return newBookId;
         });
      }
   };

   return (
      <div className="h-[100dvh] w-full bg-background sm:container flex flex-col">
         <div className="w-full">
            <div className="w-full flex justify-between mt-5">
               <div className="sm:flex items-center gap-2">
                  <h1 className="text-lg font-semibold">DeadPool</h1>
                  <p className="text-xs sm:text-sm">Cenima Hall Name</p>
               </div>

               <Button
                  className="text-xs w-fit"
                  onClick={onOpenTickets}
                  color="warning"
                  variant="solid"
                  size="sm"
               >
                  {numOfSeats} Tickets
               </Button>
               <Modal
                  onClose={ticketsClose}
                  onOpenChange={tickestChange}
                  isOpen={openTickets}
               >
                  <ModalContent className="bg-background">
                     {(ticketsClose) => (
                        <>
                           <ModalHeader>Select Number of Tickets</ModalHeader>
                           <ModalBody className="flex flex-row flex-wrap gap-2">
                              {Array.from({ length: 10 }).map((_, i) => (
                                 <Chip
                                    onClick={() => {
                                       setNumOfSeats(i + 1);
                                    }}
                                    className="cursor-pointer"
                                    variant={`${numOfSeats === i + 1 ? "solid" : "flat"}`}
                                    color="danger"
                                    radius="full"
                                    size="md"
                                    key={i}
                                 >
                                    {i + 1}
                                 </Chip>
                              ))}
                           </ModalBody>
                        </>
                     )}
                  </ModalContent>
               </Modal>
            </div>

            <div className="flex gap-2 justify-center items-center">
               <p className="text-sm text-nowrap">
                  {new Intl.DateTimeFormat("en-GB", {
                     dateStyle: "long",
                  }).format(days.day)}
               </p>

               <select
                  className="px-2 py-1 rounded-lg bg-primary-800 text-white"
                  value={curTime}
                  onChange={(e) => setCurTime(e.target.value)}
               >
                  {days.time.map((t) => (
                     <option
                        key={t}
                        className="transition-all duration-150 bg-primary-500/40"
                        value={t}
                     >
                        {t}
                     </option>
                  ))}
               </select>
            </div>
         </div>

         <ScrollShadow
            hideScrollBar
            className="relative overflow-auto flex flex-col justify-center items-center"
         >
            {cinemaSeats.map((seat, index) => (
               <div key={index} className="flex flex-col px-2">
                  <span className="text-xs sm:text-sm font-normal">
                     Rs. {seat.price}
                  </span>
                  <p className="text-sm">{seat.group}</p>
                  <div className="gap-3 w-full flex justify-center">
                     <ul
                        className={`grid grid-cols-${seat.maxInRow} gap-1 mb-3`}
                     >
                        {seat.s.map((s) => (
                           <li key={s.id} className="">
                              <div className="w-6 h-6 sm:w-9 sm:h-9 border-1"></div>
                              {/* <Chip
                                 color={`${s.isAvailable ? "primary" : "default"}`}
                                 variant={`${bookId.includes(s) ? "shadow" : "flat"}`}
                                 radius="sm"
                                 size="lg"
                                 isDisabled={!s.isAvailable}
                                 onClick={() => handleClick(s)}
                                 className="cursor-pointer border-1 border-lime-600"
                              >
                                 {s.seat}
                              </Chip> */}
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="w-full border-1 mb-3 border-zinc-900/40"></div>
               </div>
            ))}
         </ScrollShadow>

         {/* // <div className="w-full flex flex-col gap-1 items-center py-4"> */}
         {/* <p className="text-xs"> ALl eyes here.</p>
            <Image width={200} height={50} src={screen}></Image> */}
         {/* <div className="w-1/2 rounded-lg h-5 screen relative"></div> */}
         {/* </div> */}

         <div className="flex w-full flex-col gap-5">
            <ul className="flex justify-center w-full items-center gap-4">
               {seatDetails.map((s) => (
                  <li key={s} className="flex gap-2 items-center">
                     <Chip
                        color={`${s === "Sold" ? "default" : "primary"}`}
                        radius="sm"
                        variant={`${s === "Available" || s === "Sold" ? "flat" : "shadow"}`}
                        isDisabled={s === "Sold"}
                     />
                     <span className="text-xs">{s}</span>
                  </li>
               ))}
            </ul>

            <div className="flex w-full justify-center">
               <Button
                  onPress={onOpen}
                  variant="solid"
                  color="success"
                  size="sm"
                  radius="sm"
               >
                  PAY
               </Button>

               <Modal
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  className="bg-background"
               >
                  <ModalContent>
                     {(onClose) => (
                        <>
                           <ModalHeader className="flex flex-col gap-1">
                              Booking Summary
                           </ModalHeader>
                           <ModalBody className="">Ticket Summmary</ModalBody>
                           <ModalFooter>
                              <Button
                                 color="danger"
                                 variant="light"
                                 onPress={onClose}
                              >
                                 Close
                              </Button>
                              <Button color="primary" onPress={onClose}>
                                 Action
                              </Button>
                           </ModalFooter>
                        </>
                     )}
                  </ModalContent>
               </Modal>
            </div>
         </div>
      </div>
   );
};

export default SeatSelection;
