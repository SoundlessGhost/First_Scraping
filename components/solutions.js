import { ListItem } from "./listItem";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

import {
  MapPinHouse,
  ShoppingCart,
  MessagesSquare,
  Layers,
  Coins,
  BookCopy,
  Search,
  ScanFace,
} from "lucide-react";

const Industries = [
  {
    title: "E Commerce",
    icon: <ShoppingCart />,
    description:
      "Track competitors, optimize pricing, and dominate your niche.",
  },
  {
    title: "Real Estate",
    icon: <MapPinHouse />,
    description: "Gain real-time insights into property listings and trends.",
  },
  {
    title: "Social Media",
    icon: <MessagesSquare />,
    description:
      "Extract engagement data, trends, and audience insights in real time.",
  },
  {
    title: "Job Boards",
    icon: <Layers />,
    description:
      "Power your job platform with listing-to-trend data all in one seamless solution.",
  },
];

const UseCases = [
  {
    title: "Price Monitoring",
    icon: <Coins />,
    description: "Smart price tracking for smarter profit margins.",
  },
  {
    title: "Market Research",
    icon: <Search />,
    description: "Transform raw data into powerful market intelligence.",
  },
  {
    title: "Sentiment Analysis",
    icon: <ScanFace />,
    description:
      "Discover audience emotions and feedback through sentiment analysis.",
  },
  {
    title: "E commerce & Real Estate Data Collection",
    icon: <BookCopy />,
    description:
      "Extract structured data to scale your e-commerce and property business.",
  },
];

export function Solutions() {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:w-[400px] lg:w-[550px] ">
          <div className="">
            <h1 className="font-semibold text-xs leading-snug text-gray py-4 px-3 uppercase">
              Industries
            </h1>
            {Industries.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                icon={item.icon}
                href="#"
              >
                {item.description}
              </ListItem>
            ))}
          </div>

          <div>
            <h1 className="font-semibold text-xs leading-snug text-gray py-4 px-3 uppercase">
              Use Cases
            </h1>
            {UseCases.map((item) => (
              <ListItem
                key={item.title}
                title={item.title}
                icon={item.icon}
                href="#"
              >
                {item.description}
              </ListItem>
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
