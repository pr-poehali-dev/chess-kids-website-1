import ChessLayout from "@/components/ChessLayout";
import LessonCard from "@/components/LessonCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

const lessonsData = [
  {
    id: "1",
    title: "Первые шаги в шахматах",
    description: "Познакомься с шахматной доской и фигурами",
    level: "начинающий",
    imageUrl: "/placeholder.svg",
    category: "basic"
  },
  {
    id: "2",
    title: "Как ходят фигуры",
    description: "Изучи правила движения всех шахматных фигур",
    level: "начинающий",
    imageUrl: "/placeholder.svg",
    category: "basic"
  },
  {
    id: "3",
    title: "Шах и мат",
    description: "Научись ставить шах и мат своему сопернику",
    level: "начинающий",
    imageUrl: "/placeholder.svg",
    category: "basic"
  },
  {
    id: "4",
    title: "Защита короля",
    description: "Узнай, как защитить своего короля от атак противника",
    level: "средний",
    imageUrl: "/placeholder.svg",
    category: "intermediate"
  },
  {
    id: "5",
    title: "Тактические приёмы",
    description: "Изучи основные тактические приёмы и комбинации",
    level: "средний",
    imageUrl: "/placeholder.svg",
    category: "intermediate"
  },
  {
    id: "6",
    title: "Эндшпиль",
    description: "Улучши свою игру в заключительной стадии партии",
    level: "продвинутый",
    imageUrl: "/placeholder.svg",
    category: "advanced"
  },
  {
    id: "7",
    title: "Атака на короля",
    description: "Научись проводить атаку на короля противника",
    level: "продвинутый",
    imageUrl: "/placeholder.svg",
    category: "advanced"
  },
  {
    id: "8",
    title: "Детский мат",
    description: "Изучи самый быстрый мат в шахматах и как его избежать",
    level: "начинающий",
    imageUrl: "/placeholder.svg",
    category: "basic"
  },
  {
    id: "9",
    title: "Рокировка",
    description: "Узнай, как правильно делать рокировку и когда её применять",
    level: "начинающий",
    imageUrl: "/placeholder.svg",
    category: "basic"
  }
];

const Lessons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredLessons = lessonsData.filter(lesson => {
    const matchesSearch = lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === "all" || 
                      (activeTab === "basic" && lesson.level === "начинающий") ||
                      (activeTab === "intermediate" && lesson.level === "средний") ||
                      (activeTab === "advanced" && lesson.level === "продвинутый");
    
    return matchesSearch && matchesTab;
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <ChessLayout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-chess-primary">Интерактивные уроки</h1>
        <p className="text-xl mb-8">
          Учись играть в шахматы с помощью наших интерактивных уроков для всех уровней подготовки!
        </p>

        <div className="mb-8">
          <div className="relative">
            <Input
              className="pl-10 bg-white"
              placeholder="Поиск уроков..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="mb-8">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="all">Все уроки</TabsTrigger>
            <TabsTrigger value="basic">Для начинающих</TabsTrigger>
            <TabsTrigger value="intermediate">Средний уровень</TabsTrigger>
            <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLessons.map(lesson => (
                <LessonCard 
                  key={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  level={lesson.level as any}
                  imageUrl={lesson.imageUrl}
                  lessonId={lesson.id}
                />
              ))}
            </div>
            {filteredLessons.length === 0 && (
              <div className="text-center py-10">
                <h3 className="text-2xl font-bold mb-2">Уроки не найдены</h3>
                <p className="text-gray-600 mb-6">Попробуйте изменить критерии поиска</p>
                <Button onClick={() => {setSearchTerm(""); setActiveTab("all");}}>
                  Сбросить фильтры
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="basic" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLessons.map(lesson => (
                <LessonCard 
                  key={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  level={lesson.level as any}
                  imageUrl={lesson.imageUrl}
                  lessonId={lesson.id}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="intermediate" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLessons.map(lesson => (
                <LessonCard 
                  key={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  level={lesson.level as any}
                  imageUrl={lesson.imageUrl}
                  lessonId={lesson.id}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLessons.map(lesson => (
                <LessonCard 
                  key={lesson.id}
                  title={lesson.title}
                  description={lesson.description}
                  level={lesson.level as any}
                  imageUrl={lesson.imageUrl}
                  lessonId={lesson.id}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-chess-light rounded-lg p-6 mt-10">
          <h2 className="text-2xl font-bold mb-4 text-chess-primary">Для учителей и родителей</h2>
          <p className="mb-4">
            Наши интерактивные уроки разработаны педагогами и шахматными тренерами специально для детей. 
            Они помогут вашему ребенку не только освоить шахматы, но и развить:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Логическое мышление и способность планировать</li>
            <li>Концентрацию внимания</li>
            <li>Память и пространственное мышление</li>
            <li>Умение принимать решения</li>
            <li>Способность анализировать и оценивать ситуацию</li>
          </ul>
          <Button className="bg-chess-secondary hover:bg-chess-primary">
            Для преподавателей
          </Button>
        </div>
      </div>
    </ChessLayout>
  );
};

export default Lessons;
