import { Outlet } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { Input } from "@nextui-org/input";
import { IoSearchCircleOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   NavbarMenu,
   NavbarMenuItem,
   NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import {
   Sheet,
   SheetContent,
   SheetDescription,
   SheetTitle,
   SheetTrigger,
} from "../components/sheet";
import { FaHistory } from "react-icons/fa";
import { GrOrderedList } from "react-icons/gr";
import { BsList } from "react-icons/bs";
import { Button } from "@nextui-org/button";

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

const ExplorePage = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const path = useLocation();
   return (
      <AppLayout>
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

            <NavbarContent className="pr-3 hidden sm:flex" justify="center">
               <NavbarBrand>
                  <p className="font-bold text-inherit">BRAND</p>
               </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="pr-3 flex sm:hidden" justify="start">
               <NavbarBrand>
                  <p className="font-bold text-inherit">BRAND</p>
               </NavbarBrand>
            </NavbarContent>

            <NavbarContent
               className="hidden sm:flex w-full gap-4"
               justify="start"
            >
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
                  <SheetTitle className="mb-5">Username</SheetTitle>

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

         <div className="w-full px-5 flex flex-colI justify-center items-center">
            <Navbar className=" w-full">
               <NavbarContent className="w-full">
                  {/* <NavbarItem>User</NavbarItem> */}
                  <NavbarItem className="w-full">
                     <div className="relative w-full flex gap-1 items-center border-1 border-secondary-foreground/10 py-2 px-3 rounded-xl">
                        <BiSearch />
                        <input
                           placeholder="search movies"
                           className="outline-none w-full focus:ring-0 bg-transparent"
                           type="text"
                        />
                     </div>
                  </NavbarItem>
               </NavbarContent>
            </Navbar>
         </div>

         <main className="w-full flex flex-col mx-auto mt-4">
            <Outlet />
         </main>

         <footer className="mt-9 mb-10">I am Footer</footer>
      </AppLayout>
   );
};

export default ExplorePage;
