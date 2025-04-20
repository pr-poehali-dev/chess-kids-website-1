import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ChessLayout from "@/components/ChessLayout";
import ChessPiece from "@/components/ChessPiece";

const NotFound = () => {
  return (
    <ChessLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <div className="relative mb-8">
          <div className="absolute -top-10 -left-10 animate-bounce-slow">
            <ChessPiece type="knight" color="white" size={80} />
          </div>
          <h1 className="text-9xl font-bold text-chess-primary">404</h1>
          <div className="absolute -bottom-10 -right-10 animate-bounce-slow" style={{ animationDelay: "0.5s" }}>
            <ChessPiece type="rook" color="white" size={80} />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ой! Страница не найдена</h2>
        <p className="text-xl mb-8 max-w-md">
          Похоже, ты сделал неправильный ход! Эта страница исчезла, как пешка после превращения.
        </p>
        
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
          <Link to="/">
            <Button size="lg" className="bg-chess-primary hover:bg-purple-700">
              Вернуться на главную
            </Button>
          </Link>
          <Link to="/lessons">
            <Button size="lg" variant="outline" className="border-chess-secondary text-chess-secondary hover:bg-chess-secondary hover:text-white">
              Перейти к урокам
            </Button>
          </Link>
        </div>
      </div>
    </ChessLayout>
  );
};

export default NotFound;
