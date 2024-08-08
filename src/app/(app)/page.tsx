"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react"; // Assuming you have an icon for messages
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import messages from "@/message.json";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PinContainer } from "@/components/ui/3d-pin";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { LinkPreview } from "@/components/ui/link-preview";
import { Meteors } from "@/components/ui/meteors";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null on the first render to avoid mismatch
  }

  const words = `True Messages - Where your identity remains a secret.`;

  return (
    <>
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12 bg-gray-800 text-white">
        <FollowerPointerCard
          title={
            <TitleComponent
              title={blogContent.author}
              avatar={blogContent.authorAvatar}
            />
          }
        >
          <section className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold">
              Dive into the World of Anonymous{" "}
              <LinkPreview
                url="https://x.com/BroCode1508/"
                imageSrc="/images/ss.png"
                isStatic
                className="font-bold text-white"
              >
                Message
              </LinkPreview>{" "}
            </h1>
            <p className="mt-3 md:mt-4 text-base md:text-lg">
              <TextGenerateEffect words={words} />;
            </p>
            <Meteors number={50} />
          </section>

          {/* Carousel for Messages */}
          <PinContainer
            title="x.com/BroCode1508"
            href="https://x.com/BroCode1508"
          >
            <Carousel
              plugins={[Autoplay({ delay: 2000 })]}
              className="w-full max-w-lg md:max-w-xl"
            >
              <CarouselContent>
                {messages.map((message, index) => (
                  <CarouselItem key={index} className="p-4">
                    <Card>
                      <CardHeader>
                        <CardTitle>{message.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                        <Mail className="flex-shrink-0" />
                        <div>
                          <p>{message.content}</p>
                          <p className="text-xs text-muted-foreground">
                            {message.received}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </PinContainer>
        </FollowerPointerCard>
      </main>

      {/* Footer */}
      <footer className="text-center p-4 md:p-6 bg-gray-900 text-white">
        © 2023 MystryMessages. All rights reserved. Design & devlop by
        @BroCode1508
      </footer>
    </>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Abhishek",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/images/abhi.jpg",
  authorAvatar: "/images/abhi.jpg",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-green"
    />
    <p>{title}</p>
  </div>
);
