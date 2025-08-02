"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import {
  BookText,
  ChartNoAxesGantt,
  CloudDownload,
  Crown,
  Pill,
  SearchCheck,
} from "lucide-react";

import { TextAnimate } from "@/components/magicui/text-animate";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { Globe } from "@/components/magicui/globe";
import { AccordionDemo } from "@/components/frequently-asked-questions";
import DataCollectionUsesCases from "@/components/data-collection-uses-cases";

const components = [
  {
    title: "AI Web Unblocker",
    icon: <Crown />,
    description: "Best technology to avoid getting block",
  },
  {
    title: "Proxy Rotator",
    icon: <Pill />,
    description: "Premium IPs with geolocation.",
  },
  {
    title: "WAF Bypass",
    icon: <CloudDownload />,
    description: "Cloudflare, Datadome, Akamai....",
  },
  {
    title: "CAPTCHA Bypass",
    icon: <BookText />,
    description: "reCAPTCHA, Turnstile....",
  },
  {
    title: "JavaScript Rendering",
    icon: <ChartNoAxesGantt />,
    description: "Render JS and interact with pages.",
  },
  {
    title: "User Agent Rotator",
    icon: <SearchCheck />,
    description: "Full-header rotation",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Grid background now sits right behind hero content */}
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "absolute top-0 left-0 right-0 h-[100vh] skew-y-6 z-0"
        )}
      />

      {/* Floating Globe (optional visual) */}
      <div className="fixed top-32 -left-52 z-0 w-[300px] h-[300px] opacity-80 pointer-events-none">
        <Globe />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mt-48 mx-6 lg:mx-32 mb-10">
        <div className="flex text-center justify-center items-center">
          <div>
            <TextAnimate
              className="text-4xl font-medium mb-10"
              animation="slideLeft"
              by="character"
            >
              The Trusted API for Scalable Web Scraping
            </TextAnimate>

            <p className="text-[17px] max-w-xl mx-auto">
              Make unlimited requests without getting blocked. <br />
              Our infrastructure keeps your scraping invisible to detection
              systems.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <Link
            href="/"
            className="px-6 py-3 text-white bg-primary rounded-md font-medium hover:bg-primary/90 transition"
          >
            Start Free Trial
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-border rounded-md font-medium text-foreground hover:bg-accent transition"
          >
            Read Documentation
          </Link>
        </div>

        <p className="text-[17px] mt-20 mb-6 font-bold text-center">
          Universal Scraper API Capabilities
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {components.map((item) => (
            <div key={item.title}>
              <Card>
                <CardHeader className="flex gap-4 items-center">
                  <span className="text-xl text-blue-500">{item.icon}</span>
                  <div>
                    <CardTitle className="text-[#0a5c5c] font-bold">
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex text-center justify-center mt-28 items-center">
          <div>
            <h1 className="text-4xl font-medium mb-10">
              One API, Zero Blocks{" "}
              <span className="text-[#0a5c5c]">Full Control</span> Over Your
              Scraping.
            </h1>
            <p className="text-[17px] max-w-2xl mx-auto">
              Our scraping API powers data pipelines for enterprises in
              e-commerce, real estate, AI, and more — handling proxies,
              browsers, and CAPTCHAs so you don’t have to.
            </p>
          </div>
        </div>

        {/* Data Collection Uses Cases */}
        <DataCollectionUsesCases />

        {/* FAQ Section */}
        <AccordionDemo />
      </div>
    </div>
  );
}
