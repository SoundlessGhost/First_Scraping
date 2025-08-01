import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

import {
  Usb,
  SquircleDashed,
  SquareMousePointer,
  ShieldOff,
  Cpu,
  Puzzle,
  IdCard,
  BookText,
} from "lucide-react";

const products = [
  {
    title: "Universal Scraper",
    icon: <Usb />,
    description: "Bypass anti-bot walls and extract anything from anywhere.",
  },
  {
    title: "StructuredData API",
    icon: <SquircleDashed />,
    description: "Get clean, ready-to-use data from top websites in real time.",
  },
  {
    title: "Scraping Browser",
    icon: <SquareMousePointer />,
    description: "Headless scraping with undetectable precision.",
  },
  {
    title: "Residential Proxies",
    icon: <ShieldOff />,
    description: "Rotate IPs smartly with location-level control.",
  },
];

const UniversalScraper = [
  {
    title: "WAF Bypass",
    icon: <Cpu size={30} />,
    description: "Bypass Cloudflare, DataDome & Akamai — with one API call.",
  },
  {
    title: "Proxy Rotator",
    icon: <IdCard size={30} />,
    description: "Premium IPs with geolocation.",
  },
  {
    title: "CAPTCHA Bypass",
    icon: <Puzzle size={30} />,
    description: "Best toolkit to avoid getting blocked.",
  },
  {
    title: "Large-Scale Data Acquisition",
    icon: <BookText size={30} />,
    description: "Handle millions of requests without sacrificing efficiency.",
  },
];

export function Products() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div>
          <div>
            <h1 className="font-semibold text-xs leading-snug text-gray py-4 px-3 uppercase">
              Products
            </h1>
            <div className="grid grid-cols-1 mt-2 mb-6 lg:grid-cols-4 md:w-[500px] lg:w-[650px] px-3">
              {products.map((item) => (
                <div
                  key={item.title}
                  className="mx-3 p-3 rounded-md transition-colors duration-200 cursor-pointer hover:bg-gray-100"
                >
                  <span className="text-blue-500">{item.icon}</span>
                  <div className="">
                    <span className="text-sm font-medium pt-4 pb-2 leading-none">
                      {item.title}
                    </span>
                    <p className="text-xs leading-snug text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-md">
            <h1 className="font-semibold text-xs leading-snug text-gray py-4 uppercase">
              Universal Scraper API capabilities
            </h1>
            {UniversalScraper.map((item) => (
              <div
                key={item.title}
                className="p-3 flex items-center rounded-md transition-colors duration-200 cursor-pointer hover:bg-gray-200"
              >
                <span className="text-blue-500">{item.icon}</span>
                <div className="ml-3">
                  <span className="text-sm font-medium pt-4 leading-none">
                    {item.title}
                  </span>
                  <p className="text-xs leading-snug line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
