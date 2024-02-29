import React from "react";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  XMarkIcon,
  Bars3Icon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Courses",
    icon: RectangleStackIcon,
  },
  {
    name: "Support",
    icon: BiSupport,
    href: "/#support"
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: Readonly<NavItemProps>) {
  return (
    <li>
      <Typography placeholder={''}
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <div className="sm:px-10  sticky bg-gray-900 sm:bg-transparent   sm:top-8 top-0 z-50">
      <div className="mx-auto container">
        <MTNavbar placeholder={''}
        color={"white"}
          className="z-50 mt-0 hidden sm:block rounded-none sm:rounded-xl relative border-0 pr-3 pyo-3 pl-6"
        >
          <div className="flex relative items-center  justify-between">
           <div className="sm:rounded-full sm:bg-gray-50 flex justify-center items-center w-28 h-28 absolute -left-10 p- ">
           <Image  width={80} className="w-full text-gray-800 " height={80} src="/aib.svg" alt="Logo" />
            </div> 
            <Typography placeholder={"undefined"} color="blue-gray" className="text-lg pl-20 hidden sm:block font-bold">
              Awesome Institute  of Business
            </Typography>
            {process.env.RELEASE==='prod' &&
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem  key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  {name}
                </NavItem>
              ))}
            </ul>}
            {
              process.env.RELEASE==='prod' ?  <div className="hidden items-center gap-4 lg:flex">
              <Button placeholder="undefined" variant="text">
                <Link href={"/auth"}>Login </Link>
              </Button>
              <Link
                href="/auth/register"
              >
                <Button placeholder="undefined" color="gray">Register</Button>
              </Link>
            </div>:
            <div className="hidden items-center gap-4 lg:flex">
             <Link
             href="/waiting-list"
           >
             <Button placeholder="undefined" color="gray">Pre-register </Button>
           </Link>
           </div>
            }
           
            <IconButton placeholder="undefined"
              variant="text"
              color="white"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <Collapse open={open}>
            {process.env.RELEASE==='prod' ?
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
                ))}
              </ul>
              <div className="mt-6 mb-4 flex items-center gap-4">
                <Button  placeholder={"udefi"} variant="text">Log in</Button>
                <Link
                  href="/auth"
                >
                  <Button placeholder={"udefi"}  color="gray">Register</Button>
                </Link>
              </div>
            </div>:
            <div className="mt-6 mb-4 flex items-center gap-4">
            <Link
              href="/waiting-list"
            >
              <Button placeholder={"udefi"}  color="gray">Pre-register</Button>
            </Link>
          </div>
            }
          </Collapse>
        </MTNavbar>

        <MTNavbar placeholder={''}
        color={"transparent"}
          className="z-50 mt-0  sm:hidden rounded-none sm:rounded-xl relative border-0 pr-3 pyo-3 pl-6"
        >
          <div className="flex relative items-center  justify-between">
           <div className="sm:rounded-full sm:bg-gray-50 flex justify-center items-center w-28 h-28 absolute -left-10 p- ">
           <Image  width={80} className="w-full text-gray-800 " height={80} src="/aib.svg" alt="Logo" />
            </div> 
            <Typography placeholder={"undefined"} color="blue-gray" className="text-lg pl-20 hidden sm:block font-bold">
              Awesome Institute  of Business
            </Typography>
            {process.env.RELEASE==='prod' &&
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              {NAV_MENU.map(({ name, icon: Icon, href }) => (
                <NavItem  key={name} href={href}>
                  <Icon className="h-5 w-5" />
                  {name}
                </NavItem>
              ))}
            </ul>}
            {
              process.env.RELEASE==='prod' ?  <div className="hidden items-center gap-4 lg:flex">
              <Button placeholder="undefined" variant="text">
                <Link href={"/auth"}>Login </Link>
              </Button>
              <Link
                href="/auth/register"
              >
                <Button placeholder="undefined" color="gray">Register</Button>
              </Link>
            </div>:
            <div className="hidden items-center gap-4 lg:flex">
             <Link
             href="/waiting-list"
           >
             <Button placeholder="undefined" color="gray">Pre-register </Button>
           </Link>
           </div>
            }
           
            <IconButton placeholder="undefined"
              variant="text"
              color="white"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <Collapse open={open}>
            {process.env.RELEASE==='prod' ?
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4">
                {NAV_MENU.map(({ name, icon: Icon, href }) => (
                  <NavItem key={name} href={href}>
                    <Icon className="h-5 w-5" />
                    {name}
                  </NavItem>
                ))}
              </ul>
              <div className="mt-6 mb-4 flex items-center gap-4">
                <Button  placeholder={"udefi"} variant="text">Log in</Button>
                <Link
                  href="/auth"
                >
                  <Button placeholder={"udefi"}  color="gray">Register</Button>
                </Link>
              </div>
            </div>:
            <div className="mt-6 mb-4 flex items-center gap-4">
            <Link
              href="/waiting-list"
            >
              <Button placeholder={"udefi"}  color="gray">Pre-register</Button>
            </Link>
          </div>
            }
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
