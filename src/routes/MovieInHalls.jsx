import { Card } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Link } from "react-router-dom";

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

const MovieInHalls = () => {
   return (
      <div className="w-full flex flex-col items-start justify-center gap-3 p-2">
         {cinemas.map((c, i) => (
            <Card
               key={i}
               className="p-2 bg-background/40 w-full border-1"
               radius="sm"
            >
               <div className="flex w-full justify-between">
                  <div className="flex flex-col gap-1 items-end">
                     <Link to={`/buy_tickets/cenima/${c.name}/id/details`}>
                        <h3 className="text-sm max-w-[20ch]">
                           {c.name}, {c.location}
                        </h3>
                     </Link>
                     <Chip className="bg-transparent text-xs text-foreground-300">
                        {c.ticket_type}
                     </Chip>
                  </div>

                  <div className="w-full flex gap-2 justify-end items-center flex-wrap">
                     {c.showtimes.map((s) => (
                        <Chip
                           variant="bordered"
                           color="primary"
                           size="sm"
                           className="cursor-pointer text-xs"
                        >
                           {s}
                        </Chip>
                     ))}
                  </div>
               </div>
            </Card>
         ))}
      </div>
   );
};

export default MovieInHalls;
