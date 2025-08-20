"use client";

import AnnouncementBar from "@/components/AnnouncementBar";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OfferCard from "@/components/OfferCard";
import StatsSection from "@/components/StatsSection";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const OfferData = [
    {
      id: 1,
      img: "/images/brand1.png",
      title: "Interactive UI",
      desc: "Crafting stunning, user-friendly interfaces that keep your audience engaged.",
    },
    {
      id: 2,
      img: "/images/brand1.png",
      title: "Easy To Use",
      desc: "Simple, intuitive experiences tailored for seamless customer journeys.",
    },
    {
      id: 3,
      img: "/images/brand1.png",
      title: "Unique Demos",
      desc: "Exclusive templates and layouts designed for your business identity.",
    },
    {
      id: 4,
      img: "/images/brand1.png",
      title: "Parallax Effects",
      desc: "Eye-catching animations that bring depth and creativity to your site.",
    },
  ];

  return (
    <main>
      {/* Top Announcement */}
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section */}
      <div className="relative hero min-h-screen w-full p-8">
        {/* Background Image */}
        <Image
          src="/images/hero.svg"
          alt="hero-img"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Digital Agency For Growth!
          </h1>
          <p className="mt-4 text-md md:text-lg text-white/90 font-medium max-w-2xl drop-shadow-md">
            We build innovative digital solutions to help brands grow and
            succeed in the modern world.
          </p>
          <div className="mt-8 flex gap-4 justify-center items-center flex-wrap">
            <Button
              size="lg"
              className="cursor-pointer uppercase p-6 text-sm font-bold text-white bg-orange-700 hover:bg-orange-600 hover:scale-100 transition-all"
            >
              Hire us now <MoveRight />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer uppercase p-6 text-sm font-bold text-slate-800 border-white hover:bg-black hover:text-white transition-all"
            >
              Discover More <MoveRight />
            </Button>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <Brands />

      {/* Offers Section */}
      <section className="my-20 flex flex-col items-center justify-center">
        {/* Section Heading */}
        <div className="info text-center flex items-center justify-center flex-col max-w-2xl px-4">
          <h2 className="text-4xl font-bold my-4">
            What We{" "}
            <span className="underline decoration-orange-600">Offer</span> For
            You
          </h2>
          <p className="text-gray-600 text-md w-3/4">
            Discover our wide range of services designed to elevate your brand
            and give your business a digital edge.
          </p>
        </div>

        {/* Cards Layout */}
        <div className="cards mt-12 flex items-stretch justify-center gap-6 w-full max-w-6xl">
          {/* Left Column */}
          <div className="flex flex-col  items-center gap-6 flex-1">
            {OfferData.slice(0, 2).map((offer) => (
              <OfferCard
                key={offer.id}
                title={offer.title}
                img={offer.img}
                desc={offer.desc}
              />
            ))}
          </div>

          {/* Middle Rocket */}
          <div className="flex items-center justify-center flex-1">
            <Image
              src="/images/offer-rocket.png"
              width={130}
              height={130}
              alt="rocket"
              className="animate-float"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 flex-1">
            {OfferData.slice(2, 4).map((offer) => (
              <OfferCard
                key={offer.id}
                title={offer.title}
                img={offer.img}
                desc={offer.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* read more */}
      <section>
        <div className="relative  w-full min-h-96 p-12 my-12">
          {/* Background Image */}
          <Image
            src="/images/hero.svg"
            alt="hero-img"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="info absolute top-30 left-100 w-1/2  flex flex-col items-center justify-center  z-20">
            <h3 className="text-center text-white text-3xl font-bold">
              Diligent far away behind the word mountains Agency like you. With
              useful features an interface and powerful Design
            </h3>
            <Button
              size="lg"
              className="my-8 cursor-pointer uppercase p-6 text-sm font-bold text-white bg-orange-700 hover:bg-orange-600 hover:scale-100 transition-all"
            >
              Hire us now <MoveRight />
            </Button>
          </div>
        </div>
      </section>

      {/* clinets */}
      <section className="my-12 flex items-center justify-center">
        <div className="left mx-8 w-1/3 flex justify-center items-center">
          <Image
            src="/images/clilent.png"
            width={260}
            height={100}
            alt="person-img"
          />
        </div>
        <div className="right mx-8 w-1/3">
          <h3 className="text-black font-extrabold text-4xl m-2">
            We Are Here to Give You Effective Ideas
          </h3>
          <p className="text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla
            accumsan, metus.
          </p>

          <StatsSection />
        </div>
      </section>

      {/* consultaion */}
      <section className="bg-orange-600 flex items-center justify-center my-12 p-8">
        <h2 className="font-extrabold text-4xl p-4 uppercase text-white">
          get a free consulation
        </h2>
        <p className="bg-black font-bold text-white rounded-md p-4 mx-4 tracking-widest ">
          987 2333 0000
        </p>
      </section>

      {/* ideas */}
      <section className="flex justify-center flex-col items-center my-18">
        <div className="info text-center flex items-center justify-center flex-col max-w-2xl px-4">
          <h2 className="text-4xl font-bold my-4">
            Great Ideas
            <span className="underline decoration-orange-600"> Into </span> Your
            Project
          </h2>
          <p className="text-gray-600 text-md w-3/4">
            Lorem ipsum dolor sit consectetur adipiscing elit. Curabitur
            placerat tellus site.
          </p>
        </div>

        <div className="info  flex items-center justify-center my-18">
          <div className="img mx-4 w-1/3">
            <Image
              src="/images/ideas.png"
              width={400}
              height={400}
              alt="idea-img"
            />
          </div>
          <div className="stats mx-4  w-1/2 flex flex-col">
            <h3 className="text-black font-extrabold text-4xl m-2">
              We are Happy to Assist you all Time Moment
            </h3>
            <p className="text-slate-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla
              accumsan, metus.
            </p>
            <div className="progress my-4 w-3/4 p-4">
              <h5 className="text-lg font-bold my-2 ">Web Design</h5>
              <Progress value={85} />
              <h5 className="text-lg font-bold my-2 ">Marketing</h5>
              <Progress value={50} />
              <h5 className="text-lg font-bold my-2 ">Development</h5>
              <Progress value={65} />
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer/>
    </main>
  );
}
