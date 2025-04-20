import { useState } from "react";
import ChessLayout from "@/components/ChessLayout";
import ChessPiece from "@/components/ChessPiece";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Rules = () => {
  const [selectedTab, setSelectedTab] = useState("pieces");

  return (
    <ChessLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-chess-primary">Правила шахмат</h1>
        <p className="text-xl mb-8">
          Шахматы — это увлекательная игра, которая развивает логическое мышление и стратегические навыки. 
          Давай узнаем основные правила!
        </p>

        <Tabs defaultValue="pieces" value={selectedTab} onValueChange={setSelectedTab} className="mb-10">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="pieces">Фигуры</TabsTrigger>
            <TabsTrigger value="rules">Основные правила</TabsTrigger>
            <TabsTrigger value="special">Особые ходы</TabsTrigger>
          </TabsList>

          <TabsContent value="pieces" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Шахматные фигуры</CardTitle>
                <CardDescription>
                  В шахматах у каждого игрока есть 16 фигур: 8 пешек, 2 ладьи, 2 коня, 2 слона, ферзь и король.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      type: 'pawn',
                      name: 'Пешка',
                      description: 'Ходит вперед на одну клетку. С начальной позиции может пойти на две клетки. Бьет по диагонали.'
                    },
                    {
                      type: 'rook',
                      name: 'Ладья',
                      description: 'Ходит по горизонтали и вертикали на любое количество клеток.'
                    },
                    {
                      type: 'knight',
                      name: 'Конь',
                      description: 'Ходит буквой "Г": на две клетки в одном направлении и затем на одну клетку в перпендикулярном. Может перепрыгивать через фигуры.'
                    },
                    {
                      type: 'bishop',
                      name: 'Слон',
                      description: 'Ходит по диагонали на любое количество клеток.'
                    },
                    {
                      type: 'queen',
                      name: 'Ферзь',
                      description: 'Самая сильная фигура. Может ходить как ладья и слон — по горизонтали, вертикали и диагонали на любое количество клеток.'
                    },
                    {
                      type: 'king',
                      name: 'Король',
                      description: 'Ходит на одну клетку в любом направлении. Самая важная фигура — если король под шахом и не может уйти, игра проиграна.'
                    }
                  ].map((piece) => (
                    <div key={piece.type} className="flex items-start space-x-4 p-4 bg-chess-light rounded-lg">
                      <div className="flex-shrink-0">
                        <ChessPiece type={piece.type as any} color="white" size={50} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{piece.name}</h3>
                        <p>{piece.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Основные правила игры</CardTitle>
                <CardDescription>
                  Чтобы начать играть в шахматы, важно знать эти основные правила.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">
                      Цель игры
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      Цель игры — поставить мат королю противника. Мат — это ситуация, когда король находится под шахом (под ударом) и не может уйти от этого шаха.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">
                      Начало игры
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      Белые всегда ходят первыми. Игроки делают ходы по очереди, передвигая одну фигуру за один ход. Нельзя пропускать ход.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">
                      Шах и мат
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      <p>Шах — это ситуация, когда король находится под угрозой взятия. Если вашему королю объявлен шах, вы должны:</p>
                      <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Уйти королем на безопасное поле</li>
                        <li>Взять фигуру, которая объявила шах</li>
                        <li>Поставить другую фигуру на пути атаки (кроме случая с конем)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium">
                      Ничья
                    </AccordionTrigger>
                    <AccordionContent className="text-base">
                      <p>Ничья может быть объявлена в следующих случаях:</p>
                      <ul className="list-disc list-inside ml-4 mt-2">
                        <li>Пат — когда игрок, чья очередь хода, не может сделать ни одного хода по правилам, но его король не находится под шахом</li>
                        <li>Недостаточность материала — если у обоих игроков недостаточно фигур для того, чтобы поставить мат</li>
                        <li>Троекратное повторение позиции</li>
                        <li>Правило 50 ходов — если в течение 50 ходов не было взятия фигур и хода пешкой</li>
                        <li>По соглашению игроков</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="special">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Особые ходы в шахматах</CardTitle>
                <CardDescription>
                  В шахматах есть несколько особых ходов, о которых важно знать.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-chess-light p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Рокировка</h3>
                    <p className="mb-3">
                      Рокировка — это особый ход, при котором король и ладья перемещаются одновременно. Это единственный случай, когда за один ход можно переместить две фигуры.
                    </p>
                    <div className="flex items-center space-x-2 mb-3">
                      <ChessPiece type="king" color="white" />
                      <span>+</span>
                      <ChessPiece type="rook" color="white" />
                      <span>→</span>
                      <span className="font-bold">Рокировка</span>
                    </div>
                    <p>
                      Рокировка возможна только если:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>Король и ладья еще не ходили</li>
                      <li>Между королем и ладьей нет других фигур</li>
                      <li>Король не находится под шахом</li>
                      <li>Король не проходит через клетку, находящуюся под ударом вражеской фигуры</li>
                    </ul>
                  </div>

                  <div className="bg-chess-light p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Взятие на проходе</h3>
                    <p className="mb-3">
                      Взятие на проходе (en passant) — это особый ход пешки, когда она может взять вражескую пешку, прошедшую мимо неё.
                    </p>
                    <p>
                      Если пешка противника с начальной позиции делает ход на две клетки и оказывается рядом с вашей пешкой, вы можете взять её на следующем ходу так, будто она продвинулась только на одну клетку.
                    </p>
                  </div>

                  <div className="bg-chess-light p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Превращение пешки</h3>
                    <p className="mb-3">
                      Когда пешка достигает последней горизонтали доски, она может быть превращена в любую другую фигуру того же цвета (кроме короля и пешки).
                    </p>
                    <div className="flex items-center space-x-4">
                      <ChessPiece type="pawn" color="white" />
                      <span>→</span>
                      <div className="flex space-x-2">
                        <ChessPiece type="queen" color="white" />
                        <ChessPiece type="rook" color="white" />
                        <ChessPiece type="bishop" color="white" />
                        <ChessPiece type="knight" color="white" />
                      </div>
                    </div>
                    <p className="mt-3">
                      Обычно пешку превращают в ферзя, так как это самая сильная фигура, но иногда может быть полезно превратить её в коня для немедленного шаха.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ChessLayout>
  );
};

export default Rules;
