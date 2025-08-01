"use client";
import Image from "next/image";
import React from "react";

import {
  BookText,
  ChartNoAxesGantt,
  CloudDownload,
  Crown,
  Pill,
  SearchCheck,
} from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { TextAnimate } from "@/components/magicui/text-animate";

const components = [
  {
    title: "Ownership",
    icon: <Crown />,
    description: "We love people who are autonomous and seek responsibility.",
  },
  {
    title: "Dedication",
    icon: <Pill />,
    description:
      "With passion and perseverance, we go above and beyond to excel in all we do.",
  },
  {
    title: "Impact",
    icon: <CloudDownload />,
    description: "We drive change and make a lasting improvement every day.",
  },
  {
    title: "Transparency",
    icon: <BookText />,
    description:
      "Remote working is most effective when trust is built through shared knowledge.",
  },
  {
    title: "Agility",
    icon: <ChartNoAxesGantt />,
    description:
      "We adapt quickly, and continuously innovate to stay ahead in a fast-paced world.",
  },
  {
    title: "Curiosity",
    icon: <SearchCheck />,
    description:
      "We are driven by curiosity and a desire to constantly learn and improve.",
  },
];

const CareersPage = () => {
  return (
    <div className="m-6">
      <div className="">
        <p className="text-sm p-2  text-neutral-600">Home &gt; Careers</p>
      </div>
      <div className="mt-10">
        <div className="lg:flex justify-between items-center mx-20 gap-10">
          <div className="">
            <h1></h1>

            <TextAnimate
              animation="blurIn"
              as="h1"
              className="text-[48px] font-bold mb-4"
            >
              Reimagine data collection, Redefine your career.
            </TextAnimate>

            <p>
              Firstscraping is on a mission to simplify large-scale data
              collection. With cutting-edge automation and advanced anti-bot
              solutions, we help businesses across e-commerce, real estate,
              finance, and AI extract and use data smarter—at speed and scale.
            </p>
          </div>
          <Image
            className="rounded-md"
            src="/careers.jpg"
            alt="Careers Logo"
            width={500}
            height={500}
            priority={true}
          />
        </div>
        <div className="">
          <p className="text-3xl font-bold text-center my-20 text-neutral-700">
            How We Work
          </p>
          <div className="grid grid-cols-3 gap-10 mx-6">
            {components.map((item) => (
              <div key={item.title} className="text-center ">
                <Card key={item.title} className="w-full max-w-sm">
                  <CardHeader>
                    <span className="flex justify-center my-4 text-blue-500">
                      {item.icon}
                    </span>

                    <CardTitle className="text-[#0a5c5c] font-bold">
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <p className="text-3xl font-bold text-center mt-20 mb-10 text-neutral-700">
            A global team with a{" "}
            <span className="text-[#0a5c5c]">growth mindset</span>
          </p>
          <div className="mx-20">
            Founded by entrepreneurs Aurken and Ander, Firstscraping is a
            profitable pre-seed startup backed by €1.1M+ in funding. Our
            platform is trusted by thousands of companies across industries
            including e-commerce, marketing, travel, AI, real estate, and
            finance.
          </div>
        </div>

        <div className="">
          <p className="text-3xl font-bold text-center mt-20 mb-10 text-neutral-700">
            Our interview process
          </p>
          <div className="flex items-center justify-center">
            <Terminal>
              <>
                <TypingAnimation>
                  Starting interview sequence...
                </TypingAnimation>
                <br />
                <TypingAnimation delay={800}>✔ Resume Review</TypingAnimation>
                <br />
                <TypingAnimation delay={1600}>
                  ✔ Introductory Call
                </TypingAnimation>
                <br />
                <TypingAnimation delay={2400}>
                  ✔ Technical Challenge
                </TypingAnimation>
                <br />
                <TypingAnimation delay={3200}>
                  ✔ Final Interview
                </TypingAnimation>
                <br />
                <TypingAnimation delay={4000}>🚀 Offer Stage</TypingAnimation>
              </>
            </Terminal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
