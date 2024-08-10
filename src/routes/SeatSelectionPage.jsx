import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import {
   Modal,
   ModalBody,
   ModalContent,
   ModalHeader,
   useDisclosure,
} from "@nextui-org/modal";
import { useState } from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { useNavigate } from "react-router-dom";
import { Table, TableCell, TableRow } from "../components/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

const days = {
   day: new Date("2024-08-01").getTime(), // August 1, 2024
   time: ["9:00", "11:30", "14:00"],
};

const seatDetails = ["Sold", "Available", "Selected"];

const cinemaSeats = [
   {
      group: "A",
      price: 450,
      maxInRow: 8,
      rows: [
         [
            { row: 1, seat: 1, isAvailable: true, id: 1 },
            { row: 1, seat: 2, isAvailable: false, id: 2 },
            { row: 1, seat: 3, isAvailable: true, id: 3 },
            { row: 1, seat: 4, isAvailable: true, id: 4 },
            { row: 1, seat: 5, isAvailable: true, id: "1" },
            {},
            {},
            {},
            { row: 1, seat: 9, isAvailable: true, id: "1" },
            { row: 1, seat: 10, isAvailable: false, id: "2" },
            { row: 1, seat: 11, isAvailable: true, id: "3" },
            { row: 1, seat: 12, isAvailable: true, id: "4" },
         ]
      ],
   },
   {
      group: "B",
      price: 310,
      maxInRow: 4,
      rows: [
         [
            { row: 2, seat: 1, isAvailable: true, id: 5 },
            { row: 2, seat: 2, isAvailable: true, id: 6 },
            { row: 2, seat: 3, isAvailable: false, id: 7 },
            { row: 2, seat: 4, isAvailable: true, id: 8 }
         ],
      ],
   },
   {
      group: "C",
      price: 250,
      maxInRow: 4,
      rows: [
         [
            { row: 3, seat: 1, isAvailable: false, id: 9 },
            { row: 3, seat: 2, isAvailable: true, id: 10 },
            { row: 3, seat: 3, isAvailable: true, id: 11 },
            { row: 3, seat: 4, isAvailable: false, id: 12 }
         ],
      ],
   },
   {
      group: "D",
      price: 200,
      maxInRow: 4,
      rows: [
         [
            { row: 4, seat: 1, isAvailable: true, id: 13 },
            { row: 4, seat: 2, isAvailable: true, id: 14 },
            { row: 4, seat: 4, isAvailable: true, id: 16 },
            { row: 4, seat: 3, isAvailable: true, id: 15 },
            { row: 4, seat: 5, isAvailable: true, id: 16 }
         ],
      ],
   },
   {
      group: "E",
      price: 120,
      maxInRow: 4,
      rows: [
         [
            { row: 5, seat: 1, isAvailable: false, id: 17 },
            { row: 5, seat: 2, isAvailable: true, id: 18 },
            { row: 5, seat: 3, isAvailable: true, id: 19 },
            { row: 5, seat: 4, isAvailable: false, id: 20 },
            { row: 5, seat: 5, isAvailable: false, id: 21 },
            { row: 5, seat: 6, isAvailable: false, id: 22 },
            { row: 5, seat: 7, isAvailable: false, id: 23 }
         ],
      ],
   },
   {
      group: "F",
      price: 100,
      maxInRow: 4,
      rows: [
         [
            { row: 6, seat: 1, isAvailable: false, id: 18 },
            { row: 6, seat: 2, isAvailable: true, id: 19 },
            { row: 6, seat: 3, isAvailable: true, id: 20 },
            { row: 6, seat: 4, isAvailable: false, id: 21 },
            { row: 6, seat: 5, isAvailable: false, id: 22 },
            { row: 6, seat: 6, isAvailable: false, id: 23 },
            { row: 6, seat: 7, isAvailable: false, id: 24 }
         ],
      ],
   },
   {
      group: "F",
      price: 100,
      maxInRow: 5,
      rows: [
         [
            { row: 7, seat: 1, isAvailable: false, id: 25 },
            { row: 7, seat: 2, isAvailable: true, id: 26 },
            { row: 7, seat: 3, isAvailable: true, id: 27 },
            { row: 7, seat: 4, isAvailable: false, id: 28 },
            { row: 7, seat: 5, isAvailable: false, id: 29 },
            { row: 7, seat: 6, isAvailable: false, id: 30 },
            { row: 7, seat: 7, isAvailable: false, id: 31 }
         ],
      ],
   },
   {
      group: "G",
      price: 450,
      maxInRow: 8,
      rows: [
         [
            { row: 1, seat: 1, isAvailable: true, id: 1 },
            { row: 1, seat: 2, isAvailable: false, id: 2 },
            { row: 1, seat: 3, isAvailable: true, id: 3 },
            { row: 1, seat: 4, isAvailable: true, id: 4 },
            { row: 1, seat: 5, isAvailable: true, id: "1" },
            { row: 1, seat: 6, isAvailable: false, id: "2" },
         ]
      ],
   },
   {
      group: "H",
      price: 450,
      maxInRow: 8,
      rows: [
         [
            { row: 1, seat: 1, isAvailable: true, id: 1 },
            { row: 1, seat: 2, isAvailable: false, id: 2 },
            { row: 1, seat: 3, isAvailable: true, id: 3 },
            { row: 1, seat: 4, isAvailable: true, id: 4 },
            { row: 1, seat: 5, isAvailable: true, id: "1" },
            { row: 1, seat: 6, isAvailable: false, id: "2" },
            { row: 1, seat: 7, isAvailable: true, id: "3" },
            { row: 1, seat: 8, isAvailable: true, id: "4" },
         ]
      ],
   },
   {
      group: "I",
      price: 450,
      maxInRow: 8,
      rows: [
         [
            { row: 1, seat: 1, isAvailable: true, id: 1 },
            { row: 1, seat: 2, isAvailable: false, id: 2 },
            { row: 1, seat: 3, isAvailable: true, id: 3 },
            { row: 1, seat: 4, isAvailable: true, id: 4 },
            { row: 1, seat: 5, isAvailable: true, id: "1" },
            { row: 1, seat: 6, isAvailable: false, id: "2" },
            { row: 1, seat: 7, isAvailable: true, id: "3" },
            { row: 1, seat: 8, isAvailable: true, id: "4" },
         ]
      ],
   },
   {
      group: "J",
      price: 450,
      maxInRow: 8,
      rows: [
         [
            { row: 1, seat: 1, isAvailable: true, id: 1 },
            { row: 1, seat: 2, isAvailable: false, id: 2 },
            { row: 1, seat: 3, isAvailable: true, id: 3 },
            { row: 1, seat: 4, isAvailable: true, id: 4 },
            { row: 1, seat: 5, isAvailable: true, id: "1" },
            { row: 1, seat: 6, isAvailable: false, id: "2" },
            { row: 1, seat: 7, isAvailable: true, id: "3" },
            { row: 1, seat: 8, isAvailable: true, id: "4" },
         ]
      ],
   }, {
      group: "K",
      price: 450,
      maxInRow: 8,
      rows: [
         [
            { row: 1, seat: 1, isAvailable: true, id: 1 },
            { row: 1, seat: 2, isAvailable: false, id: 2 },
            { row: 1, seat: 3, isAvailable: true, id: 3 },
            {},
            {},
            {},
            { row: 1, seat: 4, isAvailable: true, id: 4 },
            { row: 1, seat: 5, isAvailable: true, id: "1" },
            { row: 1, seat: 6, isAvailable: false, id: "2" },
            { row: 1, seat: 7, isAvailable: true, id: "3" },
            { row: 1, seat: 8, isAvailable: true, id: "4" },
         ]
      ],
   },
];


