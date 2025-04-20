import ChessLayout from "@/components/ChessLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChessBoard from "@/components/ChessBoard";
import { Badge } from "@/components/ui/badge";

const Strategies = () => {
  return (
    <ChessLayout>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-chess-primary">Шахматные стратегии</h1>
        <p className="text-xl mb-8">
          Научись основным стратегиям и тактикам, которые помогут тебе стать сильным шахматистом!
        </p>

        <Tabs defaultValue="beginners" className="mb-10">
          <TabsList className="grid grid-cols-3 mb-6 w-full">
            <TabsTrigger value="beginners">Для начинающих</TabsTrigger>
            <TabsTrigger value="opening">Дебюты</TabsTrigger>
            <TabsTrigger value="tricks">Тактические приёмы</TabsTrigger>
          </TabsList>

          <TabsContent value="beginners">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Основные принципы игры</CardTitle>
                  <CardDescription>
                    Для успешной игры в шахматы важно следовать этим принципам
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-chess-light p-5 rounded-lg">
                      <h3 className="text-lg font-bold mb-3 text-chess-primary">Контроль центра</h3>
                      <p>
                        Старайся контролировать центральные клетки доски своими фигурами и пешками. 
                        Это даёт преимущество и больше возможностей для атаки.
                      </p>
                    </div>

                    <div className="bg-chess-light p-5 rounded-lg">
                      <h3 className="text-lg font-bold mb-3 text-chess-primary">Развитие фигур</h3>
                      <p>
                        Быстро выводи фигуры в начале игры. Начинай с коней и слонов, 
                        затем делай рокировку для защиты короля.
                      </p>
                    </div>

                    <div className="bg-chess-light p-5 rounded-lg">
                      <h3 className="text-lg font-bold mb-3 text-chess-primary">Безопасность короля</h3>
                      <p>
                        Всегда думай о безопасности своего короля. Своевременная рокировка 
                        помогает укрыть короля от атак.
                      </p>
                    </div>

                    <div className="bg-chess-light p-5 rounded-lg">
                      <h3 className="text-lg font-bold mb-3 text-chess-primary">Материальный перевес</h3>
                      <p>
                        Старайся не терять свои фигуры и при возможности забирать фигуры противника. 
                        Каждая фигура имеет свою ценность.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 bg-white p-5 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4 text-chess-primary">Ценность фигур</h3>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="h-12 w-12 bg-chess-light rounded-full flex items-center justify-center">
                            <span className="text-2xl">♟</span>
                          </div>
                        </div>
                        <p className="font-bold">Пешка</p>
                        <p>1 очко</p>
                      </div>
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="h-12 w-12 bg-chess-light rounded-full flex items-center justify-center">
                            <span className="text-2xl">♞</span>
                          </div>
                        </div>
                        <p className="font-bold">Конь</p>
                        <p>3 очка</p>
                      </div>
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="h-12 w-12 bg-chess-light rounded-full flex items-center justify-center">
                            <span className="text-2xl">♝</span>
                          </div>
                        </div>
                        <p className="font-bold">Слон</p>
                        <p>3 очка</p>
                      </div>
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="h-12 w-12 bg-chess-light rounded-full flex items-center justify-center">
                            <span className="text-2xl">♜</span>
                          </div>
                        </div>
                        <p className="font-bold">Ладья</p>
                        <p>5 очков</p>
                      </div>
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="h-12 w-12 bg-chess-light rounded-full flex items-center justify-center">
                            <span className="text-2xl">♛</span>
                          </div>
                        </div>
                        <p className="font-bold">Ферзь</p>
                        <p>9 очков</p>
                      </div>
                      <div className="text-center">
                        <div className="flex justify-center mb-2">
                          <div className="h-12 w-12 bg-chess-light rounded-full flex items-center justify-center">
                            <span className="text-2xl">♚</span>
                          </div>
                        </div>
                        <p className="font-bold">Король</p>
                        <p>∞</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="opening">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Популярные дебюты</CardTitle>
                  <CardDescription>
                    Начальные ходы в партии определяют характер всей игры
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-chess-primary">Итальянская партия</h3>
                        <Badge className="bg-green-500">Для начинающих</Badge>
                      </div>
                      <p className="mb-4">
                        Один из самых старых и популярных дебютов. Белые выводят слона на диагональ, 
                        нацеленную на ослабленную пешку f7.
                      </p>
                      <div className="font-mono text-sm bg-gray-100 p-2 rounded mb-4">
                        1. e4 e5<br />
                        2. Nf3 Nc6<br />
                        3. Bc4
                      </div>
                      <div className="flex justify-center">
                        <ChessBoard size={200} />
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-chess-primary">Сицилианская защита</h3>
                        <Badge className="bg-yellow-500">Средний уровень</Badge>
                      </div>
                      <p className="mb-4">
                        Один из самых агрессивных и результативных ответов чёрных на ход e4. 
                        Чёрные борются за центр асимметрично.
                      </p>
                      <div className="font-mono text-sm bg-gray-100 p-2 rounded mb-4">
                        1. e4 c5
                      </div>
                      <div className="flex justify-center">
                        <ChessBoard size={200} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4 text-chess-primary">
                      Основные принципы дебюта
                    </h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>
                        <span className="font-bold">Контролируй центр</span> — начинай игру с центральных пешек (e4, d4)
                      </li>
                      <li>
                        <span className="font-bold">Развивай фигуры</span> — выводи коней и слонов на активные позиции
                      </li>
                      <li>
                        <span className="font-bold">Обеспечь безопасность короля</span> — сделай рокировку в начале игры
                      </li>
                      <li>
                        <span className="font-bold">Соединяй ладьи</span> — после рокировки ладьи могут взаимодействовать
                      </li>
                      <li>
                        <span className="font-bold">Не выводи ферзя слишком рано</span> — он может стать мишенью для атаки
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tricks">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Тактические приёмы</CardTitle>
                <CardDescription>
                  Мастерство в шахматах часто определяется умением применять тактические приёмы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-chess-light p-5 rounded-lg">
                    <h3 className="text-lg font-bold mb-3 text-chess-primary">Вилка</h3>
                    <p className="mb-3">
                      Одна фигура атакует две или более фигуры противника одновременно.
                    </p>
                    <div className="flex justify-center">
                      <img src="/placeholder.svg" alt="Пример вилки" className="h-40 w-40 object-cover rounded" />
                    </div>
                  </div>

                  <div className="bg-chess-light p-5 rounded-lg">
                    <h3 className="text-lg font-bold mb-3 text-chess-primary">Связка</h3>
                    <p className="mb-3">
                      Фигура не может ходить, иначе подставит под удар более ценную фигуру позади неё.
                    </p>
                    <div className="flex justify-center">
                      <img src="/placeholder.svg" alt="Пример связки" className="h-40 w-40 object-cover rounded" />
                    </div>
                  </div>

                  <div className="bg-chess-light p-5 rounded-lg">
                    <h3 className="text-lg font-bold mb-3 text-chess-primary">Двойной удар</h3>
                    <p className="mb-3">
                      Атака одновременно на две цели разными угрозами.
                    </p>
                    <div className="flex justify-center">
                      <img src="/placeholder.svg" alt="Пример двойного удара" className="h-40 w-40 object-cover rounded" />
                    </div>
                  </div>

                  <div className="bg-chess-light p-5 rounded-lg">
                    <h3 className="text-lg font-bold mb-3 text-chess-primary">Открытый шах</h3>
                    <p className="mb-3">
                      Фигура отходит, и открывается линия атаки другой фигуры на короля противника.
                    </p>
                    <div className="flex justify-center">
                      <img src="/placeholder.svg" alt="Пример открытого шаха" className="h-40 w-40 object-cover rounded" />
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-white p-5 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4 text-chess-primary">Как тренировать тактику</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Решай шахматные задачи каждый день</li>
                    <li>Анализируй партии гроссмейстеров</li>
                    <li>Ищи тактические приёмы в своих партиях</li>
                    <li>Играй с более сильными игроками</li>
                    <li>Используй шахматные программы и онлайн-тренажёры</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </ChessLayout>
  );
};

export default Strategies;
