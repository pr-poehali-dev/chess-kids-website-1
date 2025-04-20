import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Chess, BookOpen, Lightbulb, Home } from "lucide-react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation();
  
  const links = [
    { to: "/", label: "Главная", icon: <Home className="w-5 h-5 mr-2" /> },
    { to: "/rules", label: "Правила", icon: <BookOpen className="w-5 h-5 mr-2" /> },
    { to: "/strategies", label: "Стратегии", icon: <Lightbulb className="w-5 h-5 mr-2" /> },
    { to: "/lessons", label: "Уроки", icon: <Chess className="w-5 h-5 mr-2" /> },
  ];

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="flex items-center mb-2">
            <Chess className="w-8 h-8 text-chess-primary mr-2" />
            <h2 className="text-2xl font-bold text-chess-primary">Шахматная страна</h2>
          </div>
          <p className="text-sm text-muted-foreground">Учимся играть в шахматы весело!</p>
        </div>
        <div className="px-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "flex items-center px-3 py-2 text-lg rounded-md transition-colors",
                location.pathname === link.to
                  ? "bg-chess-primary text-white"
                  : "hover:bg-muted"
              )}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
