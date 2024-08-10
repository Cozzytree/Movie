import { Button } from "@nextui-org/button";
import AppLayout from "../components/AppLayout"
import { FaCheck } from "react-icons/fa";
import { MdOutlineEventSeat } from "react-icons/md";
import { IoReload } from "react-icons/io5";

const OrderConfirmred = () => {
   return <AppLayout >
      <div className="w-full flex flex-col gap-4 md:w-1/2 mx-auto py-5 px-2">

         <h1 className="text-xl sm:text-2xl font-mono uppercase font-bold">Ordered Confirmed</h1>
         <div className="flex gap-2 items-center bg-gradient-to-r from-green-900/40 to-green-900/20 p-2 rounded-xl">
            <FaCheck fill="green" className="w-10 border-1 h-10 rounded-full p-1 border-green-500" />
            <h3 className="text-green-600 font-semibold text-xl">Thank you for you purchase</h3>
         </div>

         <div className="w-full bg-foreground-800/50 rounded-xl p-2 flex flex-col gap-3">
            <h3 className="text-sm font-medium">Movie Name (U/A)</h3>

            <div className="text-foreground-400 text-xs sm:text-[0.8em] flex flex-col space-y-1">
               <p>CinePolis, Guwahati</p>
               <p>{new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: true }).format(Date.now())} | {new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(Date.now())}</p>

               <div className="flex gap-1 items-center">
                  <MdOutlineEventSeat size={40} /> <span className="font-semibold text-lg sm:text-xl text-green-500">PLATINUM A10</span>
               </div>
            </div>
            <div className="w-full flex justify-between items-center">
               <p className="font-medium text-[0.8em] uppercase">Amount paid</p> <span>Rs. 500</span>
            </div>
         </div>
         <Button startContent={<IoReload />} color="success" size="sm" variant="ghost">
            Resend Confitmation
         </Button>

         <div>
            <p className="uppercase text-[0.7em] font-medium text-foreground-400">Payment method</p>
            <p className="font-semibold">UPI</p>
         </div>
         <div>
            <p className="uppercase text-[0.7em] font-medium text-foreground-400">Confirmation no.</p>
            <p className="font-semibold">122324</p>
         </div>
      </div>
   </AppLayout>
}

export default OrderConfirmred
