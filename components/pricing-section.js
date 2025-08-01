"use client";

import React, { useState } from "react";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import PricingPlans from "./pricing-plan";

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Flexible plans for any scale
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Whether you&apos;re a solo developer or scaling a business, we&apos;ve got you
          covered.
        </p>

        {/* Billing Toggle */}
        <div className="mt-6 inline-flex gap-2 items-center justify-center bg-gray-100 rounded-full p-2">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              billing === "monthly"
                ? "bg-primary text-white"
                : "text-muted-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              billing === "yearly"
                ? "bg-primary text-white"
                : "text-muted-foreground"
            }`}
          >
            Yearly <span className="ml-1 text-xs text-green-600">–20% off</span>
          </button>
        </div>
      </div>

      
    </div>
  );
}
