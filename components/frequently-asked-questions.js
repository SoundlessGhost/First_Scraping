import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <div className="">
      <p className="text-3xl font-bold text-center my-20 text-neutral-700">
        Frequently Asked Questions
      </p>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>What Is Firstscraping?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Firstscraping is a web scraping tool used for data extraction that
              comes with rotating proxies, headless browser functionalities,
              deals with CAPTCHAs, and bypasses advanced anti-bot systems. It
              allows developers to collect large amounts of internet data for
              e-commerce price monitoring, social media research, machine
              learning model training and plenty of use cases.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            What Is the Alternative to Firstscraping?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Firstscraping works by providing you with an advanced toolkit to
              bypass all anti-bot measures so that you don&apos;t get blocked
              while web scraping. Easily collect content from any website with
              the best web scraping toolkit.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How Does Firstscraping work?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Firstscraping handles all sorts of anti-bot bypasses in a single
              API call. We&apos;ve listed several alternatives to Firstscraping,
              which you can find below in the footer, yet we&apos;re confident
              we&apos;re the most functional tool for individual developers,
              small companies and enterprises.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
