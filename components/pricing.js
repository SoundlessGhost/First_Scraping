import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";

export function Pricing() {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/pricing" className=" font-medium">
          Pricing
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
