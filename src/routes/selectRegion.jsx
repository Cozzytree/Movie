import { Input } from "@nextui-org/input"
import { Spinner } from "@nextui-org/spinner"
import { useState } from "react"
import { BiCompass, BiSearch } from "react-icons/bi"
import { CgClose } from "react-icons/cg"
import { useNavigate } from "react-router-dom"
import AppLayout from "../components/AppLayout"

const SelectRegionPage = () => {
   const [isGettingLoc, setLoa] = useState(false)
   const [pos, setPos] = useState(null)
   const navigate = useNavigate()
   const getLocation = () => {
      setLoa(true)
      navigator.geolocation.getCurrentPosition((position) => {
         setPos(position)
         setLoa(false)
      }, () => {
         setLoa(false)
      })
   };

   return <AppLayout >
      <div className="w-full relative sm:container mx-auto py-3 space-y-3">
         {isGettingLoc && <Spinner size="sm" className="absolute top-1/2 left-1/2" />}

         <CgClose onClick={() => {
            navigate(-1)
         }} className="absolute left-0 top-4" />
         <h1 className="text-center">Current Region</h1>

         <Input label="Search for you City" size="sm" variant="bordered" radius="md" startContent={<BiSearch />} />

         <button onClick={getLocation} className="flex items-center gap-1 text-sm text-secondary-400"><BiCompass /> get my location</button>
      </div>
   </AppLayout>
}

export default SelectRegionPage
