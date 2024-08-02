import { Input } from "@nextui-org/input";
import AppLayout from "../components/AppLayout";
import { useState } from "react";
import { FaRegSquare } from "react-icons/fa";
import { Button } from "@nextui-org/button";

const days = {
   day: new Date("2024-08-01").getTime(), // August 1, 2024
   time: ["9:00", "11:30", "14:00"],
};

const cinemaSeats = [
   {
      group: "A",
      s: [
         { row: 1, seat: 1, isAvailable: true },
         { row: 1, seat: 2, isAvailable: false },
         { row: 1, seat: 3, isAvailable: true },
         { row: 1, seat: 4, isAvailable: true },
      ],
   },
   {
      group: "B",
      s: [
         { row: 2, seat: 1, isAvailable: true },
         { row: 2, seat: 2, isAvailable: true },
         { row: 2, seat: 3, isAvailable: false },
         { row: 2, seat: 4, isAvailable: true },
      ],
   },
   {
      group: "C",
      s: [
         { row: 3, seat: 1, isAvailable: false },
         { row: 3, seat: 2, isAvailable: true },
         { row: 3, seat: 3, isAvailable: true },
         { row: 3, seat: 4, isAvailable: false },
      ],
   },
   {
      group: "D",
      s: [
         { row: 4, seat: 1, isAvailable: true },
         { row: 4, seat: 2, isAvailable: true },
         { row: 4, seat: 3, isAvailable: true },
         { row: 4, seat: 4, isAvailable: true },
      ],
   },
   {
      group: "E",
      s: [
         { row: 5, seat: 1, isAvailable: false },
         { row: 5, seat: 2, isAvailable: true },
         { row: 5, seat: 3, isAvailable: true },
         { row: 5, seat: 4, isAvailable: false },
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
   const [curTime, setCurTime] = useState(days.time[0]);
   const reversedSeats = [...cinemaSeats].reverse();

   return (
      <AppLayout>
         <div className="flex flex-col sm:container mx-auto h-screen items-center gap-5 py-6 px-4">
            <div className="flex gap-2 justify-center items-center">
               <p className="text-sm text-nowrap">
                  {new Intl.DateTimeFormat("en-GB", {
                     dateStyle: "long",
                  }).format(days.day)}
               </p>

               <select
                  className="px-2 py-1 rounded-lg bg-primary-500/50 text-white"
                  value={curTime}
                  onChange={(e) => setCurTime(e.target.value)}
               >
                  {days.time.map((t) => (
                     <option
                        className="transition-all duration-150 bg-primary-500/40"
                        value={t}
                     >
                        {t}
                     </option>
                  ))}
               </select>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-3">
               {reversedSeats.map((seat, index) => (
                  <div
                     key={index}
                     className="gap-3 place-items-center grid grid-cols-[auto_1fr_auto]"
                  >
                     <p>{seat.group}</p>
                     <ul className="flex gap-1">
                        {seat.s.map((s, i) => (
                           <li key={i}>
                              <Button
                                 isDisabled={s.isAvailable}
                                 size="sm"
                                 color="secondary"
                                 variant={`${s.isAvailable ? "solid" : "bordered"}`}
                                 className="rounded-md"
                              >
                                 {s.seat}
                              </Button>
                           </li>
                        ))}
                     </ul>
                     <p>{seat.group}</p>
                  </div>
               ))}
            </div>
         </div>
      </AppLayout>
   );
};

export default SeatSelection;
