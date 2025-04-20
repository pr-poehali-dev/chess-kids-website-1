import ChessLayout from "@/components/ChessLayout";
import LessonCard from "@/components/LessonCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, TrophyIcon } from "lucide-react";

const Lessons = () => {
  // В реальном приложении эти данные могут приходить с сервера
  const beginnerLessons = [
    {
      id: 1,
      title: "Знакомство с фигурами",
      description: "Узнай, как называются шахматные фигуры и как они ходят",
      difficulty: "easy",
      completed: true,
      lessonNumber: 1,
      route: "/lessons/1"
    },
    {
      id: 2,
      title: "Правила игры",
      description: "Изучи базовые правила шахматной игры",
      difficulty: "easy",
      completed: true,
      lessonNumber: 2,
      route: "/lessons/2"
    },
    {
      id: 3,
      title: "Первая партия",
      description: "Сыграй свою первую шахматную партию с подсказками",
      difficulty: "easy",
      completed: false,
      lessonNumber: 3,
      route: "/lessons/3"
    },
    {
      id: 4,
      title: "Цель игры - мат",
      description: "Научись ставить мат в один ход",
      difficulty: "medium",
      completed: false,
      lessonNumber: 4,
      route: "/lessons/4"
    },
    {
      id: 5,
      title: "Защита от шаха",
      description: "Узнай, как защищаться от шахов соперника",
      difficulty: "medium",
      locked: true,
      lessonNumber: 5,
      route: "/lessons/5"
    },
    {
      id: 6,
      title: "Рокировка",
      description: "Изучи специальный ход - рокировку, и когда её делать",
      difficulty: "medium",
      locked: true,
      lessonNumber: 6,
      route: "/lessons/6"
    }
  ];
  
  const intermediateLessons = [
    {
      id: 7,
      title: "Основы тактики",
      description: "Изучи базовые тактические приёмы: вилки и связки",
      difficulty: "medium",
      locked: true,
      lessonNumber: 1,
      route: "/lessons/7"
    },
    {
      id: 8,
      title: "Двойной удар",
      description: "Научись атаковать две цели одновременно",
      difficulty: "medium",
      locked: true,
      lessonNumber: 2,
      route: "/lessons/8"
    },
    {
      id: 9,
      title: "Открытое нападение",
      description: "Освой тактику открытого нападения",
      difficulty: "hard",
      locked: true,
      lessonNumber: 3,
      route: "/lessons/9"
    }
  ];
  
  const advancedLessons = [
    {
      id: 10,
      title: "Дебютные принципы",
      description: "Изучи основные принципы дебюта",
      difficulty: "medium",
      locked: true,
      lessonNumber: 1,
      route: "/lessons/10"
    },
    {
      id: 11,
      title: "Пешечные структуры",
      description: "Узнай, как правильно расположить пешки",
      difficulty: "hard",
      locked: true,
      lessonNumber: 2,
      route: "/lessons/11"
    },
    {
      id: 12,
      title: "Эндшпильная техника",
      description: "Освой технику игры в окончаниях",
      difficulty: "hard",
      locked: true,
      lessonNumber: 3,
      route: "/lessons/12"
    }
  ];
  
  // Рассчитываем прогресс
  const completedLessons = beginnerLessons.filter(lesson => lesson.completed).length;
  const totalLessons = beginnerLessons.length;
  const progressPercentage = (completedLessons / totalLessons) * 100;
  
  return (
    <ChessLayout>
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-chess-primary">Шахматные уроки</h1>
        <p className="text-xl mb-6">
          Интерактивные уроки, которые помогут тебе научиться играть в шахматы и стать чемпионом!
        </p>
      </section>
      
      <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold text-chess-primary">Твой прогресс</h2>
            <p className="text-gray-600">Пройдено {completedLessons} из {totalLessons} уроков</p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <TrophyIcon className="h-8 w-8 text-yellow-400 mr-2" />
            <div>
              <p className="font-bold">Ранг: Новичок</p>
              <p className="text-sm text-gray-600">50 XP до следующего уровня</p>
            </div>
          </div>
        </div>
        <Progress value={progressPercentage} className="h-3" />
      </section>
      
      <Tabs defaultValue="beginner" className="mb-10">
        <TabsList className="grid grid-cols-3 w-full max-w-md mb-8">
          <TabsTrigger value="beginner">Новичок</TabsTrigger>
          <TabsTrigger value="intermediate">Средний</TabsTrigger>
          <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
        </TabsList>
        
        <TabsContent value="beginner" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beginnerLessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                title={lesson.title}
                description={lesson.description}
                difficulty={lesson.difficulty as any}
                completed={lesson.completed}
                locked={lesson.locked}
                lessonNumber={lesson.lessonNumber}
                route={lesson.route}
              />
            ))}
          </div>
          
          <div className="flex justify-between mt-8">
            <Button variant="outline" disabled>
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Предыдущая страница
            </Button>
            <Button className="bg-chess-primary hover:bg-purple-700">
              Следующая страница
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="intermediate" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {intermediateLessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                title={lesson.title}
                description={lesson.description}
                difficulty={lesson.difficulty as any}
                completed={lesson.completed}
                locked={lesson.locked}
                lessonNumber={lesson.lessonNumber}
                route={lesson.route}
              />
            ))}
          </div>
          
          <div className="text-center mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Разблокируй средний уровень!</h3>
            <p className="mb-4">
              Чтобы получить доступ к этим урокам, сначала пройди все уроки для новичков.
            </p>
            <Button className="bg-chess-primary hover:bg-purple-700">
              Перейти к начальным урокам
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedLessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                title={lesson.title}
                description={lesson.description}
                difficulty={lesson.difficulty as any}
                completed={lesson.completed}
                locked={lesson.locked}
                lessonNumber={lesson.lessonNumber}
                route={lesson.route}
              />
            ))}
          </div>
          
          <div className="text-center mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Готов к сложным задачам?</h3>
            <p className="mb-4">
              Эти продвинутые уроки помогут тебе стать настоящим шахматным мастером!
              Сначала пройди уроки среднего уровня.
            </p>
            <Button className="bg-chess-primary hover:bg-purple-700">
              Перейти к урокам среднего уровня
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </ChessLayout>
  );
};

export default Lessons;
