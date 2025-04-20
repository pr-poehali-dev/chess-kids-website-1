import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, BookType, Home, Lightbulb, Trophy } from "lucide-react";

export function Sidebar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      title: "Главная",
      path: "/",
      icon: <Home className="mr-2 h-5 w-5" />,
    },
    {
      title: "Правила",
      path: "/rules",
      icon: <BookOpen className="mr-2 h-5 w-5" />,
    },
    {
      title: "Стратегии",
      path: "/strategies",
      icon: <Lightbulb className="mr-2 h-5 w-5" />,
    },
    {
      title: "Уроки",
      path: "/lessons",
      icon: <BookType className="mr-2 h-5 w-5" />,
    },
    {
      title: "Достижения",
      path: "/achievements",
      icon: <Trophy className="mr-2 h-5 w-5" />,
      disabled: true,
    },
  ];

  return (
    <div className="flex flex-col p-4 h-full">
      <div className="mb-6 flex justify-center">
        <div className="text-center">
          <img 
            src="/logo-b.svg" 
            alt="Шахматная страна" 
            className="h-16 mb-2" 
          />
          <h2 className="font-bold text-xl text-chess-primary">Шахматная страна</h2>
        </div>
      </div>
      
      <div className="space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.path}
            variant={isActive(item.path) ? "default" : "ghost"}
            className={`w-full justify-start ${isActive(item.path) ? "bg-chess-primary text-white" : ""}`}
            asChild={!item.disabled}
            disabled={item.disabled}
          >
            {item.disabled ? (
              <div className="flex items-center opacity-50 cursor-not-allowed">
                {item.icon}
                {item.title}
              </div>
            ) : (
              <Link to={item.path} className="flex items-center">
                {item.icon}
                {item.title}
              </Link>
            )}
          </Button>
        ))}
      </div>
      
      <div className="mt-auto pt-6">
        <div className="bg-chess-light rounded-lg p-4 text-center">
          <p className="text-sm font-semibold mb-2">Нужна помощь?</p>
          <Button variant="outline" className="w-full text-chess-primary border-chess-primary">
            Спросить учителя
          </Button>
        </div>
      </div>
    </div>
  );
}
