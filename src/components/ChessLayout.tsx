import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Home, BookOpen, Chess, Lightbulb } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ChessLayoutProps {
  children: ReactNode;
}

const ChessLayout: FC<ChessLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-chess-primary text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Chess className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Шахматная Страна</h1>
          </Link>
          
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Главная
            </Link>
            <Link to="/rules" className="px-3 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Правила
            </Link>
            <Link to="/strategies" className="px-3 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Стратегии
            </Link>
            <Link to="/lessons" className="px-3 py-2 rounded-md hover:bg-purple-700 transition-colors">
              Уроки
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex justify-around p-2">
          <Link to="/">
            <Button variant="ghost" className="flex flex-col items-center">
              <Home className="h-5 w-5" />
              <span className="text-xs">Главная</span>
            </Button>
          </Link>
          <Link to="/rules">
            <Button variant="ghost" className="flex flex-col items-center">
              <BookOpen className="h-5 w-5" />
              <span className="text-xs">Правила</span>
            </Button>
          </Link>
          <Link to="/strategies">
            <Button variant="ghost" className="flex flex-col items-center">
              <Chess className="h-5 w-5" />
              <span className="text-xs">Стратегии</span>
            </Button>
          </Link>
          <Link to="/lessons">
            <Button variant="ghost" className="flex flex-col items-center">
              <Lightbulb className="h-5 w-5" />
              <span className="text-xs">Уроки</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto py-6 px-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-chess-dark text-white py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© 2023 Шахматная Страна. Все права защищены.</p>
            <p className="mt-2 text-sm">Увлекательный мир шахмат для детей</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChessLayout;
