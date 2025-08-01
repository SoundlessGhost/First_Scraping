import Link from "next/link";
import { NavigationMenuLink } from "./ui/navigation-menu";

export function ListItem({ title, children, icon, href }) {
  return (
    <NavigationMenuLink asChild>
      <Link href={href} className="block space-y-1">
        <div className="flex items-center gap-2">
          {icon && <span className="text-blue-500">{icon}</span>}
          <span className="text-[16px] font-medium leading-none">{title}</span>
        </div>
        <p className="text-xs leading-snug text-muted-foreground line-clamp-2">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  );
}
