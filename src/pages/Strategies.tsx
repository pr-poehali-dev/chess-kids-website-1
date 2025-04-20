import ChessLayout from "@/components/ChessLayout";
import ChessBoard from "@/components/ChessBoard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, LightbulbIcon, ShieldAlert, Target } from "lucide-react";
import { Link } from "react-router-dom";

const basicPositions = [
  {
    id: "opening",
    name: "Развитие фигур",
    description: "В начале игры важно вывести фигуры в центр доски. Сначала лучше развивать коней и слонов, затем ладьи.",
    position: [
      ["R", "N", "B", "", "K", "B", "N", "R"],
      ["P", "P", "P", "", "P", "P", "P", "P"],
      ["", "", "", "", "", "", "", ""],
      ["", "", "", "P", "", "", "", ""],
      ["", "", "", "p", "", "", "", ""],
      ["", "", "n", "", "", "", "", ""],
      ["p", "p", "p", "", "p", "p", "p", "p"],
      ["r", "", "b", "q", "k", "b", "n", "r"]
    ]
  },
  {
    id: "center",
    name: "Контроль центра",
    description: "Контроль центральных клеток (d4, e4, d5, e5) даёт преимущество, так как фигуры могут быстрее перемещаться по доске.",
    position: [
      ["R", "", "B", "Q", "K", "B", "N", "R"],
      ["P", "P", "", "", "P", "P", "P", "P"],
      ["", "", "N", "P", "", "", "", ""],
      ["", "", "", "", "P", "", "", ""],
      ["", "", "p", "P", "", "", "", ""],
      ["", "", "n", "", "", "n", "", ""],
      ["p", "p", "", "p", "", "p", "p", "p"],
      ["r", "", "b", "q", "k", "b", "", "r"]
    ]
  },
  {
    id: "safety",
    name: "Безопасность короля",
    description: "Важно обеспечить безопасность своего короля. Рокировка помогает спрятать короля и соединить ладьи.",
    position: [
      ["", "", "", "R", "", "R", "K", ""],
      ["P", "P", "P", "", "", "P", "P", "P"],
      ["", "", "N", "", "P", "N", "", ""],
      ["", "", "B", "P", "", "", "", ""],
      ["", "", "b", "p", "", "", "", ""],
      ["", "", "n", "", "p", "n", "", ""],
      ["p", "p", "p", "", "", "p", "p", "p"],
      ["", "", "", "r", "", "r", "k", ""]
    ]
  }
];

