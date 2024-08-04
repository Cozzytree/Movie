import AppLayout from "../components/AppLayout";
import Nav from "../components/nav";
import CouraselBody from "../components/scrollCourasel";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { CgArrowRight } from "react-icons/cg";
import { Link } from "react-router-dom";

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
  // const [searchParams, setSearchParams] = useSearchParams();
  // useEffect(() => {
  //    window.scrollTo(0, 0);
  // }, [params]);

  const changeTimings = (t) => {
    naviagate(`/buy_tickets/name-location/id/${t}`);
  };

  return (
    <AppLayout>
      <div className="w-full min-h-[100dvh] flex flex-col gap-2 mb-32">
        <Nav />

        <div className="sm:container mx-auto px-3">
          <h1 className="text-xl sm:text-2xl font-semibold mb-2">DeadPool</h1>
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
                <DropdownMenuTrigger>
                  <h4 className="flex justify-between items-center">
                    filters <CgArrowRight />
                  </h4>
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
                            defaultValue={f.filters[0]}
                            className="space-y-2 p-2"
                          >
                            {f.filters.map((c) => (
                              <Radio value={c} key={c}>
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

          <div className="w-full flex flex-col items-start justify-center gap-3 p-2">
            {cinemas.map((c, i) => (
              <Card
                key={i}
                className="p-2 bg-background/40 w-full border-1"
                radius="sm"
              >
                <div className="flex w-full justify-between">
                  <div className="flex flex-col gap-1 items-end">
                    <Link to={`/buy_tickets/cinema/cinemaId`}>
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
        </div>
      </div>
    </AppLayout>
  );
};

export default BuyTickets;
