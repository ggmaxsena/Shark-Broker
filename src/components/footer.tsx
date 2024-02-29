import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Blog","Team", "Contact"],
  },
  {
    title: "Account",
    items: ["Login", "Register", "Free trial",],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy", "Cookies", ],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 sm:pt-24 pt-56 pb-8 my-28 sm:mst-0">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography placeholder="" variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography placeholder=""
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            <Typography placeholder="" variant="h6" className="mb-3 text-left">
              Subscribe
            </Typography>
            <Typography placeholder="" className="!text-gray-500 font-normal mb-4 text-base">
             subscriobe to our newsletter and get the lates news and views from our prestigious information desk.
            </Typography>
            <Typography placeholder="" variant="small" className="font-medium mb-2 text-left">
              Your Email
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input label="Email" color="gray" />
                <Typography placeholder="" className="font-medium mt-3 !text-sm !text-gray-500 text-left">
                  I agree the{" "}
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Terms and Conditions{" "}
                  </a>
                </Typography>
              </div>
              <Button placeholder="" color="gray" className="w-full lg:w-fit" size="md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <Typography placeholder=""
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} AIB is a subsidiary of {" "}
          <a href="https://www.awesomeholdings.org" target="_blank">
           Awesome Holdings
          </a>{" "}
          .
          <span>All rights reserved</span>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
