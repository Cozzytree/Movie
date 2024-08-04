import { Input } from "@nextui-org/input";
import AppLayout from "../components/AppLayout";
import screen from "../assets/screen.svg";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import {
   Modal,
   ModalBody,
   ModalContent,
   ModalFooter,
   ModalHeader,
} from "@nextui-org/modal";
import { useDisclosure } from "@nextui-org/modal";
import { Image } from "@nextui-org/image";

const days = {
   day: new Date("2024-08-01").getTime(), // August 1, 2024
   time: ["9:00", "11:30", "14:00"],
};

const seatDetails = ["Sold", "Available", "Selected"];

const cinemaSeats = [
   {
      group: "A",
      s: [
         { row: 1, seat: 1, isAvailable: true, id: 1 },
         { row: 1, seat: 2, isAvailable: false, id: 2 },
         { row: 1, seat: 3, isAvailable: true, id: 3 },
         { row: 1, seat: 4, isAvailable: true, id: 4 },
      ],
   },
   {
      group: "B",
      s: [
         { row: 2, seat: 1, isAvailable: true, id: 5 },
         { row: 2, seat: 2, isAvailable: true, id: 6 },
         { row: 2, seat: 3, isAvailable: false, id: 7 },
         { row: 2, seat: 4, isAvailable: true, id: 8 },
      ],
   },
   {
      group: "C",
      s: [
         { row: 3, seat: 1, isAvailable: false, id: 9 },
         { row: 3, seat: 2, isAvailable: true, id: 10 },
         { row: 3, seat: 3, isAvailable: true, id: 11 },
         { row: 3, seat: 4, isAvailable: false, id: 12 },
      ],
   },
   {
      group: "D",
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
   const [curTime, setCurTime] = useState(days.time[0]);
   // const reversedSeats = [...cinemaSeats].reverse();
   const [bookId, setBookId] = useState([]);

   const handleClick = (seatId) => {
      console.log(seatId);
      if (seatId.isAvailable) {
         setBookId((prevId) => {
            // Create a new array based on the previous state
            const newBookId = prevId.includes(seatId)
               ? prevId.filter((id) => id !== seatId) // Remove the ID if it exists
               : [...prevId, seatId]; // Add the ID if it doesn't exist

            //console.log(newBookId); // Log the new state for debugging
            return newBookId;
         });
      }
   };

   return (
      <AppLayout>
         <div className="flex flex-col sm:container mx-auto h-screen items-center gap-5 py-6 px-4 relative">
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

            <div className="w-full flex flex-col justify-center items-center gap-3">
               {cinemaSeats.map((seat, index) => (
                  <div
                     key={index}
                     className="gap-3 place-items-center grid grid-cols-[auto_1fr_auto]"
                  >
                     <p className="text-sm">{seat.group}</p>
                     <ul className="flex gap-1">
                        {seat.s.map((s) => (
                           <li key={s.id} className="">
                              <button
                                 disabled={!s.isAvailable}
                                 onClick={() => handleClick(s)}
                                 className={`w-5 h-5 sm:w-8 sm:h-8 p-1 flex justify-center items-center text-xs rounded-md ${bookId.includes(s) && "bg-green-500 text-green-950"} ${!s.isAvailable ? "bg-zinc-700 border-none text-zinc-500" : "border-1 border-zinc-600"}`}
                              >
                                 {s.seat}
                              </button>
                           </li>
                        ))}
                     </ul>
                     <p className="text-sm">{seat.group}</p>
                  </div>
               ))}
            </div>

            <div className="w-full flex flex-col gap-1 items-center py-4">
               <p className="text-xs"> ALl eyes here.</p>
               <Image width={200} height={50} src={screen}></Image>
               {/* <div className="w-1/2 rounded-lg h-5 screen relative"></div> */}
            </div>

            <div className="flex w-full flex-col gap-5">
               <ul className="flex justify-center w-full items-center gap-4 sm:flex-row flex-col">
                  {seatDetails.map((s) => (
                     <li
                        key={s}
                        className="grid grid-cols-[auto_1fr] place-content-center gap-2"
                     >
                        <button
                           disabled={s === "Sold"}
                           className={`w-5 h-5 rounded-md ${s === "Selected" && "bg-green-500 text-green-950"} ${s === "Sold" ? "bg-zinc-700 border-none text-zinc-500" : "border-1 border-zinc-600"}`}
                        ></button>
                        <span className="text-xs text-secondary-foreground/60">
                           {s}
                        </span>
                     </li>
                  ))}
               </ul>

               <div className="flex w-full justify-center">
                  <Button
                     onPress={onOpen}
                     variant="solid"
                     color="primary"
                     size="md"
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
                                 Summary
                              </ModalHeader>
                              <ModalBody className="">
                                 Ticket Summmary
                              </ModalBody>
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
      </AppLayout>
   );
};

export default SeatSelection;
