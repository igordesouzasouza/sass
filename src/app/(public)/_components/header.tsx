import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 right-0 z-[999] left-0 py-4 px-6 bg-white ">
      {/* header controla o container  */}
      <div className="container mx-auto flex items-center justify-between">
        {/* div controla o alinhamento dos itens dentro do container */}
        <Link href="/" className="text-3xl font-bold text-zinc-900  ">
          Odonto<span className="text-emerald-500">PRO</span>
          {/* estilização */}
        </Link>
        <nav className="hidden md:flex items-center">
          <a href="#">Profissionais</a>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              className="text-black hover:bg-transparent"
              size="icon"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[240px] z-[9999] sm:w-[300px]"
          >
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Veja os Links</SheetDescription>
            <nav className="hidden md:flex items-center">
              <a href="#">Profissionais</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
