import { useState } from "react"
import AppLayout from "../components/AppLayout"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Radio, RadioGroup } from "@nextui-org/radio"
import { ArrowLeft } from "lucide-react"
import { FaAmazonPay, FaGooglePay } from "react-icons/fa6"
import { SiPaytm } from "react-icons/si"
import { Phone } from "lucide-react"
import { useForm } from "react-hook-form"
import BookingSummary from "../components/bookingSummary"

const methods = [
   "UPI",
   "Net Banking",
   "Debit/Credit card"
]

const upiOptions = [
   { label: "Google Pay", icon: <FaGooglePay size={50} /> },
   { label: "Paytm", icon: <SiPaytm size={50} /> },
   { label: "Phone Pe", icon: <Phone size={40} /> },
   { label: "Amazon Pay", icon: <FaAmazonPay size={50} /> }
]

const PaymentPage = () => {
   const [method, setMethod] = useState("UPI")
   const [p_details, setp_details] = useState({ method: method, details: null })

   const handlePayment = (data) => {
      console.log(data)
   }

   return <AppLayout>
      <div className="w-full flex justify-center sm:container mx-auto px-3">
         <div className="w-full flex sm:flex-row flex-col justify-center mt-7 gap-4">
            <div className="flex flex-col gap-4 w-full sm:w-96 bg-foreground-800/50 rounded-xl min-h-[25em]">
               <h3 className="text-xl tracking-wider font-mono border-b-1 border-foreground-600 uppercase font-semibold p-3">Payment options</h3>
               <ul className="flex px-3 gap-3">
                  {methods.map((m) => <li className={`${method === m && "border-b border-foreground-500"} cursor-pointer text-center text-xs sm:text-medium`} onClick={() => setMethod(m)} key={m}>{m}</li>)}
               </ul>
               {method === "UPI" && <UPI handlePayment={handlePayment} />}
               {method === "Debit/Credit card" && <Card setPayment={setp_details} handlePayment={handlePayment} />}
            </div>
            <BookingSummary />
         </div>
      </div>
   </AppLayout>
}

const UPI = ({ handlePayment }) => {
   const [merchant, setMerchant] = useState(null)
   const { handleSubmit, register } = useForm()

   const onSubmit = (data) => {
      handlePayment(data)
   }

   return <div className="p-3 space-y-3">

      {merchant ?
         <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="flex gap-2">
               <ArrowLeft onClick={() => setMerchant(null)} cursor={"pointer"} />
               <h3>Pay using {merchant}</h3>
            </div>
            <Input
               label="upi id"
               variant="bordered"
               size="sm"
               radius="sm"
               id="upi_id"
               {...register("upi_id", { required: true })} />
            <div className="space-x-2">
               <Button type="submit" variant="solid" color="success" size="sm" radius="sm">Verify</Button>
            </div>
         </form>
         :
         <>
            <h3 className="font-mono">Pay using upi</h3>
            <RadioGroup onChange={(e) => setMerchant(e.target.value)}>
               {upiOptions.map((m, i) => <Radio key={i} value={m.label}>
                  <div className="flex gap-3 items-center">
                     {m.icon} {m.label}
                  </div>
               </Radio>)}
            </RadioGroup>
         </>
      }



   </div>
}

const Card = ({ setPayment, handlePayment }) => {

   const { register, handleSubmit } = useForm()

   const pay = (data) => {
      handlePayment(data)
   }

   return <div className="p-3 space-y-2 rounded-xl">
      <h3 className="font-mono">Enter your card details</h3>
      <form onSubmit={handleSubmit(pay)} className="space-y-4">
         <div className="rounded-xl space-y-2">
            <div className="flex gap-2 flex-col">
               <Input label="Card Number" labelPlacement="outside" id="card_number" placeholder="Enter your card Number" type="text" variant="bordered" size="md" radius="sm" {...register("card_number", { required: true, maxLength: 16 })} />
               <Input
                  placeholder="Name on the card"
                  type="text" variant="bordered"
                  size="md"
                  radius="sm"
                  id="holder_name"
                  {...register("holder_name", { required: true })} />
            </div>
            <div className="w-full grid grid-cols-2">
               <div>
                  <span>Expiry</span>
                  <div className="flex gap-1">
                     <Input
                        placeholder="MM"
                        id="month" variant="bordered"
                        type="text" size="md"
                        maxLength={2}
                        radius="sm" className="w-14"
                        {...register("month", {
                           required: true,
                           validate: {
                              checkIfMore: (v) => parseInt(v) <= 12,
                              checkLess: v => parseInt(v) > 0
                           }
                        })} />
                     <Input
                        placeholder="YY"
                        variant="bordered"
                        type="text" size="md"
                        maxLength={2}
                        radius="sm"
                        className="w-14"
                        id="year"
                        {...register("year", {
                           required: true, validate: {
                              regex: v => /^\d+$/.test(+v)
                           }
                        })}
                     />
                  </div>
               </div>

               <div>
                  <span>CVV</span>
                  <Input
                     placeholder="CVV"
                     className="w-14"
                     type="password"
                     maxLength={3}
                     variant="bordered"
                     size="md"
                     radius="sm"
                     id="cvv"
                     {...register(
                        "cvv",
                        { required: true, validate: { regex: v => /^\d+$/.test(+v) }, maxLength: 3, minLength: 3 })} />
               </div>
            </div>
         </div>
         <Button type="submit" radius="sm" size="md" color="success">Pay</Button>
      </form>
   </div>
}

export default PaymentPage
