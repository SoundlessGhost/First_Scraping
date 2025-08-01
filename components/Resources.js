import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

import {
  Scale,
  BriefcaseBusiness,
  Workflow,
  CircleOff,
  Rss,
  StickyNote,
} from "lucide-react";

const resources = [
  {
    title: "Case Studies",
    icon: <BriefcaseBusiness />,
    description: "Learn how big companies are using ScraperAPI.",
  },
  {
    title: "Comparisons",
    icon: <Scale />,
    description: "Make an informed decision without guesswork.",
  },
  {
    title: "Integrations",
    icon: <Workflow />,
    description: "Anti-bot solutions can easily detect.",
  },
  {
    title: "API Error Codes",
    icon: <CircleOff />,
    description:
      "Understanding the Firstscraping Universal Scraper API error codes is crucial for troubleshooting.",
  },
  {
    title: "Blog",
    icon: <Rss />,
    description: "Projects, guides, and tutorials in one place.",
  },
  {
    title: "Docs",
    icon: <StickyNote />,
    description: "Offers tools to help you gather and manage web data easily.",
  },
];

export function Resources() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div>
          <h1 className="font-semibold mx-3 text-xs leading-snug text-gray py-4 uppercase">
            Resources
          </h1>
          <div className="bg-gray-100 p-4 rounded-md grid grid-cols-1 lg:grid-cols-2 gap-4 md:w-[500px] lg:w-[550px]">
            {resources.map((item) => (
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
