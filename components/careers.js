import Link from "next/link";
import { NavigationMenuItem, NavigationMenuLink } from "./ui/navigation-menu";

export function Careers() {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/careers" className=" font-medium">
          Careers
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
