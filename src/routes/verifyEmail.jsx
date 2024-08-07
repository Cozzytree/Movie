import { Button } from "@nextui-org/button"
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import { Input } from "@nextui-org/input"

const VerifyEmail = () => {
   return (<div className="w-full flex justify-center h-full">
      <Card className="bg-foreground-900/50 w-fit min-h-[20rem]" >
         <CardHeader>
            <h3 className="font-semibold text-medium sm:text-lg">
               Verify Email
            </h3>
         </CardHeader>
         <CardBody >
            <Input labelPlacement="outside" radius="sm" type="email" placeholder="Email" label="Enter a valid email address" />
         </CardBody>
         <CardFooter>
            <Button color="success">Verify</Button>
         </CardFooter>
      </Card>
   </div>)
}

export default VerifyEmail
