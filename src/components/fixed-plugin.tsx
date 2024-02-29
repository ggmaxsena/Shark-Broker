"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export function FixedPlugin() {
  return (
    <Link href="/auth/register">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50" placeholder={"undefined"}      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Awesome Academy"
          src="/aibicon.svg"
        />{" "}
        Register today and get 20% discount
      </Button>
    </Link>
  );
}
