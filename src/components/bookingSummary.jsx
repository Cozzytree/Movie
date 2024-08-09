import { Card, CardBody } from "@nextui-org/card"
import { Chip } from "@nextui-org/chip"

const BookingSummary = () => {
   return <Card className="sm:min-w-80 bg-foreground-800/60">
      <h3 className="text-xl tracking-wider font-mono border-b-1 border-foreground-600 uppercase font-semibold p-3">
         Booking summary
      </h3>
      <CardBody>
         <div className="flex justify-between">
            <span>
               Ticket name (x2)
            </span>
            <span>
               Rs. 500
            </span>
         </div>
         <div className="flex justify-between pl-3 text-sm text-foreground-400">
            <span>
               Convenience free
            </span>
            <span>
               Rs. 50
            </span>
         </div>

         <div className="border-t border-t-foreground-600 py-1 flex justify-between mt-6">
            <span>
               Sub-Total
            </span>
            <span>
               Rs. 50
            </span>
         </div>

         <Chip variant="bordered" color="success" className="mt-3">Ticket-type : M-Type</Chip>

         <Chip className="w-full mt-4" color="success" radius="sm" size="md">Amount Payable : 250</Chip>
      </CardBody>
   </Card>
}

export default BookingSummary
