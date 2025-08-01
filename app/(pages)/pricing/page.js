import PricingPlans from "@/components/pricing-plan";
import PricingSection from "@/components/pricing-section";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import Link from "next/link";
import React from "react";

const PricingPage = () => {
  return (
    <div className="mt-36 mb-20">
      <PricingPlans />

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-xl font-semibold">
          Still unsure which plan fits you?
        </h3>
        <p className="text-muted-foreground mt-1 mb-4">
          Talk to our team or explore the docs.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/" className="px-6 py-3 bg-primary text-white rounded-md">
            Book a Call
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-border rounded-md hover:bg-accent"
          >
            Explore Docs
          </Link>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto mt-24 px-4">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h3>
        <Accordion type="single" collapsible>
          <AccordionItem value="q1" title="What happens after the trial?">
            You can upgrade to any paid plan or continue with limited free
            usage.
          </AccordionItem>
          <AccordionItem value="q2" title="Can I cancel anytime?">
            Yes, you can cancel your plan at any time without penalty.
          </AccordionItem>
          <AccordionItem value="q3" title="What payment methods do you accept?">
            We accept major credit cards, PayPal, and wire transfers.
          </AccordionItem>
        </Accordion>
      </div>

      {/* Footer CTA */}
      <div className="bg-accent py-12 mt-24 text-center">
        <h3 className="text-2xl font-semibold mb-2">Ready to get started?</h3>
        <p className="text-muted-foreground mb-4">
          Start your 14-day free trial. No credit card required.
        </p>
        <Link href="/" className="px-6 py-3 bg-primary text-white rounded-md">
          Start Free Trial
        </Link>
      </div>
    </div>
  );
};

export default PricingPage;
