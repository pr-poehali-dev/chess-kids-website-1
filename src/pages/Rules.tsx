import ChessLayout from "@/components/ChessLayout";
import ChessBoard from "@/components/ChessBoard";
import ChessPiece from "@/components/ChessPiece";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Rules = () => {
  return (
    <ChessLayout>
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-chess-primary">Правила шахмат</h1>
        <p className="text-xl mb-6">
          Узнай основные правила шахматной игры и как ходят фигуры!
        </p>
      </section>

      <Tabs defaultValue="pieces" className="mb-10">
        <TabsList className="grid grid-cols-3 w-full max-w-md mb-8">
          <TabsTrigger value="pieces">Фигуры</TabsTrigger>
          <TabsTrigger value="board">Доска</TabsTrigger>
          <TabsTrigger value="rules">Ходы</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pieces" className="animate-fade-in">
          <div className="grid gap-8">
            {[
              {
                piece: 'pawn',
                name: 'Пешка',
                description: 'Пешка ходит только вперёд на одну клетку. В первый ход пешка может сходить на две клетки. Бьёт пешка по диагонали на одну клетку вперёд.',
                image: '/placeholder.svg'
              },
              {
                piece: 'rook',
                name: 'Ладья',
                description: 'Ладья ходит по прямым линиям — горизонталям и вертикалям — на любое количество клеток.',
                image: '/placeholder.svg'
              },
              {
                piece: 'knight',
                name: 'Конь',
                description: 'Конь ходит буквой "Г": на две клетки по горизонтали или вертикали, а затем на одну клетку в сторону. Конь может перепрыгивать через другие фигуры.',
                image: '/placeholder.svg'
              },
              {
                piece: 'bishop',
                name: 'Слон',
                description: 'Слон ходит только по диагонали на любое количество клеток.',
                image: '/placeholder.svg'
              },
              {
                piece: 'queen',
                name: 'Ферзь',
                description: 'Ферзь — самая сильная фигура. Может ходить как ладья и слон: по прямым линиям и диагоналям на любое расстояние.',
                image: '/placeholder.svg'
              },
              {
                piece: 'king',
                name: 'Король',
                description: 'Король ходит на одну клетку в любом направлении. Король не может ходить на клетки, которые находятся под ударом фигур соперника.',
                image: '/placeholder.svg'
              }
            ].map((item) => (
              <Card key={item.piece} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="chess-pattern p-8 flex items-center justify-center md:w-1/4">
                      <ChessPiece type={item.piece as any} color="white" size={100} />
                    </div>
                    <div className="p-6 md:w-3/4">
                      <h3 className="text-2xl font-bold mb-2 text-chess-primary">{item.name}</h3>
                      <p className="text-lg">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="board" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-chess-primary">Шахматная доска</h3>
              <p className="text-lg mb-4">
                Шахматная доска состоит из 64 клеток (8×8), которые чередуются между черным и белым цветом.
              </p>
              <p className="text-lg mb-4">
                Горизонтальные ряды называются <strong>горизонталями</strong> и обозначаются цифрами от 1 до 8.
              </p>
              <p className="text-lg mb-4">
                Вертикальные ряды называются <strong>вертикалями</strong> и обозначаются буквами от a до h.
              </p>
              <p className="text-lg mb-4">
                Диагональные линии называются <strong>диагоналями</strong>.
              </p>
              <p className="text-lg">
                Каждая клетка имеет своё имя, например: a1, e4, h8 и т.д.
              </p>
            </div>
            <div className="flex justify-center">
              <ChessBoard size={350} showCoordinates />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="rules" className="animate-fade-in">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-chess-primary">Начало игры</h3>
                <p className="text-lg">Игру всегда начинают белые. Игроки ходят по очереди, передвигая одну фигуру за ход.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-chess-primary">Взятие фигуры</h3>
                <p className="text-lg">Если фигура ходит на поле, занятое фигурой противника, то фигура противника считается взятой и убирается с доски.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-chess-primary">Шах</h3>
                <p className="text-lg">Шах — это положение, при котором король находится под ударом фигуры противника. Если королю объявлен шах, игрок должен защитить короля одним из способов:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Уйти королем на безопасное поле</li>
                  <li>Взять фигуру, объявившую шах</li>
                  <li>Перекрыть линию атаки своей фигурой</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-chess-primary">Мат</h3>
                <p className="text-lg">Мат — это шах, от которого нет защиты. Если игроку объявлен мат, то игра заканчивается, и этот игрок проигрывает.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-chess-primary">Специальные ходы</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-1 text-chess-secondary">Рокировка</h4>
                    <p className="text-lg">Особый ход, при котором король и ладья перемещаются одновременно. Король перемещается на две клетки в сторону ладьи, а ладья перемещается через короля на соседнюю с ним клетку.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1 text-chess-secondary">Взятие на проходе</h4>
                    <p className="text-lg">Если пешка противника из начальной позиции сразу ходит на две клетки и оказывается рядом с вашей пешкой, вы можете взять её "на проходе".</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1 text-chess-secondary">Превращение пешки</h4>
                    <p className="text-lg">Когда пешка достигает последней горизонтали, она может превратиться в любую фигуру того же цвета, кроме короля.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-16">
        <p className="text-xl mb-4">Теперь, когда ты знаешь основные правила, можно изучить стратегии!</p>
        <a href="/strategies" className="inline-flex items-center font-bold text-lg text-chess-primary hover:underline">
          Перейти к стратегиям
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </ChessLayout>
  );
};

export default Rules;
