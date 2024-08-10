import { Button } from "@nextui-org/button"
import { ModalBody, ModalContent, ModalFooter, useDisclosure } from "@nextui-org/modal"
import { Modal, ModalHeader } from "@nextui-org/modal"
import { FaLocationPin } from "react-icons/fa6"
import { GoSignOut } from "react-icons/go"
import { MdPayment } from "react-icons/md"
import { SlArrowRightCircle } from "react-icons/sl"
import { useNavigate } from "react-router-dom"

const settings = [
   { label: "Location", icon: <FaLocationPin />, path: "/select/region" },
   { label: "Saved Payments", path: "#", icon: <MdPayment /> },
   { label: "Sign Out", path: null, handler: () => { console.log("handle function") }, icon: <GoSignOut /> },
]

const AccountSettings = () => {
   const naviagte = useNavigate()
   const { isOpen, onOpen, onOpenChange } = useDisclosure();
   return <div className="w-full sm:container gap-3 flex flex-col mx-auto">

      {settings.map((s) => <button onClick={() => {
         if (s.path == null) {
            onOpen()
         } else {
            naviagte(s.path)
         }
      }} key={s.label} className="w-full flex items-center justify-between border-b-1">
         <p className="flex text-sm items-center gap-1">{s.label} {s.icon}</p>
         <SlArrowRightCircle />

      </button>)}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
         <ModalContent className="bg-background">
            {(onClose) => (
               <>
                  <ModalHeader className="flex flex-col gap-1">Are you sure you want to Sign Out?</ModalHeader>
                  <ModalFooter>
                     <Button color="danger" variant="light" onPress={onClose}>
                        Close
                     </Button>
                     <Button color="primary" onPress={onClose}>
                        Action
                     </Button>
                  </ModalFooter>
               </>
            )}
         </ModalContent>
      </Modal>
   </div>
}

export default AccountSettings
