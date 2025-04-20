import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Lock, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface LessonCardProps {
  title: string;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  completed?: boolean;
  locked?: boolean;
  imageSrc?: string;
  lessonNumber: number;
  route: string;
}

const LessonCard = ({
  title,
  description,
  difficulty,
  completed = false,
  locked = false,
  imageSrc = '/placeholder.svg',
  lessonNumber,
  route
}: LessonCardProps) => {
  
  const difficultyMap = {
    easy: { label: "Легко", color: "bg-green-100 text-green-800 hover:bg-green-200" },
    medium: { label: "Средне", color: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" },
    hard: { label: "Сложно", color: "bg-red-100 text-red-800 hover:bg-red-200" }
  };
  
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg ${locked ? 'opacity-70' : ''}`}>
      <div className="relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-40 object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge className={difficultyMap[difficulty].color}>
            {difficultyMap[difficulty].label}
          </Badge>
        </div>
        {completed && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-chess-primary text-white">
              <CheckCircle className="h-4 w-4 mr-1" /> Пройдено
            </Badge>
          </div>
        )}
        <div className="absolute -bottom-5 left-4 bg-chess-primary text-white rounded-full h-10 w-10 flex items-center justify-center font-bold text-lg">
          {lessonNumber}
        </div>
      </div>
      
      <CardHeader className="pt-8">
        <CardTitle className="flex items-center justify-between">
          {title}
          {locked && <Lock className="h-5 w-5 text-muted-foreground" />}
          {difficulty === "hard" && !locked && (
            <div className="flex">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            </div>
          )}
          {difficulty === "medium" && !locked && (
            <div className="flex">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-gray-300" />
            </div>
          )}
          {difficulty === "easy" && !locked && (
            <div className="flex">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <Star className="h-4 w-4 text-gray-300" />
              <Star className="h-4 w-4 text-gray-300" />
            </div>
          )}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardFooter>
        {locked ? (
          <Button disabled className="w-full">
            <Lock className="mr-2 h-4 w-4" />
            Заблокировано
          </Button>
        ) : (
          <Link to={route} className="w-full">
            <Button className="w-full bg-chess-primary hover:bg-purple-700">
              {completed ? "Повторить урок" : "Начать урок"}
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default LessonCard;