const Strategies = () => {
  return (
    <ChessLayout>
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-4 text-chess-primary">Шахматные стратегии</h1>
        <p className="text-xl mb-6">
          Изучи основные шахматные стратегии и тактики, которые помогут тебе побеждать!
        </p>
      </section>

      <Tabs defaultValue="basic" className="mb-10">
        <TabsList className="grid grid-cols-3 w-full max-w-md mb-8">
          <TabsTrigger value="basic">Основы</TabsTrigger>
          <TabsTrigger value="tactics">Тактики</TabsTrigger>
          <TabsTrigger value="endgame">Эндшпиль</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic" className="animate-fade-in">
          <div className="grid grid-cols-1 gap-8 mb-10">
            {basicPositions.map((position) => (
              <Card key={position.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="p-6 md:w-1/2">
                      <h3 className="text-2xl font-bold mb-2 text-chess-primary flex items-center">
                        {position.id === "opening" && <Brain className="mr-2 h-6 w-6" />}
                        {position.id === "center" && <Target className="mr-2 h-6 w-6" />}
                        {position.id === "safety" && <ShieldAlert className="mr-2 h-6 w-6" />}
                        {position.name}
                      </h3>
                      <p className="text-lg">{position.description}</p>
                    </div>
                    <div className="p-4 flex items-center justify-center md:w-1/2">
                      <ChessBoard simplified size={300} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-chess-primary flex items-center">
              <LightbulbIcon className="mr-2 h-6 w-6" />
              Советы для начинающих
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">Развивай фигуры в начале игры</AccordionTrigger>
                <AccordionContent className="text-base">
                  В начале партии важно быстро развить свои фигуры. Старайся делать ходы, которые 
                  выводят твои фигуры в игру. Сначала развивай лёгкие фигуры (коней и слонов), 
                  затем делай рокировку для защиты короля.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">Контролируй центр доски</AccordionTrigger>
                <AccordionContent className="text-base">
                  Центральные клетки (d4, e4, d5, e5) очень важны. Фигуры в центре контролируют 
                  больше клеток и имеют больше возможностей для атаки. Старайся занять центр 
                  своими пешками и поддерживать их фигурами.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">Защищай своего короля</AccordionTrigger>
                <AccordionContent className="text-base">
                  Безопасность короля — очень важная часть стратегии. Делай рокировку в начале 
                  игры, чтобы спрятать короля. Старайся не ослаблять пешечную структуру перед 
                  королём без необходимости.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">Избегай ненужных ходов пешками</AccordionTrigger>
                <AccordionContent className="text-base">
                  Каждый ход пешкой создаёт слабость, которую нельзя исправить. Перед тем, как 
                  двигать пешку, хорошо подумай о последствиях. Особенно осторожно двигай пешки 
                  вокруг своего короля.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold">Соединяй ладьи</AccordionTrigger>
                <AccordionContent className="text-base">
                  Две ладьи, соединённые на одной горизонтали или вертикали, очень сильны. 
                  Они могут поддерживать друг друга и контролировать открытые линии. 
                  Старайся соединить ладьи после рокировки.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>
        
        <TabsContent value="tactics" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              {
                name: "Вилка",
                description: "Атака одной фигурой (обычно конём) сразу двух или более фигур противника.",
                icon: "♘"
              },
              {
                name: "Связка",
                description: "Атака на фигуру, за которой стоит более ценная фигура, из-за чего первая фигура не может двигаться.",
                icon: "♗"
              },
              {
                name: "Двойной удар",
                description: "Атака двух фигур одновременно разными фигурами или атака фигуры и угроза мата.",
                icon: "♕"
              },
              {
                name: "Открытое нападение",
                description: "Ход одной фигурой, который открывает линию атаки для другой фигуры.",
                icon: "♖"
              },
            ].map((tactic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4 text-chess-primary">{tactic.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-chess-primary">{tactic.name}</h3>
                      <p>{tactic.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mb-10">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-chess-primary">Жертва материала</h3>
              <p className="text-lg mb-4">
                Иногда в шахматах выгодно пожертвовать фигуру или пешку для получения позиционного 
                преимущества или для начала атаки на короля противника.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-chess-secondary">Позиционная жертва</h4>
                  <p>
                    Жертва материала для получения позиционного преимущества, 
                    например, открытие линии для атаки или улучшение расположения фигур.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2 text-chess-secondary">Тактическая жертва</h4>
                  <p>
                    Жертва с целью получения конкретного тактического выигрыша, 
                    например, для проведения комбинации с матом или возврата материала с процентами.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center">
            <p className="text-lg mb-4">Хочешь попрактиковаться в решении тактических задач?</p>
            <Button className="bg-chess-primary hover:bg-purple-700">
              <Link to="/lessons" className="flex items-center">
                Перейти к урокам
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="endgame" className="animate-fade-in">
          <div className="grid grid-cols-1 gap-8 mb-10">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-chess-primary">Пешечные окончания</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="mb-4">
                      В пешечных окончаниях очень важно правило квадрата и понятие оппозиции.
                    </p>
                    <h4 className="font-semibold text-lg mb-2 text-chess-secondary">Правило квадрата</h4>
                    <p className="mb-4">
                      Если король находится внутри воображаемого квадрата, построенного от проходной пешки до поля превращения, 
                      то он может догнать эту пешку.
                    </p>
                    <h4 className="font-semibold text-lg mb-2 text-chess-secondary">Оппозиция</h4>
                    <p>
                      Когда короли стоят напротив друг друга с нечётным количеством полей между ними, 
                      игрок, который должен ходить, оказывается в невыгодном положении.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <ChessBoard simplified size={300} />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-chess-primary">Ладейные окончания</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="flex justify-center">
                    <ChessBoard simplified size={300} />
                  </div>
                  <div>
                    <p className="mb-4">
                      Ладейные окончания — самый распространённый тип окончаний в шахматных партиях.
                    </p>
                    <h4 className="font-semibold text-lg mb-2 text-chess-secondary">Позиция Филидора</h4>
                    <p className="mb-4">
                      Защитная позиция, где слабейшая сторона удерживает ладью на третьей горизонтали, 
                      блокируя продвижение короля противника.
                    </p>
                    <h4 className="font-semibold text-lg mb-2 text-chess-secondary">Активность ладьи</h4>
                    <p>
                      В ладейных окончаниях важно располагать свою ладью активно, атаковать пешки противника 
                      сзади и использовать своего короля для поддержки.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-chess-primary">Базовые маты</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-chess-secondary">Мат ферзём</h4>
                    <p className="mb-4">
                      Ферзь и король против одинокого короля. Цель — загнать короля противника на край доски, 
                      а затем поставить мат.
                    </p>
                    <Button variant="outline" className="border-chess-primary text-chess-primary hover:bg-chess-primary hover:text-white">
                      Учить мат ферзём
                    </Button>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-chess-secondary">Мат ладьёй</h4>
                    <p className="mb-4">
                      Ладья и король против одинокого короля. Нужно оттеснить короля противника на край доски, 
                      используя своего короля и ладью вместе.
                    </p>
                    <Button variant="outline" className="border-chess-secondary text-chess-secondary hover:bg-chess-secondary hover:text-white">
                      Учить мат ладьёй
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-lg mb-4">Хочешь потренироваться в окончаниях?</p>
            <Button className="bg-chess-primary hover:bg-purple-700">
              <Link to="/lessons" className="flex items-center">
                Перейти к тренажёру окончаний
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </ChessLayout>
  );
};

export default Strategies;
