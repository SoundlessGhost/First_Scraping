"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Pricing } from "@/components/pricing";
import { Careers } from "@/components/careers";
import { Products } from "@/components/products";
import { Resources } from "@/components/Resources";
import { Solutions } from "@/components/solutions";
import { LoginForm } from "./login-form";
import { TextAnimate } from "./magicui/text-animate";

export function NavigationNavbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
      <div className="flex items-center justify-between mx-10 my-4">
        <Link href={"/"} className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="First Scraping Logo"
            width={35}
            height={35}
            priority={true}
          />
          <div className="font-medium text-inherit text-[20px] pl-2">
            <TextAnimate
              animation="blurInUp"
              by="character"
              duration={5}
              className="text-[#0a5c5c] font-bold"
            >
              Firstscraping
            </TextAnimate>
          </div>
        </Link>

        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <Products />
            <Solutions />
            <Pricing />
            <Resources />
            <Careers />
          </NavigationMenuList>
        </NavigationMenu>

        <LoginForm />
      </div>
    </div>
  );
}
