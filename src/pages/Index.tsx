import ChessLayout from "@/components/ChessLayout";
import ChessBoard from "@/components/ChessBoard";
import ChessPiece from "@/components/ChessPiece";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Chess, Lightbulb } from "lucide-react";

const Index = () => {
  return (
    <ChessLayout>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-chess-primary">
            Добро пожаловать в Шахматную Страну!
          </h1>
          <p className="text-xl mb-6">
            Увлекательный мир шахмат для детей всех возрастов
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/rules">
              <Button size="lg" className="bg-chess-primary hover:bg-purple-700">
                Изучить правила
              </Button>
            </Link>
            <Link to="/lessons">
              <Button size="lg" className="bg-chess-secondary hover:bg-orange-600">
                Начать уроки
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="animate-bounce-slow">
            <ChessBoard simplified size={350} />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-chess-primary">
          Наши основные разделы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-chess-light hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-chess-primary inline-flex p-4 rounded-full mb-4">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Правила игры</h3>
                <p className="mb-4">
                  Узнай, как двигаются фигуры и какие правила нужно соблюдать в шахматах
                </p>
                <Link to="/rules">
                  <Button variant="outline" className="border-chess-primary text-chess-primary hover:bg-chess-primary hover:text-white">
                    Изучить правила
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-chess-light hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-chess-secondary inline-flex p-4 rounded-full mb-4">
                  <Chess className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Стратегии</h3>
                <p className="mb-4">
                  Освой базовые шахматные стратегии и тактики для победы
                </p>
                <Link to="/strategies">
                  <Button variant="outline" className="border-chess-secondary text-chess-secondary hover:bg-chess-secondary hover:text-white">
                    Изучить стратегии
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-chess-light hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-chess-accent inline-flex p-4 rounded-full mb-4">
                  <Lightbulb className="h-10 w-10 text-chess-dark" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Уроки</h3>
                <p className="mb-4">
                  Интерактивные уроки и практика для всех уровней подготовки
                </p>
                <Link to="/lessons">
                  <Button variant="outline" className="border-chess-accent text-chess-dark hover:bg-chess-accent">
                    Начать обучение
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-chess-primary">
          Знакомство с фигурами
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
          {[
            { type: 'pawn', name: 'Пешка' },
            { type: 'rook', name: 'Ладья' },
            { type: 'knight', name: 'Конь' },
            { type: 'bishop', name: 'Слон' },
            { type: 'queen', name: 'Ферзь' },
            { type: 'king', name: 'Король' },
          ].map((piece) => (
            <div key={piece.type} className="text-center">
              <div className="mb-2 chess-pattern inline-block p-2 rounded-lg">
                <ChessPiece type={piece.type as any} color="white" size={60} />
              </div>
              <h3 className="font-bold">{piece.name}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/rules">
            <Button className="bg-chess-primary hover:bg-purple-700">
              Узнать больше о фигурах
            </Button>
          </Link>
        </div>
      </section>
    </ChessLayout>
  );
};

export default Index;
