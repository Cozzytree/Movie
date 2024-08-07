import { Chip } from "@nextui-org/chip";
import { Radio, RadioGroup } from "@nextui-org/radio";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuSub,
   DropdownMenuSubContent,
   DropdownMenuSubTrigger,
   DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { CgArrowRight, CgClose } from "react-icons/cg";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import MovieInHalls from "../components/MovieInHalls";
import AppLayout from "../components/AppLayout";
import Nav from "../components/nav";
import CouraselBody from "../components/scrollCourasel";



const millisecondsInOneDay = 24 * 60 * 60 * 1000;

const dates = [];

dates[0] = Date.now();
for (let i = 1; i < 4; i++) {
   dates[i] = dates[i - 1] + millisecondsInOneDay;
}

const cinemas = [
   {
      name: "INOX: Megaplex",
      location: "Inorbit Mall, Malad",
      ticket_type: "M-Ticket",
      showtimes: ["01:30 PM", "04:30 PM", "10:30 PM"],
      options: [
         {
            type: "Food & Beverage",
            cancellation: "Available",
         },
      ],
   },
   {
      name: "Cinepolis",
      location: "Nexus Seawoods, Navi Mumbai",
      ticket_type: "M-Ticket",
      showtimes: ["02:50 PM", "05:40 PM", "08:30 PM", "11:20 PM"],
      options: [
         {
            type: "Food & Beverage",
            cancellation: "Non-cancellable",
         },
      ],
   },
   {
      name: "Cinepolis",
      location: "Viviana Mall, Thane",
      ticket_type: "M-Ticket",
      showtimes: [
         "02:40 PM",
         "05:30 PM",
         "05:35 PM",
         "08:20 PM",
         "08:40 PM",
         "11:10 PM",
      ],
      options: [
         {
            type: "Food & Beverage",
            cancellation: "Non-cancellable",
         },
      ],
   },
   {
      name: "MOVIE TIME: HUB",
      location: "Goregaon (E)",
      ticket_type: "M-Ticket",
      showtimes: ["02:45 PM", "08:15 PM"],
      options: [
         {
            type: "Food & Beverage",
            cancellation: "Available",
         },
      ],
   },
   {
      name: "INOX: R-City",
      location: "Ghatkopar",
      ticket_type: "M-Ticket",
      showtimes: [
         "12:40 PM",
         "01:30 PM",
         "03:30 PM",
         "06:30 PM",
         "07:30 PM",
         "09:30 PM",
         "10:30 PM",
      ],
      options: [
         {
            type: "Food & Beverage",
            cancellation: "Available",
         },
      ],
   },
   {
      name: "Cinepolis",
      location: "Fun Republic Mall, Andheri (W)",
      ticket_type: "M-Ticket",
      showtimes: ["02:55 PM", "05:45 PM", "07:10 PM", "08:35 PM", "11:25 PM"],
      options: [
         {
            type: "Food & Beverage",
            cancellation: "Non-cancellable",
         },
      ],
   },
   {
      name: "PVR ICON",
      location: "Oberoi Mall, Goregaon (E)",
      ticket_type: "M-Ticket",
      showtimes: ["01:45 PM", "04:45 PM", "07:45 PM", "10:45 PM"],
      options: [
         {
            type: "Food & Beverage",
            cancellation: "Available",
         },
      ],
   },
   {
      name: "INOX",
      location: "Metro Mall Junction, Kalyan (E)",
      ticket_type: "M-Ticket",
      showtimes: ["04:45 PM", "10:45 PM"],
      options: [
         {
            type: "Food & Beverage",
            cancellation: "Available",
         },
      ],
   },
   {
      name: "Movietime",
      location: "Cubic Mall: Chembur",
      ticket_type: "M-Ticket",
      showtimes: ["02:30 PM", "08:00 PM"],
      options: [
         {
            type: "Food & Beverage",
            cancellation: "Available",
         },
      ],
   },
   {
      name: "PVR",
      location: "Orion Mall, Panvel",
      ticket_type: "M-Ticket",
      showtimes: ["02:00 PM", "08:00 PM"],
      options: [
         {
            type: "Food & Beverage",
            cancellation: "Available",
         },
      ],
   },
   {
      name: "PVR",
      location: "The Capital Mall, Nalasopara (E)",
      ticket_type: "M-Ticket",
      showtimes: ["05:00 PM", "11:00 PM"],
      options: [
         {
            type: "Food & Beverage",
            cancellation: "Available",
         },
      ],
   },
];

