import { Button } from "@nextui-org/button";
import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   NavbarMenu,
   NavbarMenuItem,
   NavbarMenuToggle,
} from "@nextui-org/navbar";
import { useState } from "react";
import { BsList } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./sheet";

const routes = [
   {
      r: "/explore/movies",
      label: "Movies",
   },
   {
      r: "#",
      label: "Shows",
   },
];

const userSettimgs = [
   { label: "Purchase History", icon: <FaHistory /> },
   { label: "Orders", icon: <BsList /> },
];

const Nav = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const path = useLocation();

   return (
      <Navbar
         className="z-50"
         isBordered
         isMenuOpen={isMenuOpen}
         onMenuOpenChange={setIsMenuOpen}
      >
         <NavbarMenuToggle
            className="sm:hidden w-8"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
         />

         <NavbarContent className="hidden sm:flex" justify="center">
            <NavbarBrand>
               <p className="font-bold text-inherit">BRAND</p>
            </NavbarBrand>
         </NavbarContent>

         <NavbarContent className=" flex sm:hidden" justify="start">
            <NavbarBrand>
               <p className="font-bold text-inherit">BRAND</p>
            </NavbarBrand>
         </NavbarContent>

         <NavbarContent className="hidden sm:flex w-full gap-4" justify="start">
            {routes.map((r) => (
               <NavbarItem
                  key={r.label}
                  className={`${path.pathname === r.r && "border-b border-primary-500 text-primary-400"}`}
               >
                  <Link to={r.r}>{r.label}</Link>
               </NavbarItem>
            ))}
         </NavbarContent>

         <Sheet>
            <SheetTrigger>
               <NavbarContent justify="center">User</NavbarContent>
            </SheetTrigger>
            <SheetContent side="right">
               <SheetTitle className="mb-5 flex flex-col">
                  <Link to={"/my_profile"}>Username</Link>
                  <Link
                     to={"/my_profile/edit"}
                     className="text-xs font-normal text-foreground-200"
                  >
                     edit profile
                  </Link>
               </SheetTitle>

               <ul>
                  {userSettimgs.map((u) => (
                     <li key={u.label} className="space-y-1">
                        <Button
                           className="border-0 w-full grid grid-cols-[1fr_auto]"
                           variant="light"
                           startContent={u.icon}
                           color=""
                        >
                           {u.label}
                        </Button>
                     </li>
                  ))}
               </ul>
            </SheetContent>
         </Sheet>

         <NavbarMenu className="z-50">
            {routes.map((r) => (
               <NavbarMenuItem
                  key={r.label}
                  className={`${path.pathname === r.r && "border-b border-primary-500 text-primary-400"}`}
               >
                  <Link to={r.r}>{r.label}</Link>
               </NavbarMenuItem>
            ))}
         </NavbarMenu>
      </Navbar>
   );
};

export default Nav;
