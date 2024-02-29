"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/image8.svg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card placeholder={"undefined"} className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography placeholder={"undefined"}
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              Empowering the Next Generation of Business Leaders
            </Typography>
            <Typography placeholder={"undefined"} variant="lead" className="mb-10 mt-6 !text-gray-900">
            At Awesome Holdings | School of Business Management, we are committed to providing top-tier education that equips students with the knowledge, skills, and values needed to succeed in {"today's"} dynamic business world. Our programs are designed to cultivate innovative thinking, strategic leadership, and practical business acumen, preparing our graduates to lead with confidence and impact.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button size="lg" placeholder={"undefined"}  color="gray">view all courses</Button>
              <Button placeholder={"undefined"} color="gray" variant="outlined">
                see pricing
              </Button>
            </div>
            <div className=" hidden grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-pinterest.svg"
                alt="pinterest"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-netflix.svg"
                alt="netflix"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-coinbase.svg"
                alt="coinbase"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-google.svg"
                alt="google"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