const filters = [
   {
      label: "language",
      filters: ["Hindi 2D"],
   },
   {
      label: "Price Range",
      filters: ["0-100", "100-200", , "200-300", "400-500", "500-600"],
   },
   {
      label: "Show Time",
      filters: ["Morning", "Afternoon", "Evening", "Night"],
   },
];

const BuyTickets = () => {
   const params = useParams();
   const naviagate = useNavigate();
   const [fil, setFil] = useState([]);

   const handleFilter = (value) => {
      const index = fil.findIndex((item) => item.label === value.label);

      if (index === -1) {
         setFil((prev) => [...prev, value]);
      } else {
         setFil((prev) => {
            prev[index] = value;
            return prev;
         });
      }
   };

   const changeTimings = (t) => {
      naviagate(`/buy_tickets/name-location/id/${t}`);
   };

   return (
      <AppLayout>
         <div className="w-full min-h-[100dvh] flex flex-col gap-2 mb-32">
            <Nav />

            <div className="sm:container mx-auto">
               <h1 className="text-xl sm:text-2xl font-semibold mb-2">
                  DeadPool
               </h1>

               <div>
                  <Chip className="bg-transparent text-accent border-1 text-xs">
                     Action
                  </Chip>
               </div>

               {/* {filters} */}
               <div className="flex justify-between w-full items-center">
                  <div className="flex items-center p-3 gap-2 w-44 sm:w-[20em]">
                     <CouraselBody amount={100}>
                        {dates.map((d, i) => (
                           <button
                              onClick={() => changeTimings(d)}
                              className={`${new Date(+params.extra_details).getDay() === new Date(d).getDay() && "bg-secondary-700"} text-xs px-2 text-center border-1 border-secondary-500 p-1 rounded-lg cursor-pointer`}
                           >
                              {new Intl.DateTimeFormat("en-GB", {
                                 dateStyle: "medium",
                              }).format(d)}
                           </button>
                        ))}
                     </CouraselBody>
                  </div>

                  <div className="flex items-center gap-2 p-2 z-10">
                     <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center outline-none focus:outline-0">
                           filters <CgArrowRight />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                           {filters.map((f, i) => (
                              <DropdownMenuSub key={i}>
                                 <DropdownMenuSubTrigger className="cursor-pointer text-xs p-2 rounded-lg outline-none focus:outline-none">
                                    <Chip>{f.label}</Chip>
                                 </DropdownMenuSubTrigger>
                                 <DropdownMenuSubContent className="bg-background">
                                    <div className="bg-background">
                                       <RadioGroup
                                          color="primary"
                                          className="space-y-2 p-2"
                                       >
                                          {f.filters.map((c) => (
                                             <Radio
                                                onClick={() =>
                                                   handleFilter({
                                                      label: f.label,
                                                      value: c,
                                                   })
                                                }
                                                value={c}
                                                key={c}
                                             >
                                                {c}
                                             </Radio>
                                          ))}
                                       </RadioGroup>
                                    </div>
                                 </DropdownMenuSubContent>
                              </DropdownMenuSub>
                           ))}
                        </DropdownMenuContent>
                     </DropdownMenu>
                  </div>
               </div>

               <div className="flex items-center justify-between gap-2">
                  <CouraselBody>
                     {fil.length >= 0 &&

                        fil.map((f) => (
                           <div
                              key={f.label}
                              className="w-fit rounded-lg p-1 flex h-fit items-start gap-2 border-1 border-foreground-200"
                           >
                              <div className="flex flex-col gap-1">
                                 <p className="text-xs sm:text-medium">{f.label}</p>
                                 <span className="text-xs">{f.value}</span>
                              </div>
                              <CgClose
                                 cursor={"pointer"}
                                 onClick={() => {
                                    setFil((p) => {
                                       return p.filter((v) => v.label !== f.label);
                                    });
                                 }}
                              />
                           </div>
                        ))}
                  </CouraselBody>
               </div>

               <main>
                  {/* <Outlet /> */}
                  <MovieInHalls />
               </main>
            </div>
         </div>
      </AppLayout>
   );
};

export default BuyTickets;
