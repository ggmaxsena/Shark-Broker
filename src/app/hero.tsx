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
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              Encontre o novo lar dos seus sonhos com a Shark Broker.
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
            A SHARK BROKER é a plataforma imobiliária que você procurava para realizar o sonho de vender seu imóvel. Com nossa equipe especializada e ferramentas de última geração, garantimos a máxima visibilidade para o seu anúncio, atraindo compradores qualificados e agilizando o processo de venda.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button color="gray">Encontre seu Lar</Button>
              <Button color="gray" variant="outlined">
                Faça seu Cadastro
              </Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
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
