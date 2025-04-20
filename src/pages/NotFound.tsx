import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ChessPiece from "@/components/ChessPiece";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center gap-6 mb-6">
          <ChessPiece type="knight" color="white" size={80} />
          <ChessPiece type="knight" color="black" size={80} />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-chess-primary">Страница не найдена</h1>
        <p className="text-xl text-gray-600 mb-8">
          Похоже, эта страница ушла в другую партию
        </p>
        <Link to="/">
          <Button className="bg-chess-primary hover:bg-purple-700">
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
