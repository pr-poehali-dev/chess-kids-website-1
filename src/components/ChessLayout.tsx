import { ReactNode } from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { useMediaQuery } from "@/hooks/use-mobile";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

interface ChessLayoutProps {
  children: ReactNode;
}

const ChessLayout = ({ children }: ChessLayoutProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="min-h-screen bg-background font-comic">
      <div className="flex">
        {isMobile ? (
          <>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-50">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64">
                <Sidebar />
              </SheetContent>
            </Sheet>
            <main className="flex-1 pt-16 px-4 pb-12">
              {children}
            </main>
          </>
        ) : (
          <>
            <aside className="w-64 border-r min-h-screen sticky top-0">
              <Sidebar />
            </aside>
            <main className="flex-1 px-8 py-6">
              {children}
            </main>
          </>
        )}
      </div>
    </div>
  );
};

export default ChessLayout;