const SeatSelection = () => {
   const { isOpen, onOpen, onOpenChange } = useDisclosure();
   const navigate = useNavigate();
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
      <div className="h-screen w-full bg-background grid grid-rows-[auto_1fr_auto] gap-4 overflow-x-hidden">
         <div className="w-full sm:container px-2">
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

               <DropdownMenu className="bg-black">
                  <DropdownMenuTrigger className="bg-foreground-800/50 px-1 rounded-xl cursor-pointer min-w-14 tracking-wide">{curTime} </ DropdownMenuTrigger >
                  <DropdownMenuContent className="bg-background border-1 rounded-xl overflow-hidden">
                     {days.time.map((t, i) => <DropdownMenuItem className={`${t === curTime && "bg-foreground-700"} cursor-pointer border-b-1 px-2`} onClick={() => setCurTime(t)} key={i}>{t}</DropdownMenuItem>)}
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </div>

         <div className="grid grid-rows[1fr_auto] place-items-center px-3">
            <ScrollShadow hideScrollBar className="h-full w-full sm:w-[720px] overflow-x-auto overflow-y-auto">
               <Table className="w-full">
                  {cinemaSeats.map((cenima, i) => <TableRow className="grid grid-cols-[auto_1fr] items-center p-0 h-10" key={i}>
                     <TableCell className="w-10" key={i}>
                        {cenima.group}
                     </TableCell>

                     <TableCell className="">
                        {cenima.rows.map((r, i) => <div className="flex gap-1" key={i}>
                           {r.map((row, index) => <button onClick={() => handleClick(row)} disabled={row.seat ? false : true} className={`${row.seat && "flex justify-center cursor-pointer items-center rounded-lg  border-1 transition-all duration-200"} ${!row.isAvailable && "bg-zinc-900 opacity-40"}  w-7 h-7 sm:w-9 sm:h-9 ${bookId.includes(row) && "bg-green-400 text-green-900"}`} key={index}>
                              {row.seat}
                           </button>)}
                        </div>)}
                     </TableCell>
                  </TableRow>)}
               </Table>
            </ScrollShadow>
            <p className="text-xs sm:text-medium">All eyes in here</p>
         </div>

         <div className="flex w-full flex-col gap-5 pb-2">
            <ul className="flex justify-center w-full items-center gap-4">
               {seatDetails.map((s) => (
                  <li key={s} className="flex gap-2 items-center">
                     <button
                        className={`${s === "Sold" && "bg-zinc-950"} ${s === "Selected" && "bg-green-500"} rounded-md sm:w-7 sm:h-7 w-6 h-6 border-1 border-foreground-400/50`}
                     ></button>
                     <span className="text-xs">{s}</span>
                  </li>
               ))}
            </ul>

            <div className="flex w-full justify-center">
               {bookId.length === numOfSeats && (
                  <Button
                     onClick={() => {
                        navigate(`/order_summary/movieId/hallId`, {
                           replace: true,
                        });
                     }}
                     variant="solid"
                     color="success"
                     size="sm"
                     radius="sm"
                  >
                     PAY
                  </Button>
               )}

            </div>
         </div>
      </div >
   );
};

export default SeatSelection;
