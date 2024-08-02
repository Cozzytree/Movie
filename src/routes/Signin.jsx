import { Card, CardBody, CardHeader } from "@nextui-org/card";
import AppLayout from "../components/AppLayout";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "react-router-dom";

const SignIn = () => {
   const [email, setEmail] = useState("");
   const [isShow, setShow] = useState(false);
   return (
      <AppLayout>
         <div className="w-full mx-auto min-h-screen flex justify-center items-center px-5">
            <Card
               radius="sm"
               className="bg-transparent md:w-[30rem] px-4 py-2 shadow-secondary-900/45 shadow-md h-[500px]"
            >
               <CardHeader className="flex flex-col items-start">
                  <span>Hello</span>
                  <h1 className="font-bold text-2xl uppercase tracking-wide">
                     Welcome Back
                  </h1>
               </CardHeader>
               <CardBody className="">
                  <form className="flex flex-col gap-6">
                     <div className="flex flex-col gap-2 w-full">
                        <Input
                           size="sm"
                           type="email"
                           label="Email"
                           radius="sm"
                           color="default"
                           variant="flat"
                        />
                        <Input
                           size="sm"
                           type={isShow ? "text" : "password"}
                           label="Password"
                           radius="sm"
                           variant="flat"
                           color="default"
                        />
                        <div className="flex justify-between items-center">
                           <Checkbox
                              onChange={() => setShow((e) => !e)}
                              defaultChecked={isShow}
                              size="sm"
                           >
                              Show Password
                           </Checkbox>
                           <Link
                              to={"#"}
                              className="text-primary-400 hover:underline transition-all duration-150 text-sm"
                           >
                              forgot password?
                           </Link>
                        </div>
                     </div>

                     <div className="flex justify-center items-center w-full">
                        <Button type="submit" color="default">
                           Sign In
                        </Button>
                     </div>
                     <p className="text-sm">
                        Don't have an account?{" "}
                        <Link
                           to={"/sign_up"}
                           className="text-primary-500 hover:underline duration-150 transition-all"
                        >
                           Signup now
                        </Link>
                     </p>
                  </form>
               </CardBody>
            </Card>
         </div>
      </AppLayout>
   );
};

export default SignIn;
