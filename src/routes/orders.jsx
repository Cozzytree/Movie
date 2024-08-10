import { GiTicket } from "react-icons/gi";

const movieOrders = {
   pastOrders: [
      {
         orderId: 'ORD12345',
         movieTitle: 'Inception',
         showtime: '2023-07-15T19:30:00Z',
         theater: 'Regal Cinemas',
         seats: ['A1', 'A2'],
         totalAmount: 25.00,
         status: 'Completed'
      },
      {
         orderId: 'ORD12346',
         movieTitle: 'The Matrix',
         showtime: '2023-06-10T20:00:00Z',
         theater: 'AMC Theatres',
         seats: ['B3', 'B4', 'B5'],
         totalAmount: 35.00,
         status: 'Completed'
      },
      {
         orderId: 'ORD12347',
         movieTitle: 'Interstellar',
         showtime: '2023-05-25T21:00:00Z',
         theater: 'Cinemark',
         seats: ['C1', 'C2', 'C3', 'C4'],
         totalAmount: 40.00,
         status: 'Completed'
      }
   ],
   upcomingOrders: [
      {
         orderId: 'ORD12348',
         movieTitle: 'Dune',
         showtime: '2024-08-15T18:30:00Z',
         theater: 'Regal Cinemas',
         seats: ['D1', 'D2'],
         totalAmount: 30.00,
         status: 'Upcoming'
      },
      {
         orderId: 'ORD12349',
         movieTitle: 'The Batman',
         showtime: '2024-09-01T20:00:00Z',
         theater: 'AMC Theatres',
         seats: ['E1', 'E2', 'E3'],
         totalAmount: 45.00,
         status: 'Upcoming'
      },
      {
         orderId: 'ORD12350',
         movieTitle: 'Avatar: The Way of Water',
         showtime: '2024-09-20T19:00:00Z',
         theater: 'Cinemark',
         seats: ['F1', 'F2', 'F3'],
         totalAmount: 40.00,
         status: 'Upcoming'
      }
   ]
};

const Orders = () => {
   return <div className="w-full flex-col flex items-center mx-auto px-2">

      <div className="w-full sm:container flex flex-col items-center">
         <ul className="space-y-3 w-full sm:w-1/2">
            {movieOrders.upcomingOrders.map(o => <li key={o.orderId} className="border-b-1 border-foreground-800/20 bg-foreground-800/20 shadow-sm shadow-foreground-800 p-2 rounded-lg text-sm">
               <div className="w-full flex items-center justify-between border-b-1 mb-1">
                  <p className="uppercase font-mono font-medium text-[1em] tracking-wider text-foreground-400">Order Id</p>
                  <p className="font-semibold">{o.orderId}</p>
               </div>

               <div className="w-full flex items-center justify-between">
                  <p>{o.movieTitle}</p>
                  <p className="flex items-center text-[0.9em] gap-1">
                     {o.seats.length} Tickets<GiTicket />
                  </p>
               </div>

               <p className="text-sm sm:text-[0.9em]">Show time : {new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short" }).format(new Date(o.showtime))}</p>
            </li>)}
         </ul>
      </div>

   </div>
}

export default Orders
