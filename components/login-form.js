import { Button } from "@/components/ui/button";

export function LoginForm() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" className="text-[16px] cursor-pointer">
        Login
      </Button>
      <Button className="text-white text-[16px] cursor-pointer">
        Start Trial
      </Button>
    </div>
  );
}
